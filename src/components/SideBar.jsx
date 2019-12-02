import React from 'react'

const SideBar = ({ send, state, parent }) => {
  console.log(`Render :: SIDEBAR `)
  return (
    <div></div>
    // <div>
    //   {state.matches(`${parent}.open`) && (
    //     <button onClick={() => send({ type: 'TOGGLECLOSED' })}>
    //       TOGGLECLOSED
    //     </button>
    //   )}
    //   {state.matches(`${parent}.closed`) && (
    //     <button onClick={() => send({ type: 'TOGGLEOPEN' })}>TOGGLEOPEN</button>
    //   )}
    //   {state.matches(`${parent}.open`) && (
    //     <ul className={'open'}>
    //       <li>Side Bar Option 1</li>
    //       <li>Side Bar Option 2</li>
    //       <li>Side Bar Option 3</li>
    //       <li>Side Bar Option 4</li>
    //     </ul>
    //   )}
    // </div>
  )
}

export default SideBar
