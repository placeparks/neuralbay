import React from 'react'
import Image from 'next/image'

const Features = () => {
    return (
      <div className='pb-20'>
      <div className='flex flex-col items-center justify-center font-sans mt-32'>
          <h1 className='font-bold text-3xl md:text-5xl'>Our Powerful Features</h1>
          <p className='mt-4 w-3/5 text-center'>Our Web 3 AI Model Marketplace is your one-stop destination for accessing, testing, and purchasing a wide range of AI models developed by talented AI engineers from around the world. </p>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center gap-8 mt-20'>
                <div className='flex flex-col items-left justift-start gap-8'>
                    
                    {/*card 1*/}
<a href="#" className="flex flex-col font-sans items-center bg-bluecustom border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="flex flex-col justify-between p-12 ">
        <h5 className="mb-2 text-3xl font-sans font-semibold leading-10 tracking-tight text-gray-900 dark:text-white">Secured By Blockchain Tech</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Neuralbay is the ultimate AI Model Marketplace, offering a wide selection of state-of-the-art AI models created by talented AI engineers from across the globe.</p>
                        </div>
                        <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/assets/card1.png" alt=""  width={500}
      height={500}/>

</a>

                    {/*card 2*/}                    
                    <a href="#" className="flex flex-col font-sans items-center bg-yellowcustom border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="flex flex-col justify-between p-12 ">
        <h5 className="mb-2 text-3xl font-sans font-semibold leading-10 tracking-tight text-gray-900 dark:text-white">Upload and Monitize</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Neuralbay is the ultimate AI Model Marketplace, offering a wide selection of state-of-the-art AI models created by talented AI engineers from across the globe.</p>
                        </div>
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/assets/card2.png" alt=""  width={500}
      height={500}/>

</a>
                </div>
                

                                    {/*card 3*/}

<div class="md:max-w-lg md:h-xl bg-pinkcustom border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:pt-32 p-4">
    <div className='flex items-center justify-center'>
                    <a href="#">
        <Image className="rounded-t-lg md:-mt-14 md:mb-10 " src="/assets/card3.png" alt=""  width={300}
      height={300} />
                        </a>
                        </div>
    <div className="p-5">
      
            <h5 className="mb-2 text-3xl md:w-3/6 font-sans font-semibold leading-10 tracking-tight text-gray-900 dark:text-white">Vast Collection of AI Models</h5>
   
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Neuralbay is the ultimate AI Model Marketplace, offering a wide selection of state-of-the-art AI models created by talented AI engineers from across the globe.</p>
     
    </div>
</div>


            </div>
            </div>
  )
}

export default Features
