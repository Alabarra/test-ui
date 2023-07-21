import React from 'react'

export default function ProviderNameStatus() {
    const providerName = "Lorem Ipsum";
    const isProviderOpen:boolean = true;
    const providerClosingTime = "19:00" 
  return (
    <div>
        <h1 className='text-left font-bold'>{providerName}</h1>
        <span className={isProviderOpen?"text-green-500":"text-red-500"}>{isProviderOpen?"Abierto":"Cerrado"}</span>
        <span> hasta las {providerClosingTime} hrs.</span>
    </div>
  )
}
