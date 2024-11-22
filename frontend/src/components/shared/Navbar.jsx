import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React from 'react'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { LogOut, User2 } from "lucide-react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Navbar = () => {
  const {user} = useSelector(store => store.auth)
  return (
    <div className="pt-3">
      <div className='flex items-center justify-between mx-10 lg:mx-auto max-w-7xl h-12 ' >
        <div>
          <h1 className='text-2xl font-bold'>Job<span className='text-[#5b30a6] font-bold'>Hub</span></h1>
        </div>
        <div className="flex items-center gap-12">
          <ul className='font-medium items-center gap-5 hidden sm:flex'>
            <li> <Link to='/'>Home</Link> </li>
            <li><Link to='/jobs'>Jobs</Link> </li>
            <li><Link to='/browse'>Browse</Link> </li>
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
                  <AvatarImage src="https://github.com/shadcn.png" className="h-10 rounded-full" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-80">
                <div className=" flex items-center gap-4  ">
                  <Avatar className="cursor-pointer ">
                    <AvatarImage src="https://github.com/shadcn.png" className="h-10 rounded-full" />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">KD MernStack</h4>
                    <p className="text-sm text-muted-foreground"> Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-600 m-2">
                  <div className="flex w-fil items-center gap-2 cursor-pointer ">
                    <User2 className="" />
                    <Button variant="link" className='outline-none text-gray-600'> View Profile</Button>
                  </div>
                  <div className="flex w-fil items-center gap-2 cursor-pointer">
                    <LogOut className="" />
                    <Button variant="link" className='outline-none text-gray-600'> Logout </Button>
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
