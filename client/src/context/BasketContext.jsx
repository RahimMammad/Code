import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext()

const BasketProvider = ({children}) => {
    const [basketArr, setBasketArr] = useState(
        localStorage.getItem("Basket") ? JSON.parse(localStorage.getItem("Basket")) : []
    )

    useEffect(() => {
        localStorage.setItem("Basket", JSON.stringify(basketArr))
    }, [basketArr])

    let subtotal = 0

    basketArr.map((e) => {
        subtotal += e.total
    })

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

    const modifyCount = (increment, item) => {
        const find = basketArr.find((x) => x._id === item._id);
        if (increment) {
            find.count++;
            item.total = item.count * item.price;
            setBasketArr([...basketArr]);
        } else {
            if (find.count === 1) {
                removeFromBasket(item._id); 
                return;
            }
            find.count--;
            item.total = item.price * item.count;
            setBasketArr([...basketArr]);
        }
    };

    const removeFromBasket = (id) => {
        setBasketArr(basketArr.filter(item => item._id !== id))
    }

    const data = {basketArr, setBasketArr, addToBasket, removeFromBasket, modifyCount}

    return (
        <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
    );
}

export default BasketProvider