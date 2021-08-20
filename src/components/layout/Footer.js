import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo-waco.png'

const FooterContainer = styled.footer`
    background-color: black;
    height: 5em;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    img{
        width: 100px;
    }

    p{
        color: grey;
    }
`
const Footer = () => {
    return (
        <FooterContainer>
            <img src={logo} alt='logo'/>
            <p>WACO Services © Copyright 2017 - 2020. All Rights Reserved. </p>
        </FooterContainer>
    )
}

export default Footer
