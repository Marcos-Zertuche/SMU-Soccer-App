import { TitleBarSlider } from '../../types';
import { ToggleSlider }  from "react-toggle-slider";
import './title.css'

export default function TitleSlider(props: TitleBarSlider) {
  return (
      <div className='titleSlider'>
        <span className='titleSliderText'>M</span>
        <ToggleSlider/>
        <span className='titleSliderText'>W</span>
      </div>
  )
}
