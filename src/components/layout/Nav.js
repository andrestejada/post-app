import React from 'react'
import logo from '../../assets/logo-waco.png'
import styled  from 'styled-components'
import { Fab } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { signOut } from '../../actions/authActions';
import { useDispatch ,useSelector} from 'react-redux';

const Navbar = styled.nav`
    background-color: black;
    height: 5em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    div{
        flex-grow: 1;
        margin-left: 1em;
        img{
            max-width:150px;
        }
    }
    button{
        margin-right: 1em;
    }
`
export const Nav = () => {
    const dispatch = useDispatch();
    const {isAuth} = useSelector(state => state.auth)
    return (
        <Navbar>
            <div>
                <img src={logo} alt='logo' />
            </div>
            {
              isAuth &&  
              <Fab 
                className='custom-btn'
                onClick={ ()=> dispatch( signOut() ) } 
              >
                    <ExitToAppIcon/>            
              </Fab>
            }
            
        </Navbar>
    )
}
