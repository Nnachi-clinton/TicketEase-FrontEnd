import React from "react";
import './formstyle.css';

function AddManager(){
    return(
        <div className="full">
          <h2 className="hnomargin">Create manager's account</h2>
          <p className="pcreatemanager">Fill the form below with the correct details as specified</p>
          <div className="inner-div">
            <div className="form-space">
                  <form>
                      <div  className="inner-div">
                          <label><b>Company Name</b></label>
                          <input type="text" className="marginb" placeholder="" name="companyname" />
    
                          <label ><b>Company Email</b></label>
                          <input type="email" className="marginb" placeholder="" name="companyemail" />                      
                          <button type="submit">Submit</button>
                      </div>
                  </form>
              </div>
          </div>
        </div>
    );
}
export default AddManager;