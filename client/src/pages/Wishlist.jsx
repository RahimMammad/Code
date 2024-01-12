import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { WishlistContext } from '../context/WIshlistContext'

const Wishlist = () => {
    const {wishlist, removeFromWishlist} = useContext(WishlistContext)
  return (
    <div>
        <Helmet>
            <title>Wishlist</title>
        </Helmet>
        <div>
            {
                wishlist && wishlist.map((item) => {
                    return (
                        <div key={item._id}>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <i className={item.image}></i>
                            <button onClick={() => removeFromWishlist(item._id)}>Remove</button>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default Wishlist