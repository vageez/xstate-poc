import React, { memo } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const Pre = styled.pre`
  overflow-x: auto;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  color: green;
`

const AdaModeSigningExperience = memo(({ send, ceremony }) => {
  console.log(`Render :: AdaModeSigningExperience`)

  const decline = () => send({ type: 'DECLINE' })
  const accept = () => send({ type: 'ACCEPT' })
  const regMode = () => send({ type: 'REGMODE' })

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ada Mode Signing Experience</title>
      </Helmet>
      <div>
        <button onClick={regMode}>Switch To Regular Mode</button>
      </div>
      <h1>{`Ada Mode Signing Experience`}</h1>
      <div>
        <button onClick={decline}>Decline</button>
      </div>
      <div>
        <button onClick={accept}>Accept</button>
      </div>
      <Pre>{JSON.stringify(ceremony, null, 4)}</Pre>
    </div>
  )
})

export default AdaModeSigningExperience
