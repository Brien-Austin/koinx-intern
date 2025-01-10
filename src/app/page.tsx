"use client"
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { api } from './utils/api'
import Currencies from './components/currencies/currencies'
import { CryptoData } from './types/types'


const App = () => {

  const {data : cryptocurrencies} = useQuery<CryptoData[]>({
    queryKey : ['cg-test'],
    queryFn : async()=>{
      const response = await api.get("/coins/markets",{
        
        params : {
          order : 'market_cap_desc',
          sparkline: false,
          price_change_percentage : '1h,24h,7d',
          
          vs_currency : 'usd',
          per_page : 250,
          page : 1
        }


      })
      return response.data
    }
  })

  console.log(cryptocurrencies)
  
  return (
   <main>
    <h1 className='text-[1.7rem] pt-4 font-bold '>Cryptocurrency price and market caps</h1>
    <section className="mt-4 w-full rounded-lg bg-white  flex flex-col">
      <div className="grid grid-cols-7 px-6 py-3">
        <h1 className='flex items-center gap-2 font-semibold text-center'> # NAME</h1>
        <h1 className='text-sm font-bold'>PRICE</h1>
        <h1 className='text-sm font-bold'>1H</h1>
        <h1 className='text-sm font-bold'>24H</h1>
        <h1 className='text-sm font-bold '>7D</h1>
        <h1 className='text-sm font-bold '>MARKET CAP</h1>
        <h1 className='text-sm font-bold text-right'>CIRCULATING SUPPLY</h1>
      </div>
      <hr />
     {
      cryptocurrencies?.map((c,i)=>(
       <Currencies circulating_supply={c.circulating_supply} market_cap={c.market_cap} num={i} name={c.name} price={c.current_price!} oneday_change={c.price_change_percentage_24h_in_currency} onehr_change={c.price_change_percentage_1h_in_currency} sevenday_change={c.price_change_percentage_7d_in_currency!} symbol={c.symbol} imgurl={c.image} key={i}/> 
      ))
      
     }
      

    </section>

   </main>
  )
}

export default App