import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
<footer className="bg-bluebg dark:bg-gray-900 font-sans">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div className='flex flex-col'>
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <Image src="/assets/logos.png" width={30} height={30} alt="Logo" className=''/>
                          <span className="self-center pl-2 text-1xl font-semibold whitespace-nowrap dark:text-white font-sans">Neuralbay</span>
                      </a>
                      <p className='text-gray-400 pt-8'>Vast Collection of AI Models at Your Finger Tips</p>
                  </div>
              <div className='flex flex-col md:flex-row gap-0 md:gap-14 pt-12 -pb-12'>
                  <h2 className="mb-6 text-md text-gray-700 dark:text-white">Marketplace</h2>
                  <h2 className="mb-6 text-md text-gray-700 dark:text-white">Models</h2>
                  <h2 className="mb-6 text-md text-gray-700 dark:text-white">About Us</h2>
                  <h2 className="mb-6 text-md text-gray-700 dark:text-white">Contact Us</h2>
                  <h2 className="mb-6 text-md text-gray-700 dark:text-white">Learn More</h2>
                  <h2 className="mb-6 text-md text-gray-700 dark:text-white">Privacy</h2>
              </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Neuralbay</a>. All rights reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
             
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <Image src='/assets/twitter.png' height={24} width={24} alt='twitter'/>
              </a>                      
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <Image src='/assets/facebook.png' height={24} width={24} alt='facebook'/>
              </a> 
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <Image src='/assets/linkedin.png' height={24} width={24} alt='linkedin'/>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <Image src='/assets/github.png' height={24} width={24} alt='github'/>
              </a>
          </div>
      </div>
    </div>
</footer>


  )
}

export default Footer
