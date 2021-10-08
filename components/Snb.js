import React from 'react'
import '../css/Snb.css'
import logo from '../images/logo.png'


import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
export default function Nb() {
    return (
        <div >
         <Navbar color="inverse" className='snb' light expand="md">
                    {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
                     <img className='logo' src={logo} alt=' ' />
                        <Nav className="ml-auto" navbar>
                            <NavItem  >
                                <NavLink style={{color:'#6A2F85',marginRight:'4rem'}}  href="/components/"><b>Home</b> </NavLink>
                                
                            </NavItem>
                            
                            <NavItem>
                                <NavLink style={{color:'black', marginRight:'4rem'}} href="">All Courses</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{color:'black'}} href="https://github.com/reactstrap/reactstrap"><img src="https://img.icons8.com/fluency-systems-regular/28/000000/bag-front-view.png " alt="" style={{marginRight:'0.4rem'}}/>Cart</NavLink>
                            </NavItem>
                        </Nav>
                </Navbar>
        </div>
    )
}
