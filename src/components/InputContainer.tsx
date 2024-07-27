export const Input: React.FC = () => {
  return (
    <form>
      <div className='flex justify-center w-full h-20'>
        <div className='w-1/3 mr-2'>
          <input
            type='text'
            id='first_name'
            className='bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-blue-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='John'
            required
          />
        </div>
        <div>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-sm w-full sm:w-auto p-2.5 text-center  dark:hover:bg-blue-700 '
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
