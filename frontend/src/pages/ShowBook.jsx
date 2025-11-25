import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        <BackButton />
        
        {loading ? (
          <Spinner />
        ) : (
          <div className="mt-8 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            
            {/* Image Side - ADDED LINK HERE */}
            <div className="md:w-1/3 bg-gray-100 relative min-h-[300px]">
                {book.image ? (
                    // Wrap the image in an anchor tag <a>
                    <a 
                      href={`http://localhost:5555/${book.image}`} 
                      target="_blank" // Opens the full image in a new tab
                      rel="noopener noreferrer" 
                      className="block w-full h-full"
                    >
                        <img 
                            src={`http://localhost:5555/${book.image}`} 
                            alt={book.title} 
                            className="w-full h-full object-cover absolute inset-0 transition-opacity duration-300 hover:opacity-80 cursor-pointer"
                        />
                    </a>
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span>No Image Available</span>
                    </div>
                )}
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
              <div className="mb-6">
                  <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-4">
                    Released {book.publishYear}
                  </span>
                  <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{book.title}</h1>
                  <p className="text-xl text-gray-500">by {book.author}</p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-6 border-t pt-6">
                <div>
                   <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Book ID</span>
                   <span className="text-sm font-mono text-gray-600 break-all">{book._id}</span>
                </div>

                <div>
                   <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Last Updated</span>
                   <span className="text-sm font-medium text-gray-700">{new Date(book.updatedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowBook;