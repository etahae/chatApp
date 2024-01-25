"use client"

import React, { FormEvent, FormEventHandler } from 'react'
import { FiSearch } from "react-icons/fi";

const ConvSearch = () => {

    const filterConvList = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

  return (
    <form onSubmit={filterConvList} className='w-[85%]'>
        <div className="flex my-2 w-[100%]">
            <select name='All categories' id="dropdown-button" data-dropdown-toggle="dropdown" className="gap-3 flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center border rounded-s-lg focus:outline-none bg-gray-700 hover:bg-gray-600 focus:ring-0 text-white border-gray-600">
                <option value="All" defaultChecked>All categories</option>
                <option value="Users">Users</option>
                <option value="Groups">Groups</option>
            </select>
            <div className="relative w-full">
                <input autoComplete='off' type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm rounded-e-lg border-s-gray-50 border-s-2 border ring-0 outline-none bg-gray-700  border-gray-600 placeholder-gray-400 text-white" placeholder="Search Groups, Users..."/>
                <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full bg-whiten rounded-e-lg border ring-0 outline-none">
                    <FiSearch color={'rgb(49 48 77)'}/>
                    <span className="sr-only">Search</span>
                </button>
            </div>
        </div>
    </form>
  )
}

export default ConvSearch