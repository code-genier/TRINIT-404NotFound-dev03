import React from 'react'
import { useState } from 'react';
import { useGeolocated } from "react-geolocated";
import RecmdData from './RecmdData';


function RecmdHelper() {

  return (
    <div>
      <RecmdData/>
    </div>
  )
}

export default RecmdHelper