import React from "react";
import './formstyle.css';
import image from './images/vector.jpg';
function AddManager(){
    return(
        <div className="full">
            <p className="ptop">&#x2B05; Back</p>
            <div className="flex-div">
                <h2 className="htop">All Registered Organisation</h2>
                <div className="flex-div" style={{height:30,backgroundColor:'#D3D3D3'}}><span style={{whiteSpace:"nowrap",paddingTop:5}}>&nbsp;Sort by &nbsp;</span><span style={{paddingTop:3}}>|&nbsp;</span><select style={{cursor:'pointer', backgroundColor:'#D3D3D3', border:'none'}}><option>Newest</option><option>Oldest</option></select></div>
            </div>
          
           <div className="inner-div">
            
            <div className="row" >
                <div className="column" >
                    <p style={{backgroundColor:"white"}}>Company Name</p>
                </div>
                <div className="column"  >
                    <p >Address</p>
                </div>
                <div className="column"  >
                    <p>Email</p>
                </div>
                <div className="column"  >
                    <p>Phone Number</p>
                </div>
            </div>
            <div className="form-space-notfound">
                <div className="inner-div" >
                    <div className="imgdiv">
                        <img src={image} alt="Img" className="form-space-notfound notfound-image"/>
                        <h3 className="centerh">No member found</h3>
                    </div>  
                    
                        <p className="centerp">Sorry we couldnt find any results</p>                      
                    <button type="submit">Create a new Manager</button>                    
                </div>
            </div>

          </div>
        </div>
    );
}
export default AddManager;