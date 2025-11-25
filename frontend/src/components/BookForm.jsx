import React, { useRef } from 'react';
import { MdOutlineCloudUpload } from 'react-icons/md';

const BookForm = ({ 
  title, 
  author, 
  publishYear, 
  image, 
  setTitle, 
  setAuthor, 
  setPublishYear, 
  handleImageChange, // New prop function
  handleSubmit, 
  buttonText = 'Save' 
}) => {
  const fileInputRef = useRef(null);

  // Helper to display preview: if image is a File object (new upload) or a string (existing url)
  const renderImagePreview = () => {
    if (image && typeof image === 'object') {
      return URL.createObjectURL(image);
    }
    if (image && typeof image === 'string') {
      return `http://localhost:5555/${image}`;
    }
    return null;
  };

  const previewUrl = renderImagePreview();

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden max-w-lg mx-auto">
      <div className="p-8">
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-6">
          
          {/* Image Upload Section */}
          <div className="flex flex-col items-center justify-center w-full mb-6">
            <label 
              htmlFor="dropzone-file" 
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all relative overflow-hidden group"
            >
              {previewUrl ? (
                <img 
                  src={previewUrl} 
                  alt="Book Cover Preview" 
                  className="w-full h-full object-cover rounded-xl" 
                />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-400 group-hover:text-indigo-500 transition-colors">
                  <MdOutlineCloudUpload className="text-5xl mb-3" />
                  <p className="mb-2 text-sm font-semibold">Click to upload cover</p>
                  <p className="text-xs">SVG, PNG, JPG or GIF</p>
                </div>
              )}
              
              <input 
                id="dropzone-file" 
                type="file" 
                className="hidden" 
                onChange={handleImageChange}
                ref={fileInputRef}
              />
            </label>
            {previewUrl && (
              <button
                type="button"
                onClick={() => {
                  fileInputRef.current.value = "";
                  handleImageChange({ target: { files: [] } }); // clear
                }}
                className="mt-2 text-xs text-red-500 hover:text-red-700 underline"
              >
                Remove Image
              </button>
            )}
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">Book Title</label>
            <input
              type='text'
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
              placeholder="e.g. The Great Gatsby"
              required
            />
          </div>

          <div>
            <label htmlFor="author" className="block text-sm font-semibold text-gray-700 mb-2">Author</label>
            <input
              type='text'
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
              placeholder="e.g. F. Scott Fitzgerald"
              required
            />
          </div>

          <div>
            <label htmlFor="publishYear" className="block text-sm font-semibold text-gray-700 mb-2">Publish Year</label>
            <input
              type='number'
              id="publishYear"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
              placeholder="e.g. 1925"
              required
            />
          </div>

          <button 
            type='submit'
            className="w-full py-3.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;