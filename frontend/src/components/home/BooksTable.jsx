import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { PiBookOpenTextLight } from 'react-icons/pi';

const BooksTable = ({ books }) => {
  return (
    <div className="overflow-hidden bg-white rounded-xl shadow-md border border-gray-100">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">#</th>
              <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Cover</th>
              <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Author</th>
              <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Year</th>
              <th className="px-6 py-4 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 bg-white">
            {books.map((book, index) => (
              <tr key={book._id} className="hover:bg-indigo-50/30 transition-colors duration-200">

                {/* Index */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 font-mono text-center">
                  {(index + 1).toString().padStart(2, '0')}
                </td>

                {/* Cover */}
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="h-12 w-10 bg-gray-100 rounded-md overflow-hidden border border-gray-200 mx-auto flex items-center justify-center">
                    {book.image ? (
                      <img
                        src={`http://localhost:5555/${book.image}`}
                        alt="cover"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <PiBookOpenTextLight className="text-gray-400 text-xl" />
                    )}
                  </div>
                </td>

                {/* Title */}
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="text-sm font-bold text-gray-900">{book.title}</div>
                </td>

                {/* Author */}
                <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell text-center">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {book.author}
                  </div>
                </td>

                {/* Year */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell text-center">
                  {book.publishYear}
                </td>

                {/* Actions */}
                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                  <div className="flex justify-center items-center space-x-3">
                    <Link
                      to={`/books/details/${book._id}`}
                      className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                    >
                      <BsInfoCircle className="text-lg" />
                    </Link>
                    <Link
                      to={`/books/edit/${book._id}`}
                      className="p-2 bg-yellow-50 text-yellow-600 rounded-lg hover:bg-yellow-100 transition-colors"
                    >
                      <AiOutlineEdit className="text-lg" />
                    </Link>
                    <Link
                      to={`/books/delete/${book._id}`}
                      className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      <MdOutlineDelete className="text-lg" />
                    </Link>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BooksTable;
