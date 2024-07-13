import React,{useState,useEffect} from 'react'
import NewsCard from '../NewsCard/NewsCard'
import axios from 'axios';

import SportsNews from '../SportsNews/SportsNews';

function TopHeadlines() {



  return (
    <div>
      <NewsCard />
    </div>
  )
}

export default TopHeadlines