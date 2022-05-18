import React from 'react'

import { useNavigate } from 'react-router-dom'

import { routes } from '../../routes/routes'



const Header = () => {

    const navigate = useNavigate()

    const goTo = (params) => () => {
        navigate(params)
    }

    return (
        <div>
            <div className="flex bg-slate-500 items-center w-full">
                <div className="flex justify-around text-white">
                    <img className="w-16 mx-3 ml-3 mr-10" src={require('../../Assets/desktop.png')} alt="logo-pc" />
                    <button className="mr-10" onClick={goTo(routes.HOME)}>Home</button>
                    <button className="mr-10" onClick={goTo(routes.MACHINE)}>Machine</button>
                    <button className="mr-10" onClick={goTo(routes.PEZZI_DI_RICAMBIO)}>Pezzi di ricambio</button>
                    <button className="" onClick={goTo(routes.CONTACT)}>Contatti</button>
                </div>
            </div>
            <div className="absolute top-2 right-0">
                <button className="bg-violet-500 p-3 rounded-lg mr-5 text-white" onClick={goTo(routes.REGISTRATION)}>Registration</button>
                <button className="bg-violet-500 p-3 rounded-lg mr-5 text-white" onClick={goTo(routes.LOGIN)}>Login</button>
            </div>
        </div>
    )
}


export default Header