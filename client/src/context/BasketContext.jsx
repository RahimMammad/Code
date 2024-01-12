import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext()

const BasketProvider = ({children}) => {
    const [basketArr, setBasketArr] = useState(
        localStorage.getItem("Basket") ? JSON.parse(localStorage.getItem("Basket")) : []
    )

    useEffect(() => {
        localStorage.setItem("Basket", JSON.stringify(basketArr))
    }, [basketArr])

    const addToBasket = (item) => {
        const find = basketArr.find((x) => x._id === item._id)
        if(find) {
            find.count++
            find.total = find.count * find.price
            setBasketArr([...basketArr])
            return
        }
        const total = item.price
        setBasketArr([...basketArr, {...item, count: 1, total}])
    }

    const removeFromBasket = (id) => {
        setBasketArr(basketArr.filter(item => item._id !== id))
    }

    const data = {basketArr, setBasketArr, addToBasket, removeFromBasket}

    return (
        <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
    );
}

export default BasketProvider