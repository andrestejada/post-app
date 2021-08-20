import React from 'react';
import {ReactComponent as LeftArrow} from '../../assets/left-arrow.svg';


export function SamplePrevArrow({ className, style, onClick }) {
  
    return (
      <LeftArrow
        className={className}
        style={{...style,
            padding: '1em',           
            border: '1px solid #00B4EB ',
            height:'34px',
            width:'34px',
            fontSize:'7px',
            //borderImage: 'linear-gradient(90deg, #00B4EB 0%, #00FF2E 100%)',
            boxShadow :' 0px 0px 5px 2px rgba(1, 255, 47, 0.5)',
            borderRadius: '15px'            
            }}
        onClick={onClick}
      />
    );
  }


