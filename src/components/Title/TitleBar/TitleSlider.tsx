import { TitleBarSlider } from "../../../types";
import { ToggleSlider }  from "react-toggle-slider";
import './title.css'

export default function TitleSlider(props: TitleBarSlider) {
  return (
    <div className='titleSlider'>
      <div>M</div>
      <ToggleSlider/>
      <div>W</div>
    </div>
  )
}
