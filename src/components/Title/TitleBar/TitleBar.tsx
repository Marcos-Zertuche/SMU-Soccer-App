import { useState } from 'react';
import { GenderType , TitleBarProps} from '../../../types';
import MainTitle from './MainTitle';
import TitleSlider from './TitleSlider';

export default function TitleBar(titleBarProps: TitleBarProps) {
    const [gender, setGender] = useState(GenderType.male);
  return (
    <div className='titleBar'>
        <MainTitle />
       
        
    </div>
  )
}
