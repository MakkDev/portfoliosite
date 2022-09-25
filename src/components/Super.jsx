import {useState, useEffect, useRef} from "react";
import axios from "axios";

export default function Super (){

    useEffect(() => {
        getData();
    })
     
    
    async function getData (){
       const {data} = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
       ")
    }
return (
    <div> </div>
)
}