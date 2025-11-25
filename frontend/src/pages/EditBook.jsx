import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import BookForm from '../components/BookForm';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [image, setImage] = useState(null); // Can be string (URL) or File object
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setPublishYear(String(response.data.publishYear));
        // Set existing image path
        setImage(response.data.image); 
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check console');
        console.log(error);
      });
  }, [id]);

  const handleImageChange = (e) => {
    if(e.target.files && e.target.files[0]){
       setImage(e.target.files[0]); // Overwrite string with new File object
    }
  };

  const handleEditBook = () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('publishYear', publishYear);
    
    // Only append image if it's a new File. 
    // If it's a string (existing URL), we don't send it back to the server 
    // (unless your backend logic deletes the old one if not provided, but usually we just leave it alone)
    if (image && typeof image === 'object') {
      formData.append('image', image);
    }

    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, formData)
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
          <h1 className='text-3xl font-bold text-indigo-600'>Edit Book</h1>
        </div>
        {loading ? <Spinner /> : (
          <BookForm
            title={title}
            author={author}
            publishYear={publishYear}
            image={image}
            setTitle={setTitle}
            setAuthor={setAuthor}
            setPublishYear={setPublishYear}
            handleImageChange={handleImageChange}
            handleSubmit={handleEditBook}
            buttonText='Update Book'
          />
        )}
      </div>
    </div>
  );
};

export default EditBook;