import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { GenderType , TitleBarProps } from '/Users/marcoszertuche/Documents/GitHub/SMU-Soccer-App/src/types';
import TitleSlider from './TitleSlider';



export default function MainTitle() {
  const [gender, setGender] = useState(GenderType.male);



  return (
    <div className="header"> 
     <TitleSlider gender={gender} setGender={setGender}/>
     <span className="mainTitle"> Mustang Soccer</span>
    </div>
  );
}

//<Card.title>{cardTitle()}</Card.title>