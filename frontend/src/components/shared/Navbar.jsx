import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React from 'react'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { LogOut, User2 } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "sonner"
import axios from "axios"
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from "@/Redux/authSlice"

const Navbar = () => {
  const { user } = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className="pt-3">
      <div className='flex items-center justify-between mx-10 lg:mx-auto max-w-7xl h-12 ' >
        <div>
          <h1 className='text-2xl font-bold'>Job<span className='text-[#5b30a6] font-bold'>Hub</span></h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className='font-medium items-center gap-5 hidden sm:flex'>
            {
              user && user.role === 'recruiter' ? (
                <>
                  <li><Link to="/admin/companies">Companies</Link></li>
                  <li><Link to="/admin/jobs">Jobs</Link></li>
                </>
              ) : (
                <>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/jobs">Jobs</Link></li>
                  <li><Link to="/browse">Browse</Link></li>
                </>
              )
            }
          </ul>
          {!user ? (
            <div className='flex items-center gap-2'>
              <Link to="/login"><Button variant="outline">Login</Button></Link>
              <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user?.profile?.profilePhoto || "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"} alt="@shadcn" className=" size-10 rounded-full border object-cover" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-80">
                <div className=" flex items-center gap-4  ">
                  <Avatar className="cursor-pointer ">
                    <AvatarImage src={user?.profile?.profilePhoto || "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"} alt="@shadcn" className="size-10 rounded-full border object-cover" />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground"> {user?.profile?.bio}</p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-600 m-2">
                  {
                    user && user.role === 'student' && (
                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                        <User2 />
                        <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
                      </div>
                    )
                  }
                  <div className="flex w-fil items-center gap-2 cursor-pointer">
                    <LogOut className="" />
                    <Button onClick={logoutHandler} variant="link" className="text-gray-600">Logout</Button>
                  </div>
                </div>
              </PopoverContent>

            </Popover>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
