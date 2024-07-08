import React, { useEffect, useState } from "react";
import axios from "axios";

function NewsCard() {
  const [news, setnews] = useState([]);

  const getNews = async () => {
    await axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&from=2024-07-07&sortBy=popularity&apiKey=a0b375da32a74a7292931d0e400bd882"
      )
      .then((res) => {
        console.log(res);
        setnews(res.data.articles);
      });
  };
  useEffect(() => {
    getNews();
  }, []);

  const AboutNews=(e)=>{
    console.log(e)
  }

  return (
    <div>
      <div className=" flex flex-wrap gap-5">
        {news.map((val) => {
          return (
            <div class="mx-auto my-4 flex max-w-2xl flex-col items-center rounded-md border border-black p-3 md:flex-row">
              <div class="h-full w-full md:h-[200px] md:w-[300px]">
                <img
                  src={val.urlToImage}
                  alt="Laptop"
                  class="h-full w-full rounded-md object-cover"
                />
              </div>
              <div>
                <div class="p-4">
                  <h1 class="inline-flex items-center text-lg font-semibold">
                    {val.title}
                  </h1>
                  <p class="mt-3 text-sm text-gray-600">{val.content}</p>
                  <div className="flex justify-between">
                    <div class="mt-3 flex items-center space-x-2">
                      <span class="flex flex-col">
                        <span class="text-[10px] font-medium text-gray-900">
                          {val.author}
                        </span>
                        <span class="text-[8px] font-medium text-gray-500">
                          {val.publishedAt}
                        </span>
                      </span>
                    </div>
                    <button onClick={AboutNews} className="bg-blue-950 text-white rounded p-2 my-2 font-semibold" value={val}>More</button>
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

export default NewsCard;
