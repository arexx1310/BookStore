import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { HiOutlineExclamationTriangle } from 'react-icons/hi2';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
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
    <div className='p-6 min-h-screen bg-gray-50 flex flex-col items-center justify-center'>
       <div className="absolute top-6 left-6">
         <BackButton />
       </div>
      
      {loading ? <Spinner /> : ''}
      
      <div className='bg-white border border-red-100 shadow-2xl rounded-2xl p-10 max-w-md w-full text-center relative overflow-hidden'>
        <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>

        <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <HiOutlineExclamationTriangle className='text-5xl text-red-500'/>
        </div>

        <h3 className='text-2xl font-bold text-gray-800 mb-2'>Delete Book?</h3>
        <p className="text-gray-500 mb-8">
          Are you sure you want to delete this book? This action cannot be undone.
        </p>

        <div className="flex gap-4">
            <button
                className='flex-1 py-3 px-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors'
                onClick={() => navigate('/')}
            >
                Cancel
            </button>
            <button
                className='flex-1 py-3 px-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 shadow-lg shadow-red-200 transition-transform active:scale-95'
                onClick={handleDeleteBook}
            >
                Yes, Delete
            </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;