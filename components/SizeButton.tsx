import {useState} from 'react'

type Props = {}

const SizeButton = (props: Props) => {
  const [active, setActive] = useState('S');
  console.log(active)
  return (
    <>
      <button onClick={()=>setActive('S')} value='S' title='XS' style={{width: 36, height: 24, backgroundColor: active === 'S' ? 'white' : 'grey'}}>S</button>
      <button onClick={()=>setActive('M')} value='M' title='XS' style={{width: 36, height: 24, backgroundColor: active === 'M' ? 'white' : 'grey'}}>M</button>
      <button disabled onClick={()=>setActive("L")} value='L' title='XS' style={{width: 36, height: 24, backgroundColor: active === 'L' ? 'white' : 'grey'}}>L</button>
      <button onClick={()=>setActive('XL')} value='XL' title='XS' style={{width: 36, height: 24, backgroundColor: active === 'XL' ? 'white' : 'grey'}}>XL</button>
    </>
  )
}

export default SizeButton