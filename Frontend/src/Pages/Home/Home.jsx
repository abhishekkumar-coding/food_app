import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/exploreMenu/ExploreMenu'
import FoodDiaplay from '../../Components/foodDisplay/FoodDisplay'
import AppDownload from '../../Components/AppDowmload/AppDownload'
function Home() {
  const [category, setCategory] = useState("All")
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDiaplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home