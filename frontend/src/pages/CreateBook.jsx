import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [image, setImage] = useState(null); // Store the file object
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSaveBook = () => {
    // We must use FormData for file uploads
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('publishYear', publishYear);
    if (image) {
      formData.append('image', image);
    }

    setLoading(true);
    axios
      .post('http://localhost:5555/books', formData)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error occurred. Check console for details.');
        console.log(error);
      });
  };

  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <div className="max-w-2xl mx-auto">
        <BackButton />
        <div className="mt-6 mb-8">
          <h1 className='text-3xl font-bold text-gray-800'>Create New Book</h1>
        </div>
        {loading ? <Spinner /> : (
          <BookForm
            title={title}
            author={author}
            publishYear={publishYear}
            image={image} // pass the file
            setTitle={setTitle}
            setAuthor={setAuthor}
            setPublishYear={setPublishYear}
            handleImageChange={handleImageChange}
            handleSubmit={handleSaveBook}
            buttonText='Create Book'
          />
        )}
      </div>
    </div>
  );
};

export default CreateBook;