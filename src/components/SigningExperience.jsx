import React, { memo } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const Pre = styled.pre`
  overflow-x: auto;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  color: green;
`

const SigningExperience = memo(({ send, ceremony }) => {
  console.log(`Render :: SigningExperience`)

  const decline = () => send({ type: "DECLINE" })
  const accept = () => send({ type: "ACCEPT" })
  const adaMode = () => send({ type: "ADAMODE" })

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SigningExperience</title>
      </Helmet>
      <div>
        <button onClick={() => adaMode()}>Switch To ADA Mode</button>
      </div>
      <h1>{`SigningExperience`}</h1>
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

export default SigningExperience
