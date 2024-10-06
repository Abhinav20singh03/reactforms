import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formdata,setformdata] = useState({
    firstname:"",
    lastname:"",
    address:"",
    country:"India",
    city:"",
    email:"",
    zip:"",
    state:"",
    comments:false,
    candidates:false,
    offers:false,
    pushNotifications:""
  })
  function changehandler(event){
    setformdata((prevdata)=>{
      const {name,type,value,checked} = event.target;
      if(type==="text"){
        return{
          ...prevdata,
          [name]:value
        }
      }else if(type==="checkbox"){
        return{
          ...prevdata,
          [name]:checked
        }
      }else{
        return{
          ...prevdata,
          [name]:value
        }
      }
    })
  }
  function onclickbutton(){
    console.log(formdata);
  }
  return (
    <div className='app'>
      <div className='form-container'>
          <div className='labels'>First Name</div>
          <input 
          type='text'
          name="firstname"
          id="firstname" 
          className='textbox' 
          placeholder='Abhinav'
          onChange={changehandler}
          />
          <div className='labels'>Last Name</div>
          <input 
          type='text'
          name="lastname"
          id="lastname" 
          className='textbox'  
          placeholder='Singh'
          onChange={changehandler}
          />
          <div className='labels'>Email Adderess</div>
          <input 
          type='text'
          name="email"
          id="email"  
          className='textbox' 
          placeholder='xyz@hotmail.com'
          onChange={changehandler}
          />
          <div className='labels'>Country</div>
          <select 
          className='dropdown'
          name='country'
          value={formdata.country}
          onChange={changehandler}
          >
            <option value="India">India</option>
            <option value="America">America</option>
            <option value="United-Kingdom">United Kingdom</option>
            <option value="Russia">Russia</option>
            <option value="Nepal">Nepal</option>
          </select>
          <div className='labels'>Street Address</div>
          <input 
          type='text'
          name="address"
          id="address"  
          className='textbox' 
          placeholder='12 Saya Zenith Apartment'
          onChange={changehandler}
          />
          <div className='labels'>City</div>
          <input 
          type='text'
          name="city"
          id="city"  
          className='textbox' 
          placeholder='Delhi'
          onChange={changehandler}
          />
          <div className='labels'>State/Province</div>
          <input 
          type='text'
          name="state"
          id="state"  
          className='textbox'
          placeholder='Uttar-Pradesh'
          onChange={changehandler}
          />
          <div className='labels'>ZIP/Postal</div>
          <input 
          type='text'
          name="zip"
          id="zip"  
          className='textbox' 
          placeholder='121344'
          onChange={changehandler}
          />
          <div className='labels'>By Email</div>
          <div className='checkbox-container'>
             <div>
              <input 
              type='checkbox'
              checked={formdata.comments}
              name="comments"
              id="comments"
              className='checkbox'
              onChange={changehandler}
              />
              <label htmlFor='comments'>Comments</label>
             </div>
             <div>Get notified when someone posts a comments on the posting.</div>
             <div>
             <input 
              type='checkbox'
              checked={formdata.candidates}
              name="candidates"
              id="candidates"
              className='checkbox'
              onChange={changehandler}
              />
              <label htmlFor='candidates'>Candidates</label>
             </div>
             <div>Get notified when candidates applies for a job.</div>
             <div>
             <input 
              type='checkbox'
              checked={formdata.offers}
              name="offers"
              id="offers"
              className='checkbox'
              onChange={changehandler}
              />
              <label htmlFor='offers'>Offers</label>
             </div>
             <div>Get notifies when candidates accepts or rejects an offer</div>
          </div>
          <div className='radio-container'>
            <div className='labels'>Push Notification</div>
            <div>These are delivered via SMS to your phone.</div>
            <div className='radio-containers'>
                <input 
                type='radio' 
                name="pushNotifications"  
                className='radio'
                value="Everything"
                onChange={changehandler}
                />
                Everything
            </div>
            <div>
            <input 
                type='radio' 
                name="pushNotifications"  
                className='radio'
                value="Same-as_Mail"
                onChange={changehandler}
                />
                Same as mail
            </div>
            <div>
            <input 
                type='radio' 
                name="pushNotifications"  
                className='radio'
                value="no-push-notification"
                onChange={changehandler}
                />
                No push notifications
            </div>
          </div>
          <button className='button' onClick={onclickbutton}>Save</button>
      </div>
    </div>
  )
}

export default App
