import React, { useEffect } from 'react'
import Footer from '../layout/Footer'
import { Nav } from '../layout/Nav'
import MainContainer from './MainContainer'
import './dashboard.scss'
import { useDispatch } from 'react-redux'
import {  getLastPost } from '../../actions/postActions'

const Dashboard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLastPost())
        
    }, [dispatch])
    return (
        <>
         <Nav/>
         <MainContainer/>
         <Footer/>   
        </>
    )
}

export default Dashboard
