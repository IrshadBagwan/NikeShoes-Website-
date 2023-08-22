import React from 'react'
import Button from './Button'
import { arrowRight } from '../assets/icons'
const Contactus = () => {
  return (
    <section className='max-container' id='contact-us'>
        <div className='flex text-coral-red items-center justify-center '>
            <h1 className= "mt-10 font-palanquin text-4xl max-sm:text-[50px] max-sm:leading-[50px] font-bold">
                <span>
                    Contact US
                </span>
            </h1>
            
        </div>
        <div>
            <form>
           
            <input className='w-[100%] mt-6 mb-5' type="text" placeholder='Enter Name' />
           
            <input className='w-[100%] mb-5' type="email" placeholder='Enter Email' />
            <input className='w-[100%] mb-5' type="number" placeholder='Enter Your Number' />
            <textarea className='w-[100%] mb-5' type="textarea" placeholder='Your Message' />
            <Button label="Submit"   iconURL={arrowRight}/>
            </form>
        </div>
    </section>
  )
}

export default Contactus
