import React from 'react'
import '../css/Description.css'
import curriculumn from '../images/curriculumn.png'
import overview from '../images/overview.png'
import review from '../images/review.png'
import line from '../images/line.png'
import latest_course from '../images/latest_course.png'
import { Button, Form, FormGroup, Label, Input, FormText,Progress } from 'reactstrap';
export default function Description(props) {
    return (
        <>
        <div className="container description">
            <span> <img src={overview} alt="" /> overview</span>
            <img src={line} alt="" />
         <span>  <img src={curriculumn} alt="" />  curriculumn</span>
         <img src={line} alt="" />
            <span> <img src={review} alt="" /> Review</span>
            <img src={line} alt="" />
        </div>

        <div className=" container desc">
        <div className="course_description">
            <h4>Reviews</h4>
            <div className="ratings">
                <div >
                    <span style={{color:'purple', fontSize:'3rem',marginLeft:'0.5rem'}}>4.5</span><br />
                    <img src="https://img.icons8.com/fluency/18/000000/star.png"/>
                    <img src="https://img.icons8.com/fluency/18/000000/star.png"/>
                    <img src="https://img.icons8.com/fluency/18/000000/star.png"/>
                    <img src="https://img.icons8.com/fluency/18/000000/star.png"/>
                    <img src="https://img.icons8.com/ios-filled/17/000000/star--v2.png"/><br />
                    <span style={{marginLeft:'0.5rem', fontWeight:'700'}}>9 Reviews</span>
                    <h4   h4  style={{margin:'2rem 0rem'}}>Add a Review</h4>
                    <span style={{margin:'2rem 0rem' , display:'inline-block'}}>Ratings : </span>

                    <img  src="https://img.icons8.com/ios-filled/18/000000/star--v2.png"/>
                    <img  src="https://img.icons8.com/ios-filled/18/000000/star--v2.png"/>
                    <img  src="https://img.icons8.com/ios-filled/18/000000/star--v2.png"/>
                    <img  src="https://img.icons8.com/ios-filled/18/000000/star--v2.png"/>
                    <img  src="https://img.icons8.com/ios-filled/18/000000/star--v2.png"/>
                </div>
                <div style={{height:'22rem',width:'27rem',margin:'0rem 2rem'}}>
                <Progress style={{margin:'1rem 1rem'}} color="success" value="50" />
                <Progress style={{margin:'1rem 1rem'}} color="success" value="50" />
                <Progress style={{margin:'1rem 1rem'}} color="success" value="30" />
                <Progress style={{margin:'1rem 1rem'}} color="success" value="15" />
                <Progress style={{margin:'1rem 1rem'}} color="success" value="0" />

                </div>
            </div>

            <div className="formm">
            <Form>
      <FormGroup>
       
        <Input style={{marginBottom:'1.5rem'}} type="name" name="name" id="exampleEmail" placeholder="Name" />
      </FormGroup>
      <FormGroup>
        <Input style={{marginBottom:'1.5rem'}} type="password" name="password" id="examplePassword" placeholder=" Email" />
      </FormGroup>
      
      
      <FormGroup>
        <Input style={{marginBottom:'1.5rem'}} type="textarea" name="text" id="exampleText" placeholder="Review Title" />
      </FormGroup>
      <FormGroup>
        <Input style={{marginBottom:'1.5rem'}} type="textarea" name="text" id="exampleText" placeholder="Your Review"  rows='10' />
      </FormGroup>
      
     
      
      <Button style={{background:'purple' , padding:'0.2rem 2.5rem'}}>Add to Cart</Button>
    </Form> 
            </div>

            <div className="percentages">
           
            </div>
        </div>
        <div className="latest_course">
            <h4>Latest Courses</h4>
            <div style={{display:'flex',marginBottom:'1rem'}}>
            <img src={latest_course} alt="" />
            <div>
                <p>CBSE Class XII English Core</p>
                <img src="https://img.icons8.com/material-outlined/24/000000/rupee.png" />
                <span style={{textDecoration:'line-through',color:'green'}}>999.00  </span>&nbsp;
                <span style={{color:'green'}}>650.00  </span>
            </div>
            </div>
            <div style={{display:'flex',marginBottom:'1rem'}}>
            <img src={latest_course} alt="" />
            <div>
                <p>CBSE Class XII English Core</p>
                <img src="https://img.icons8.com/material-outlined/24/000000/rupee.png" />
                <span style={{textDecoration:'line-through',color:'green'}}>999.00  </span>&nbsp;
                <span style={{color:'green'}}>650.00  </span>
            </div>
            </div>
            <div style={{display:'flex',marginBottom:'1rem'}}>
            <img src={latest_course} alt="" />
            <div>
                <p>CBSE Class XII English Core</p>
                <img src="https://img.icons8.com/material-outlined/24/000000/rupee.png" />
                <span style={{textDecoration:'line-through',color:'green'}}>999.00  </span>&nbsp;
                <span style={{color:'green'}}>650.00  </span>
            </div>
            </div>
            <div style={{display:'flex' ,marginBottom:'1rem'}}>
            <img src={latest_course} alt="" />
            <div>
                <p>CBSE Class XII English Core</p>
                <img src="https://img.icons8.com/material-outlined/24/000000/rupee.png" />
                <span style={{textDecoration:'line-through',color:'green'}}>999.00  </span>&nbsp;
                <span style={{color:'green'}}>650.00  </span>
            </div>
            </div>
            
        </div>

        </div>
        <div className='container share'>
            <p><b>Share: </b></p>
            <img src="https://img.icons8.com/color/34/000000/facebook-new.png"/>
            <img src="https://img.icons8.com/color/34/000000/twitter-circled--v1.png"/>
            <img src="https://img.icons8.com/fluency/34/000000/google-plus.png"/>
        </div>
     
        
        </>
    )
}

