import express from 'express';
import { Book } from '../models/bookModel.js';
import multer from 'multer'; // Import Multer
import fs from 'fs';

const router = express.Router();

// --- MULTER CONFIGURATION ---
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Ensure this folder exists in your backend root!
        const uploadPath = 'uploads/';
        if (!fs.existsSync(uploadPath)){
            fs.mkdirSync(uploadPath);
        }
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        // Create a unique filename: timestamp + original name
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });


// --- ROUTES ---

// Route for save a new book
// We add 'upload.single('image')' middleware here
router.post('/', upload.single('image'), async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        // Create the new book object
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
            // If an image was uploaded, save the path. 
            // We normalize the path to use forward slashes for URLs
            image: req.file ? req.file.path.replace(/\\/g, "/") : null 
        };

        const book = await Book.create(newBook);

        return res.status(201).send(book);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route to get all books from database
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});

        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route to get one book by id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
})

// Route to update book 
// We allow image updates here too
router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            });
        }

        const { id } = req.params;

        // Prepare data to update
        let updateData = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };

        // If a NEW image is uploaded, update the image field.
        // If not, we typically leave it alone (or you can handle logic to delete old ones here)
        if (req.file) {
            updateData.image = req.file.path.replace(/\\/g, "/");
        }

        const result = await Book.findByIdAndUpdate(id, updateData);

        if (!result) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.status(200).send({ message: 'Book updated successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


// Route for deleting a book
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;