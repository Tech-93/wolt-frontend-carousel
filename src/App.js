import React, { useState, useEffect } from 'react'
import restaurantService from './services/restaurants'
import RestaurantRenderer from './components/RestaurantRenderer'
import './styles.css'




const App = () => {


    const [restaurants, setRestaurants] = useState([])

    // fetches the data from local server, from the discovery_page.js and fills the restaurants list.
    useEffect(()=> {
        restaurantService.getAll().then(response => {
            setRestaurants(response.data)
        })
    }, [])


    console.log('restaurants', restaurants.length)
    
    // uses the imported component RestaurantRenderer with map function and stores it in a greater function which is passed to return statement.
    const renderer = () => restaurants.map(section => <RestaurantRenderer key={section.title} section={section} /> )

    return(
        <div className="container" >
            {renderer()}            
        </div>
    )
}

export default App
