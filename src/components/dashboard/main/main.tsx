"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'

function Main() {

    const { user } = useUser();
    return (
        <div className='p-5 w-full bg-[#000000]'>
            <h1 className='text-2xl text-surface-900 font-medium text-white'>
                Hi {user?.fullName}
            </h1>
        </div>
    )
}

export default Main