import axios from "axios";
import React, { useEffect, useState } from "react";

function SportsNews() {
  const [sportsNews, setsportsNews] = useState([]);

  const getSportsNews = async () => {
    await axios
      .get(
        "https://newsapi.org/v2/top-headlines?category=sports&country=in&apiKey=a0b375da32a74a7292931d0e400bd882"
      )
      .then((res) => {
        console.log(res);
        setsportsNews(res.data.articles);
      });
  };
  useEffect(() => {
    getSportsNews();
  }, []);

  return (
    <div>
      <div className=" flex flex-wrap gap-5">
        {sportsNews.map((val) => {
          return (
            <div class="mx-auto my-4 text-white shadow-md shadow-gray-900 bg-green-800 flex max-w-2xl flex-col items-center rounded-md border border-black p-3 md:flex-row">
              {" "}
              <div>
                <div class="p-4">
                  <h1 class="inline-flex items-center text-lg font-semibold">
                    {val.title}
                  </h1>
                  <p class="mt-3 text-sm text-gray-600">{val.content}</p>
                  <div className="flex justify-between">
                    <div class="mt-3 flex items-center justify-between gap-10">
                      <span class="flex justify-center">
                        <span class="text-xl font-medium text-gray-900">
                          {val.author}
                        </span>
                      </span>
                      <a href={val.url} className="bg-blue-300 text-black font-semibold  p-1 rounded-lg shadow-md shadow-black">
                        Read more
                      </a>
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

export default SportsNews;
