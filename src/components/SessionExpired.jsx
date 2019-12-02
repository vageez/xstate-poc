import React from 'react'
import { Helmet } from 'react-helmet'

const SessionExpired = () => console.log(`Render :: SessionExpired`) || (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>SessionExpired</title>
    </Helmet>
    <h1>{`SessionExpired`}</h1>
  </div>
)

export default SessionExpired