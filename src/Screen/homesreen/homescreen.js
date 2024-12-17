import React from 'react';
import './homescreen.css';
 import Homebanner from './homebanner/homebanner';
import Homedetails from './homedetails/homedetails';
import Footer from '../../component/Footer/footer';

const Homescreen = () => {
  return (
    <div className='homeScreen'>
     <Homebanner/>
     <Homedetails />
     
    </div>
  )
}

export default Homescreen;
