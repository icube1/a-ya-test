import { useState } from 'react'
import styles from "../styles/components/ColorButton.module.css";

type Props = {}

export const ColorButton = (props: Props) => {
  const [active, setActive] = useState('blue');

  const onChange =  (value: string) => {
    setActive(value);
  }
  return (
    <div>
      <button style={{boxSizing: 'border-box',width: 20, height: 20, backgroundColor: 'pink', borderWidth: active === 'pink' ? 2 : 1, margin: 2, borderRadius: 2,}} onClick={()=>setActive('pink')} />
      <button style={{boxSizing: 'border-box',width: 20, height: 20, backgroundColor: 'blue', borderWidth: active === 'blue' ? 2 : 1, margin: 2, borderRadius: 2,}} onClick={()=>setActive('blue')} />
      <button style={{boxSizing: 'border-box',width: 20, height: 20, backgroundColor: 'yellow', borderWidth: active === 'yellow' ? 2 :1, margin: 2, borderRadius: 2,}} onClick={()=>setActive('yellow')} />
      <button style={{boxSizing: 'border-box',width: 20, height: 20, backgroundColor: 'cyan', borderWidth: active === 'cyan' ? 2 : 1, margin: 2, borderRadius: 2,}} onClick={()=>setActive('cyan')} />

    </div>

  )
}
