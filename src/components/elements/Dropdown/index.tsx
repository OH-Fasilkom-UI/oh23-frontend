import { FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import { Questions } from './Content';

export const Dropdown: React.FC<Questions> = ({
  body,
  header
}) => {
  const [isExpand, setExpand] = useState(false);

  const toggleDropdown = () => {
    setExpand(!isExpand);
  };

  return (
    <div className="flex bg-shimmerGreen-2 bg-opacity-30 backdrop-blur rounded-lg hover:cursor-pointer" onClick={toggleDropdown}>
      <div className="flex flex-row justify-between gap-8 w-full items-center">
        <div className="text-left m-4 my-4 w-full overflow-hidden">

          <h3 className='w-full font-medium text-white-2'>{header}</h3>
          <div
            className={`w-full transition-max-height duration-500 ease-in-out ${isExpand ? 'max-h-screen' : 'max-h-0'
              } overflow-hidden`}
          >
            <p className='mt-2 w-full'>
              {body}
            </p>
          </div>
        </div>
        <FaChevronDown
          className={`mr-4 cursor-pointer transform transition-transform ${isExpand ? 'rotate-180' : ''
            }`}
        />
      </div>
    </div>
  );
};
