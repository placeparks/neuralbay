import React from 'react'
import Image from 'next/image'

const Cards = () => {
  return (
      <div className='p-4 md:p-32 flex flex-col justify-center items-center font-sans'>
          
<a href="#" className="flex flex-col items-center bg-white mb-16 rounded-lg border-none md:flex-row md:max-w-xxl gap-12">
    <Image width={500} height={500} className="object-cover" src="/assets/Frame1.png" alt="" />
    <div className="flex flex-col justify-between p-4 w-full md:w-2/5">
    <h3 className=" mb-2 text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white leading-10">Scale Up Your Business With Pretrained AI Models</h3>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Make informed decisions by accessing detailed documentation for each AI model. Dive into the architecture, training data, performance metrics, and implementation guidelines. Gain valuable insights into accuracy, latency, resource requirements, and other vital details to ensure seamless integration into your workflow.</p>
</div>

</a>
  
<a href="#" className="flex flex-col items-center bg-white mb-16 rounded-lg border-none md:flex-row md:max-w-xxl gap-12">
    <div className="flex flex-col justify-between p-4 order-2 md:order-1 w-full md:w-3/5">
        <h5 className="mb-2 text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white leading-10">Explore an Extensive Collection of AI Models</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Browse through our vast collection of AI models, carefully curated to cater to various domains, such as computer vision, natural language processing, machine learning, and more. With Neuralbay, finding the ideal model for your specific task, industry, or framework has never been easier</p>
    </div>
    <Image width={500} height={500} className="object-cover w-full rounded-t-lg md:rounded-none md:rounded-l-lg order-1 md:order-2" src="/assets/Frame2.png" alt="" />
</a>

          
          <a href="#" className="flex flex-col items-center bg-white mb-16 rounded-lg border-none md:flex-row md:max-w-xxl gap-12">
          <Image width={500} height={500} className="object-cover w-full rounded-t-lg  md:rounded-none md:rounded-s-lg" src="/assets/Frame3.png" alt="" />
    <div className="flex flex-col justify-between p-4 w-full md:w-3/5">
        <h5 className="mb-2  text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white leading-10">Collaborate and Seek Expert Guidance</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Join our thriving community of AI enthusiasts and experts to engage in discussions, seek advice, and collaborate with like-minded individuals. Tap into shared knowledge and collective wisdom to enhance your understanding of AI models and their applications. Neuralbay is more than just a marketplace – it's a vibrant community driving innovation.</p>
    </div>
          </a>
          
    </div>
  )
}

export default Cards
