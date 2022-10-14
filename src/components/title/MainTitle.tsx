import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { GenderType, TitleBarProps } from '../../types';
import TitleSlider from './TitleSlider';

export default function MainTitle() {
  const [gender, setGender] = useState(GenderType.male);

  const cardTitle = () => {
    return (<MyCardTitle/>)
  }


  return (
    <div className="header"> 
     <TitleSlider gender={gender} setGender={setGender}/>
     <span className="mainTitle"> Mustang Soccer</span>
    <Card>
      <Card.title>{cardTitle()}</Card.title>
    </Card>
    </div>
  );
}
