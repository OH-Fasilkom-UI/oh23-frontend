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
    <div className="flex bg-sections rounded-lg hover:cursor-grab" onClick={toggleDropdown}>
      <div className="flex flex-row justify-between items-center">
        <div className="text-left font-semibold mx-4 my-4 w-[75%] overflow-hidden">

          <p className='font-bold'>{header}</p>
          <div
            className={`transition-max-height duration-500 ease-in-out ${isExpand ? 'max-h-screen' : 'max-h-0'
              } overflow-hidden`}
          >
            <p className='mt-2'>
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
