import React from "react";
import { useState } from "react";

function Home() {
  const [data, setdata] = useState("");

  const getNews = async () => {
    const { data } = await axios.get(
      ` https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.API_KEY}`
    );
    console.log(data);
    setdata(data);
  };
  return (
    <div>
      i am Hmoe
      <h1>Top Headlines (US)</h1>
      {data && data.articles && (
        <ul>
          {data.articles.map((article) => (
            <li key={article.url}>
              <a href={article.url}>{article.title}</a>
            </li>
          ))}
        </ul>
      )}
      {!data && <p>Loading news...</p>}
    </div>
  );
}

export default Home;
