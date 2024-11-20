import React from 'react'
import Navbar from '../ui/shared/Navbar'
import { Input } from '../ui/input'
import { Label } from "@/components/ui/label"
import { RadioGroup } from "@/components/ui/radio-group"
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto '>
                <form action="" className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Signup</h1>
                    <div className='my-2'>
                        <Label>Full Name</Label>
                        <Input type="text" placeholder=" Eg :- John Doe" />
                    </div>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input type="email" placeholder=" Eg :- JohnDoe@gmail.com" />
                    </div>
                    <div className='my-2'>
                        <Label>Phone Number</Label>
                        <Input type="text" placeholder=" Eg :- 1234567890" />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input type="password" placeholder="Eg :- ****123 " />
                    </div>
                    <div className='flex items-start lg:items-center justify-between  flex-col lg:flex-row'>
                        <RadioGroup className='flex items-center gap-4 my-5'>
                            <div className="flex items-center space-x-2">
                                <Input type= "radio" name="role" value="student" className="cursor-pointer" />
                                <Label htmlFor="student">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                            <Input type= "radio" name="role" value="recruiter" className="cursor-pointer" />
                                <Label htmlFor="recruiter">Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className='flex items-center gap-2 mb-5 lg:my-5 '>
                            <Label>Profile</Label>
                            <Input accept ="image/*" type="file" className="cursor-pointer"/>

                        </div>
                    </div>
                    <Button type="submit" className="w-full my-4">Signup</Button>
                    <span> Already have an account? <Link to='/login'>Login</Link> </span>
                </form>
            </div>
        </div>
    )
}

export default Signup
