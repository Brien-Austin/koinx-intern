import { roundDecimal } from "@/app/utils/conversions";
import { ArrowDownToDot, ArrowUpFromDot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Currency = {
  name: string;
  market_cap: number;
  price: number;
  onehr_change: number;
  oneday_change: number;
  sevenday_change: number;
  symbol: string;
  imgurl: string;
  num: number;
  circulating_supply: number;
};

// type CurrenciesProps = {
//     currencies : Currency[]
// }

const Currencies: React.FC<Currency> = ({
  circulating_supply,
  market_cap,
  num,
  name,
  price,
  onehr_change,
  oneday_change,
  sevenday_change,
  symbol,
  imgurl,
}) => {
  return (
    <section>
      <Link
        href={`/coins/${name}`}
        className="grid grid-cols-7 items-center px-5 py-2 "
      >
        <div className="flex items-center gap-2 ">
          <h1 className="text-neutral-400">{num}</h1>
          <div className="relative h-6 w-6 pl-3">
            <Image
              src={imgurl}
              fill
              alt={symbol}
              className="absolute object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-lg">{name}</h1>
            <h1 className="text-neutral-400 font-medium">
              {symbol.toUpperCase()}
            </h1>
          </div>
        </div>
        <div className="text-lg">${price}</div>
        <div
          className={` ${onehr_change < 0 ? "text-red-600" : "text-green-600"}`}
        >
        {onehr_change < 0 ?<h1 className="flex items-center gap-1 "><ArrowDownToDot size={15}/> {roundDecimal(onehr_change, 2)}%</h1>  :<h1 className="flex items-center gap-1 "><ArrowUpFromDot size={15}/> {roundDecimal(onehr_change, 2)}% </h1>}  
        </div>
        <div
          className={` ${oneday_change < 0 ? "text-red-600" : "text-green-600"}`}
        >
        {oneday_change < 0 ?<h1 className="flex items-center gap-1 "><ArrowDownToDot size={15}/> {roundDecimal(oneday_change, 2)}%</h1>  :<h1 className="flex items-center gap-1 "><ArrowUpFromDot size={15}/> {roundDecimal(oneday_change, 2)}% </h1>}  
        </div>
        <div
          className={` ${sevenday_change < 0 ? "text-red-600" : "text-green-600"}`}
        >
        {sevenday_change < 0 ?<h1 className="flex items-center gap-1 "><ArrowDownToDot size={15}/> {roundDecimal(sevenday_change, 2)}%</h1>  :<h1 className="flex items-center gap-1 "><ArrowUpFromDot size={15}/> {roundDecimal(oneday_change, 2)}% </h1>}  
        </div>
       
       
        <div className="font-medium  text-neutral-700 text-left">
          ${market_cap.toFixed(2)}
        </div>
        <div className="text-right">
          {circulating_supply} {symbol.toUpperCase()}
        </div>
      </Link>
      <hr />
    </section>
  );
};

export default Currencies;
