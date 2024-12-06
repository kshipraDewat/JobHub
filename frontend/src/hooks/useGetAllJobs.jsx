import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAllJobs } from '@/Redux/jobSlice'


const useGetAllJobs = () => {
    const VITE_JOB_API_END_POINT = import.meta.env.VITE_JOB_API_END_POINT
    const dispatch = useDispatch()
  useEffect(()=>{
    const fetchAllJobs = async()=>{
        try{
            const res = await axios.get(`${VITE_JOB_API_END_POINT}/get`, {withCredentials:true});
            if(res.data.success){
                dispatch(setAllJobs(res.data.jobs))
            }
        }catch(error){
            console.log(error)
        }
    }
    fetchAllJobs()
  },[])
}

export default useGetAllJobs
