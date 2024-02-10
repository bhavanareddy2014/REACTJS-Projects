import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github(){

    const data = useLoaderData();
    // const [data,setData] = useState([]);

    // useEffect(() => {
    //  fetch('https://api.github.com/users/bhavanareddy2014')
    //  .then((response) => response.json())
    //  .then((res) => {
    //     console.log(res,"res");
    //     setData(res)})
    //  .catch((err) => console.log(err))
    // },[])

   return <>
   <div className="text-center">Github {data.followers}
    <img src={data.avatar_url} alt="image" />
   </div>
   </>
}


export default Github;


export const GithubInfoLoader = async() => {
   const data = await fetch('https://api.github.com/users/bhavanareddy2014')
   return data.json();
}