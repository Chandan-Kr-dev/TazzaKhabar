import React, { useEffect, useState } from "react";
import axios from "axios";

function NewsCard() {
  const [news, setnews] = useState([]);

    const getNews=async()=>{
        await axios
         .get(
           "https://newsapi.org/v2/everything?q=Apple&from=2024-07-07&sortBy=popularity&apiKey=a0b375da32a74a7292931d0e400bd882"
         )
         .then((res) => {
           console.log(res);
           setnews(res.data.articles);
         });

    }
    useEffect(()=>{
        getNews()
    },[])
  
  return (
    <div>
      
      <div className="flex justify-center items-center flex-wrap flex-col-3 gap-5" >
        {news.map((val) => {
          return (
            <div class="w-[400px] rounded-md border">
              <img
                src={val.urlToImage}
                alt="News"
                class="h-[200px] w-full rounded-md object-cover"
              />
              <div class="p-4">
                <h1 class="text-lg font-semibold">{val.title}</h1>
                <p class="mt-3 text-sm text-gray-600">
                  {val.content}
                </p>
                <button
                  type="button"
                  class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Read 
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewsCard;
