import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import React from 'react'

const fitlerData = [
  {
    fitlerType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
    fitlerType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
  },
  {
    fitlerType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
  },
]

const FilterCard = () => {
  return (
    <div className='w-full h-full bg-white  rounded-md p-3 md:p-10  shadow'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3' />
      <RadioGroup className='w-full p-2 md:p-5'>
        {
          fitlerData.map((data, index) => (
            <div>
              <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
              {
                data.array.map((item, idx) => {
                  const itemId = `id${index}-${idx}`
                  return (
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item} />
                      <Label>{item}</Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard
