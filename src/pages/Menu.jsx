import React from 'react'

const Menu = () => {
  return (
    <div>
         <div className='flex gap-5 h-[300px] w-[400px] text mr-8 items-center justify-center font-medium mb-16'>
                        <a href="https://commonadmissions.com/" target="_blank" rel="noopener noreferrer">
                        Common Admissions
                        </a>
                        <a href="https://uniformapp.in/schools/" target="_blank" rel="noopener noreferrer">
                        School Portal
                        </a>
                        <a href="https://uniformapp.in/schoolsearch.php" target="_blank" rel="noopener noreferrer">
                        Find Schools
                        </a>
                        <a href="https://uniformapp.in/blog/" target="_blank" rel="noopener noreferrer">
                        Blog
                        </a>
                        <a href="https://uniformapp.in/apply.php" target="_blank" rel="noopener noreferrer">
                        Log In
                        </a>
                        <div>
                        <a className='bg-green-600  h-[55px] w-[80px] flex items-center justify-center cursor-pointer' onClick={() => navigate('/signup')}>
                        Sign Up
                        </a>
                        </div>
                        <a>
                          <IoIosSearch className='text-xl font-extrabold text-gray-200'/>
                        </a>
                    </div>
    </div>
  )
}

export default Menu