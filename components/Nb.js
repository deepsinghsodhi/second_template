import React from 'react'
import '../css/Nb.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';
export default function Nb() {
    return (
        <div>
         <Navbar color="inverse" className='nb' light expand="md">
                    {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
                    
                        <Nav className="ml-auto" navbar>
                            <NavItem  >
                                <NavLink style={{color:'white'}}  href="/components/"><img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-call-mobile-telephone-those-icons-lineal-those-icons.png" style={{marginLeft:'8rem', marginRight:'0.5rem' }}/>1800-419-8902  &nbsp; |</NavLink>
                                
                            </NavItem>
                            
                            <NavItem>
                                <NavLink style={{color:'white'}} href="https://github.com/reactstrap/reactstrap"><img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/30/000000/external-email-interface-kiranshastry-solid-kiranshastry.png" style={{marginRight:'1rem'}}/>info@speedlabs.in</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{color:'white'}} href="https://github.com/reactstrap/reactstrap"><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/000000/external-location-map-location-flatart-icons-outline-flatarticons-13.png" style={{marginLeft:'19rem'}}/>info@speedlabs.in</NavLink>
                            </NavItem>
                        </Nav>
                </Navbar>
        </div>
    )
}
