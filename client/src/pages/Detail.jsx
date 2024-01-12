import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id}= useParams()
    const [productData, setProductData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
           try {
                const res = await axios.get(`http://localhost:8000/${id}`)
                setProductData(res.data)
           } catch (error) {
                console.log(error);
           }
        }
        fetchData()
    }, [id])
  return (
    <div>
        <Helmet>
            <title>Detail</title>
        </Helmet>
        <div>
            <i className={productData.image}></i>
            <h2>{productData.name}</h2>
            <p>{productData.description}</p>
        </div>
        
    </div>
  )
}

export default Detail