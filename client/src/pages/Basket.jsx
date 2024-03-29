import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { BasketContext } from '../context/basketContext'

const Basket = () => {
    const {basketArr, removeFromBasket, modifyCount} = useContext(BasketContext)
  return (
    <div>
        <Helmet>
            <title>Basket</title>
        </Helmet>
        <div>
            {
                basketArr && basketArr.map((item) => {
                    return (
                        <div key={item._id}>
                            <i className={item.image}></i>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <div>
                                <button onClick={() => modifyCount(true, item)}>+</button>
                                <span>{item.count}</span>
                                <button onClick={() => modifyCount(false, item)}>-</button>
                            </div>
                            <button onClick={() => removeFromBasket(item._id)}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Basket