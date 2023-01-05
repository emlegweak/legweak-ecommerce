import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {
    let data = []
  return (
    <div className="featuredProducts">
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium voluptate asperiores, aliquam repellat in dolorum dicta voluptatum commodi a laboriosam vero architecto, odio eaque facilis. Aliquam dolorum magni non totam.</p>
        </div>
        <div className="bottom">
            {data?.map((item) => {
                <Card item={item} key={item.id} />
            })}
        </div>
    </div>
  )
}

export default FeaturedProducts
