import React from 'react'
import rc from '../images/rc.png'
import line from '../images/line.png'
import '../css/Related_courses.css'
import {
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';



export default function Related_courses() {
    return (
        <div>
            <Jumbotron style={{marginTop: '0rem',backgroundColor: 'white',marginLeft:'1rem'}}>
            <Container className='jee_advance' style={{backgroundColor: 'white'}}>
                        <Row>
                            <Col className="col" >
                                <div className="btn_img">
                                
                                    <img src={rc} alt="" className="rc"/>
                                    <Button style={{backgroundColor: '#FFCA41',color:'#6A2F85',marginRight: '1rem',border: 'none',padding: '0.1rem'}} className="btn" >JEE Advance</Button>
                                </div>
                                <p className="cart_img_text1">
                                CBSE Class XII English Core
                                </p>
                                <p className="cart_img_text2">Oprah Winfrey</p>
                                <p>
                                <img src="https://img.icons8.com/fluency/28/000000/star.png"/>
                                <img src="https://img.icons8.com/fluency/28/000000/star.png"/>
                                <img src="https://img.icons8.com/fluency/28/000000/star.png"/>
                                <img src="https://img.icons8.com/fluency/28/000000/star.png"/>
                                <img src="https://img.icons8.com/fluency/28/000000/star.png"/> 
                                </p>
                                <p className="para_text">Vestibulum at iaculis metus, at mollis mauris. Duis ut justo commodo, pretium nisl ut...</p>
                                <hr className="last_para_text_hr"/>
                                <div className="rupees_block">
                                <img src="https://img.icons8.com/material-outlined/24/000000/rupee.png"/>
                                    <span className="rupee_text1">999.00</span><span className="rupee_text2">650.00</span>
                                </div>
                                <Button style={{backgroundColor: '#6A2F85',color: '#fffffff',marginRight: '1rem',marginTop: '1rem',width: '14.675rem'}}>
                    
                &nbsp;Add to cart</Button>
                            </Col>
                            <Col className="col">
                            <div className="btn_img">
                                
                                    <img src={rc} alt="" className="rc"/>
                                    <Button style={{backgroundColor: '#FFCA41',color:'#6A2F85',marginRight: '1rem',border: 'none',padding: '0.1rem'}} className="btn" >JEE Advance</Button>
                                </div>
                                <p className="cart_img_text1">
                                CBSE Class XII English Core
                                </p>
                                <p className="cart_img_text2">Oprah Winfrey</p>
                                <p>
                                <img src="https://img.icons8.com/fluency/28/000000/star.png"/>      
                                <img src="https://img.icons8.com/fluency/28/000000/star.png"/>
                                <img src="https://img.icons8.com/fluency/28/000000/star.png"/>
                                <img src="https://img.icons8.com/fluency/28/000000/star.png"/>
                                <img src="https://img.icons8.com/fluency/28/000000/star.png"/>
                                </p>
                                <p className="para_text">Vestibulum at iaculis metus, at mollis mauris. Duis ut justo commodo, pretium nisl ut...</p>
                                <hr className="last_para_text_hr"/>
                                <div className="rupees_block">
                                <img src="https://img.icons8.com/material-outlined/24/000000/rupee.png"/>
                                    <span className="rupee_text1">999.00</span><span className="rupee_text2">650.00</span>
                                </div>
                                <Button style={{backgroundColor: '#6A2F85',color: '#fffffff',marginRight: '1rem',marginTop: '1rem',width: '14.675rem'}}>
                    
                &nbsp;Add to cart</Button>
                            </Col>
                            <Col className="col">
                            <div className="btn_img">
                                
                                    <img src={rc} alt="" className="rc"/>
                                    <Button style={{backgroundColor: '#FFCA41',color:'#6A2F85',marginRight: '1rem',border: 'none',padding: '0.1rem'}} className="btn" >JEE Advance</Button>
                                </div>
                                <p className="cart_img_text1">
                                CBSE Class XII English Core
                                </p>
                                <p className="cart_img_text2">Oprah Winfrey</p>
                                <p>
                                <img src="https://img.icons8.com/fluency/28/000000/star.png"/>
                                <img src="https://img.icons8.com/fluency/28/000000/star.png"/>
                                <img src="https://img.icons8.com/fluency/28/000000/star.png"/>
                                <img src="https://img.icons8.com/fluency/28/000000/star.png"/>
                                <img src="https://img.icons8.com/fluency/28/000000/star.png"/>
                                </p>
                                <p className="para_text">Vestibulum at iaculis metus, at mollis mauris. Duis ut justo commodo, pretium nisl ut...</p>
                                <hr className="last_para_text_hr"/>
                                <div className="rupees_block">
                                <img src="https://img.icons8.com/material-outlined/24/000000/rupee.png"/>
                                    <span className="rupee_text1">999.00</span><span className="rupee_text2">650.00</span>
                                </div>
                                
                                <Button style={{backgroundColor: '#6A2F85',color: '#fffffff',marginRight: '1rem',marginTop: '1rem',width: '14.675rem'}}>
                    
                &nbsp;Add to cart</Button>
                            </Col>
             
                        </Row>
                        
                        
                    </Container>
            </Jumbotron>
        </div>
    )
}
