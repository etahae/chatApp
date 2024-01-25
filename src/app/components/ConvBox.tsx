import React from 'react'
import { Avatar } from "@nextui-org/react";
import { User } from "../page"

interface ConvBoxProps {
    user:User
}

const ConvBox:React.FC<ConvBoxProps> = ( { user } ) => {
  return (
    <div className='flex w-[90%] min-h-[80px] bg-whiten rounded-xl px-4 items-center gap-5 justify-between'>
      <span className='flex gap-5 items-center'>
        <div className='rounded-full w-14 h-14 bg-darkdarkin overflow-hidden flex items-center justify-center'>
          <Avatar isBordered color="primary" src={user.image ? user.image : "unknown_pfp.jpeg"} name={user.name} size='lg'/>
        </div>
        <div className='flex flex-col justify-center items-start'>
          <div>{user.name}</div>
          <div>{user.name}: haha</div>
        </div>
      </span>
      <div>
        <span>10:13</span>
      </div>
    </div>
  )
}

export default ConvBox