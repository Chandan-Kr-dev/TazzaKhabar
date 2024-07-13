import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Entertainment() {
    const [EntertainmentNews, setEntertainmentNews] = useState([])

    const getEntertainmentNews=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?category=Entertainment&country=in&apiKey=a0b375da32a74a7292931d0e400bd882")
        .then((res)=>{
            console.log(res);
            setEntertainmentNews(res.data.articles)
        })
    }

    useEffect(()=>{
        getEntertainmentNews()
    },[])

  return  (
    <div>
      <div className=" flex flex-wrap gap-5">
        {EntertainmentNews.map((val) => {
          return (
            <div class="mx-auto my-4 text-white shadow-md shadow-gray-900 bg-green-800 flex max-w-2xl flex-col items-center rounded-md border border-black p-3 md:flex-row">              <div>
                <div class="p-4">
                  <h1 class="inline-flex items-center text-lg font-semibold">
                    {val.title}
                  </h1>
                  <p class="mt-3 text-sm text-gray-600">{val.content}</p>
                  <div className="flex justify-between">
                    <div class="mt-3 flex items-center space-x-10">
                      <span class="flex flex-col">
                        <span class="text-xl font-medium text-gray-900">
                          {val.author}
                        </span>
                        
                      </span>
                      <a href={val.url} className="bg-blue-700 text-white p-1 rounded-lg">Read More</a>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Entertainment