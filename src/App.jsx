import './App.css'
import React, { useState } from 'react';

const CardForm = () => {
  const[ formData , setFormData]= useState({
    cardName:'',
    cardNumber:'',
    expiryDate:'',
    cvv:'',
  });
  const[errors , setErrors] = useState({
    cardName:'',
    cardNumber:'',
    expiryDate:'',
    cvv:'',
    
  });
  const handleInputChange = (e) => {
    const{ name , value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = {...errors};


    if (formData.cardNumber.length !==16 ){
      isValid = false;
      newErrors.cardNumber = 'Invalid card number';
    }
    else{
      newErrors.cardNumber = '';
    }
    if (!formData.expiryDate.match(/^(0[1-9]|1[0-2])\/\d{2}/)){
      isValid = false;
      newErrors.expiryDate = 'Invalid expiry date (MM/YY)';
    }
    else{
      newErrors.expiryDate = '';
    }

    if (formData.cvv.length !==3 ){
      isValid = false;
      newErrors.cvv = 'Invalid CVV';
    }
    else{
      newErrors.cvv = '';
    }

    setErrors(newErrors);

    if(isValid){
      console.log('Form submitted successfully');
      console.log(formData);
    }
  };

  return (
    <div>
      <form onSubmit= {handleSubmit}>
          <div className="container">
           <img className='image1'src="Group 2.png"/>
         </div>
         <section className='holder'>
           <p>CARDHOLDER NAME</p>
           <input 
            className='name' 
            name="cardName"
            value={formData.cardName}
            placeholder="eg: Durgesh patel" 
            type={'text'} 
            onChange={handleInputChange}/>
          
          <p>CARD NUMBER</p>
           <input
            className="cardnumber"
            placeholder="eg: 0000 1234 5678 9000"
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
          />
          <p className="error">{errors.cardNumber}</p>
          <label className='date'>EXP. DATE(MM/YY)</label>
          <input
            className='date' 
            placeholder='MM/YY'
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
          />
          <p className="error">{errors.expiryDate}</p>
          <lable className='CVV'>CVV</lable>
          <input 
            className='CVV' 
            placeholder='eg: 123' 
            name='cvv'
            value={formData.cvv} 
            onChange={handleInputChange}
          />
         <p className="errorcvv">{errors.cvv}</p>
         <button className='confirm'>Confirm</button>
       </section>
        <img src='front.png' className="image2"/>
        <p className='type1'>{formData.cardName}</p>
        <p className='type2'>{formData.cardNumber}</p>
        <p className='type3'>{formData.expiryDate}</p>
        <img src='Group 6.jpg' className="image3"/>
        <p className='type4'>{formData.cvv}</p>
      </form>  
    </div>
  );
};  
export default function App() {
  return (
    <div>
      <CardForm />
    </div>
  );
}
