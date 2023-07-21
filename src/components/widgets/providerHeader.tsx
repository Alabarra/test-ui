import React from 'react'
import { Avatar, AvatarImage,AvatarFallback } from '../ui/avatar'
import ProviderNameStatus from '../ui/providerNameStatus'
import MenuDot from '../ui/menuDot'
import { Input } from '../ui/input'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import FilterListIcon from '@mui/icons-material/FilterList';

export default function ProviderHeader() {
    let searchString:string = "";
  return (
    <div>
        <div className="flex h-14 justify-between w-[100%]">
            <Avatar className='h-14 w-14'>
                <AvatarImage src="" />
                <AvatarFallback className='text-slate-400 text-[10px] font-bold'>Logo</AvatarFallback>
            </Avatar>
            <ProviderNameStatus></ProviderNameStatus>
            <MenuDot></MenuDot>

        </div>
       <div className="flex justify-between w-[100%] mt-5">
            <div className='relative text-gray-400 focus-within:text-gray-600 block w-full mr-5'>
                <MagnifyingGlassIcon className='pointer-events-none w-6 h-10 absolute right-2' ></MagnifyingGlassIcon>
                <Input
                    placeholder="Busca lo que deseas comer"
                    value={""}
                    className="h-10 bg-slate-100 w-full lg:w-full"
                    readOnly
                    />
            </div>
            <Button className='bg-slate-100 h-10 hover:bg-slate-100'>
             <FilterListIcon className='text-slate-400 h-4 w-4'></FilterListIcon>
            </Button>
       </div>

    </div>
  )
}

//rfc