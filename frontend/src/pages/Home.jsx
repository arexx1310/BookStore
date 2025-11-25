import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import { IoGrid, IoList } from 'react-icons/io5';
import Spinner from '../components/Spinner';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-20">
      {/* Navbar */}
      <div className="bg-white shadow-sm sticky top-0 z-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              BookStore Admin
            </h1>
          </div>
          <div className="text-sm text-gray-500 font-medium">
            {books.length > 0 ? `${books.length} Books` : 'Empty Library'}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold text-gray-800">Inventory</h2>
          
          <div className="flex items-center gap-4 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setView('table')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  view === 'table' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <IoList className="text-xl" />
              </button>
              <button
                onClick={() => setView('card')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  view === 'card' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <IoGrid className="text-xl" />
              </button>
            </div>

            <div className="w-px h-6 bg-gray-200"></div>

            <Link
              to="/books/create"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <MdOutlineAddBox className="text-xl" />
              <span>Add Book</span>
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {loading ? (
            <Spinner />
          ) : (
            <>
              {books.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl shadow-sm border border-gray-200 border-dashed">
                  <div className="text-6xl mb-4">📭</div>
                  <h3 className="text-xl font-semibold text-gray-700">No books found</h3>
                  <p className="text-gray-500 mt-2">Get started by adding a new book to the inventory.</p>
                </div>
              ) : (
                view === 'table' ? <BooksTable books={books} /> : <BooksCard books={books} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}