import styled from 'styled-components'
import one from './assets/01_ploshchad-vozduhovoda-kruglogo-secheniia.png'
import { oneDropdown } from './data'
import { useState } from 'react'

function App() {
  const [oneDMTR, setoneDMTR] = useState(100)
  const [oneLength, setOneLength] = useState(null)


  const truba_kr = (oneLength*oneDMTR*Math.PI/1000).toFixed(2);

  
  return (
    <>
    <Container>
     <div>
        <img src={one} alt="one" />
     </div>
     <div className='inputs'>
      <div className='input_item'>
      <label >დიამეტრი d, mm </label>
        <select id="edit-wrapper-diametr" onChange={(e) => setoneDMTR(e.target.value)}>
          {
            oneDropdown.map( item => <option key={item} value={item} >{item}</option>)
          }        
        </select>
      </div>
      <div className='input_item'>
        <label htmlFor="">სიგრძე l, m</label>
        <input type="number" value={oneLength == 0 ? "" : oneLength} onChange={(e) => setOneLength(+e.target.value)}/>
      </div>
      <p>ფართობი {truba_kr}</p>

     </div>
    </Container>
    </>
  )
}

const Container  = styled.div`
  display: flex;
  .inputs{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .input_item{
    display: flex;
    gap: 10px;
  }
`

export default App
