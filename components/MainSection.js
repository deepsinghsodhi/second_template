import React from 'react'
import '../css/MainSection.css'
import boy from '../images/boy.png'
import line from '../images/line.png'
import poster from '../images/poster.png'
import Instructor from '../images/Instructor.png'
import lectures from '../images/lectures.png'
import {Button} from 'reactstrap';
export default function MainSection() {
    return (
        <>
            <div className='head' > 
           <p> Home > All courses > Course Details</p>
            </div>
            <div className='container cbse'>
                <h3>CBSE Class XII English Core</h3>
            </div>
        <div className=" mainsec">
                <div  className=' boy' >
                    <div>
                        <img src={boy} alt=''></img>
                    </div>
                    <div > 
                        <p style={{margin:'0rem',fontSize:'17px',fontWeight:'400',color: '#5D5A67'}}>Teacher</p>
                        <p style={{margin:'0rem', fontWeight:'500'}}>Oprah Winfrey</p>
                    </div>
                </div>
                <img style={{marginTop:'2rem'}} src={line} alt="" />
                <div  className='teacher'>
                    <div > 
                        <p style={{margin:'0rem' ,fontSize:'17px',fontWeight:'400',color: '#5D5A67'}}>Categories</p>
                        <p style={{margin:'0rem', fontWeight:'500'}}>CBSE</p>
                    </div>
                </div>
                <img style={{marginTop:'2rem'}} src={line} alt="" />
                <div  className='teacher'>
                    <div > 
                        <p style={{margin:'0rem' ,fontSize:'17px',fontWeight:'400',color: '#5D5A67'}}>4.5(Reviews)</p>
                        <img src="https://img.icons8.com/emoji/21/000000/star-emoji.png"/>
                        <img src="https://img.icons8.com/emoji/21/000000/star-emoji.png"/>
                        <img src="https://img.icons8.com/emoji/21/000000/star-emoji.png"/>
                        <img src="https://img.icons8.com/emoji/21/000000/star-emoji.png"/>
                        <img src="https://img.icons8.com/emoji/21/000000/star-emoji.png"/>
                    </div>
                </div>

        </div>

        <div className=" container poster_sec">
            <div className="poster">
                <img src={poster} alt="" />
            </div>
            < div className="add_to_cart">
            <img src="https://img.icons8.com/material-outlined/18/000000/rupee.png"/>
                <span style={{color:'green' ,padding:'0.3rem',textDecoration:'line-through'}}>999.00</span>
                <span style={{color:'green' ,padding:'0.3rem' ,marginBlockStart:'2rem'}} >650.00</span>,<br />
                <Button style={{color:'purple',background:'white', margin:'0.5rem 4rem', padding:'0rem 0.5rem'}}
                > Add to Cart</Button><br />

            <div style={{margin:'2rem 0.6rem'}}>
            <span > <img src={Instructor} alt="" /><span style={{color:'black' ,fontSize:'15px' ,padding:'0.3rem'}}>Instructor : <span style={{color:'grey' ,padding:'0.3rem'}}> Instructor : Oprah Winfrey </span></span></span><br />
            </div>
            <div style={{margin:'2rem 0.6rem'}}>
            <span> <img src={lectures} alt="" /><span style={{color:'black' ,fontSize:'15px' ,padding:'0.3rem'}}>Lectures : <span style={{color:'grey' ,padding:'0.3rem'}}> 14</span></span></span><br />
            </div>
            <div style={{margin:'2rem 0.6rem'}}>
            <span> <img src={Instructor} alt="" /><span style={{color:'black' ,fontSize:'15px' ,padding:'0.3rem'}}>Duration : <span style={{color:'grey' ,padding:'0.3rem'}}> 10 weeks </span></span></span><br />
            </div>
            <div style={{margin:'2rem 0.6rem'}}>
            <span> <img src={Instructor} alt="" /><span style={{color:'black' ,fontSize:'15px' ,padding:'0.3rem'}}>Enrolled : <span style={{color:'grey' ,padding:'0.3rem'}}> 75 student</span></span></span><br />
            </div>
            <div style={{margin:'2rem 0.6rem'}}>
            <span> <img src={Instructor} alt="" /><span style={{color:'black' ,fontSize:'15px' ,padding:'0.3rem'}}>Language : <span style={{color:'grey' ,padding:'0.3rem'}}> English </span></span></span><br />
            </div>
            <div style={{margin:'2rem 0.6rem'}}>
            <span> <img src={Instructor} alt="" /><span style={{color:'black' ,fontSize:'15px' ,padding:'0.3rem'}}>Deadline : <span style={{color:'grey' ,padding:'0.3rem'}}> 30 October </span></span></span><br />
            </div>
            
            </div>
        </div>
     
            
        </>
    )
}
