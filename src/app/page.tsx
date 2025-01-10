"use client"
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { api } from './utils/api'


const App = () => {

  const {data : cg} = useQuery({
    queryKey : ['cg-test'],
    queryFn : async()=>{
      const response = await api.get("/simple/price",{
        
        params : {
          ids : 'bitcoin',
          vs_currencies : 'usd',
          include_24hr_change : true
        }


      })
      return response.data
    }
  })

  console.log(cg)
  
  return (
    <div>App</div>
  )
}

export default App