import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BookSingleCard = ({ book }) => {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full">
      
      {/* Image Section */}
      <div className="h-48 w-full bg-gray-100 flex items-center justify-center overflow-hidden relative">
         {book.image ? (
            <img 
                src={`http://localhost:5555/${book.image}`} 
                alt={book.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
         ) : (
            <div className="text-gray-300 flex flex-col items-center">
                <PiBookOpenTextLight className="text-6xl" />
                <span className="text-xs mt-2">No Cover</span>
            </div>
         )}
         
         {/* Badge */}
         <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-indigo-600 shadow-sm">
           {book.publishYear}
         </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="text-gray-400 text-xs font-mono mb-2">
           #{book._id.slice(-4)}
        </div>

        <h2 className="text-xl font-bold text-gray-800 leading-tight mb-2 line-clamp-2">
           {book.title}
        </h2>
        
        <div className="flex items-center text-gray-500 text-sm mb-4">
           <BiUserCircle className="mr-1 text-lg" />
           {book.author}
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
          <Link 
            to={`/books/details/${book._id}`} 
            className="flex-1 flex justify-center py-2 text-green-500 hover:bg-green-50 rounded-lg transition-colors"
          >
            <BsInfoCircle className="text-xl" />
          </Link>
          <div className="w-px h-6 bg-gray-200 mx-2"></div>
          <Link 
            to={`/books/edit/${book._id}`} 
            className="flex-1 flex justify-center py-2 text-yellow-500 hover:bg-yellow-50 rounded-lg transition-colors"
          >
            <AiOutlineEdit className="text-xl" />
          </Link>
          <div className="w-px h-6 bg-gray-200 mx-2"></div>
          <Link 
            to={`/books/delete/${book._id}`} 
            className="flex-1 flex justify-center py-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <MdOutlineDelete className="text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookSingleCard;