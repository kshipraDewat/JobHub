import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/Redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { motion } from 'framer-motion'

// const randomJobs = [1, 2,45];

const Browse = () => {
    useGetAllJobs();
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);

    useEffect(() => {
        if (searchedQuery) {
           console.log("query",searchedQuery) 
           console.log("jobs",allJobs)
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchedQuery.toLowerCase())
            })
           console.log(filteredJobs) 
            setFilterJobs(filteredJobs)

        } else {
            setFilterJobs(allJobs)
        }
    }, [allJobs, searchedQuery]);
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>
                <div className=' p-5 '>
                {
                        filterJobs.length <= 0 ? <span>Job not found</span> : (
                            <div className=' pb-5'>
                                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                    {
                                        filterJobs.map((job) =>
                                            <motion.div
                                                initial={{ opacity: 0, x: 100 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -100 }}
                                                transition={{ duration: 0.3 }}
                                                key={job?._id}>
                                                <Job job={job} />
                                            </motion.div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default Browse
