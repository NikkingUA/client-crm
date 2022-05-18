import React, { useState, useEffect } from 'react'


import { getCars } from '../../Services/api/car'



const Home = () => {

    const [state, setState] = useState({
        dataListCars: []
    })

    //FETCHING OF ALL CAR LIST
    const fetchingUser = async () => {

        let responseApi = await getCars()
        setState({
            dataListCars: responseApi.data
        })
    }

    //FUNCTION FOR RENDER CAR LIST
    const renderCar = (car, key) => {
        return (
            <>
                <li key={key}>
                    <p>{car.brand}</p>
                    <p>{car.model}</p>
                </li>
            </>
        )
    }


    useEffect(() => {
        fetchingUser()
    }, [])


    return (
        <>
            {state.dataListCars.map(renderCar)}
        </>
    )
}

export default Home

