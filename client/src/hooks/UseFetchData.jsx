import React, { useEffect, useState } from 'react'
import axios from "axios"

const UseFetchData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:8000/")
            setData(response.data)
        }
        fetchData()
    }, [])
  return {data}
}

export default UseFetchData