import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='text-center mx-2'>
    <div className='flex flex-col gap-5 my-10'>
        <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-cyan-800 font-medium'>Connecting Talent with Opportunity</span>
        <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
        <p>Welcome to JobHub, your ultimate destination for finding the perfect job opportunities. <br />  <span className='hidden md:block'>Whether you're a job seeker looking to kickstart your career or a recruiter searching for top talent, we've got you covered.</span> </p>
        <div className='flex md:w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
            <input
                type="text"
                placeholder='Find your dream jobs'
                className='outline-none border-none w-full'

            />
            <Button  className="rounded-r-full bg-[#6A38C2]">
                <Search className='h-5 w-5' />
            </Button>
        </div>
    </div>
</div>
  )
}

export default HeroSection
