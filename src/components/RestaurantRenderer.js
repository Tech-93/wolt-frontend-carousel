import React from 'react'
import { Blurhash } from "react-blurhash"
import Slider from 'infinite-react-carousel';
import '../styles.css'

const RestaurantRenderer = ({section}) => {


    console.log('SECTION', section.title)

    // a Restaurant function that takes a single restaurant and renders its blurhash, name and online status. 
    const Restaurant = ({restaurant}) => {
        if(restaurant.online === true) {
            return (
                <div> 
                    <div className="card" > 
                        <Blurhash
                          hash={restaurant.blurhash}
                          width={200}
                          height={200}
                          resolutionX={32}
                          resolutionY={32}
                          style={{flex: 1}}
                          punch={1} 
                        />     
                    </div>
                    <div className="status" > Online </div>
                    <h3 className="text" > {restaurant.name} </h3>
                </div>
            ) 
        }

        return (
            <div> 
                <div className="card" > 
                    <Blurhash
                      hash={restaurant.blurhash}
                      width={200}
                      height={200}
                      resolutionX={32}
                      resolutionY={32}
                      style={{flex: 1}}
                      punch={1}
                    />    
                </div>
                <div className="status" > Offline </div>
                <h3 className="text" > {restaurant.name} </h3>
            </div>
        ) 
    }


    // a greater function that maps the restaurants from the given section and passes them to the Restaurant component. 
    const renderRestaurants = () => section.restaurants.map(restaurant => <Restaurant  key={restaurant.name} restaurant={restaurant} /> )

    

    
    
    return (
        <div>
            <h1 className="title" > {section.title} </h1>
        <Slider className="carousel" slidesToShow={5} >
        {renderRestaurants()}
        </Slider>

             
        </div>
    )
}

export default RestaurantRenderer

