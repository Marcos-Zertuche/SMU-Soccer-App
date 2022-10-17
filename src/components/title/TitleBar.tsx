import { useState } from 'react';
import { GenderType, TitleBarProps } from '../../types';
import TitleSlider from './TitleSlider';

export default function TitleBar(titleBarProps: TitleBarProps) {
  const [gender, setGender] = useState(GenderType.male);

  return (
    <div className='titleBar'>
     <TitleSlider gender={gender} setGender={setGender}/>
     <span className="header"> Mustang Soccer</span>
     <div className='titleSlider'></div>
    </div>
  )
}
