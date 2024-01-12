import { createContext, useState } from "react";

export const WishlistContext = createContext()

function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState(localStorage.getItem('Favourites') ? JSON.parse(localStorage.getItem('Favourites')) : [])

    localStorage.setItem('Favourites', JSON.stringify(wishlist))

    function addToWishlist(item) {
        const findedData = wishlist.find((x) => x._id === item._id)
        if (findedData) {
            return
        } else {
            setWishlist([...wishlist, item])
        }
    }

    function removeFromWishlist(id) {
        setWishlist(wishlist.filter(item => item._id !== id))
    }


    const data = {
        wishlist,
        setWishlist,
        addToWishlist,
        removeFromWishlist
    }
    return (
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    )
}
export default WishlistProvider