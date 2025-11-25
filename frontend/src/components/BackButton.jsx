import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors shadow-sm'
      >
        <BsArrowLeft className='text-xl' />
        <span className='font-medium'>Back</span>
      </Link>
    </div>
  );
};

export default BackButton;