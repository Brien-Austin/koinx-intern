"use client"

import { useParams } from "next/navigation"

export default  function CoinInfo() {
    const params  = useParams()
    const {coin} = params
    return (
        <>
       {coin}
        </>
    )
}