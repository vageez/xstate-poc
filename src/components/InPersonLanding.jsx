import React, { memo } from 'react'
import { Helmet } from 'react-helmet'

const InPersonLanding = memo(({ send, ceremony }) => {
  console.log(`Render :: InPersonLanding`)

  const switchUser = () => send({ type: "SWITCHUSER" }) 
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>inPersonLanding</title>
      </Helmet>
      <h1>{`In Person Landing`}</h1>
      <div>User 1 </div>
      <div>User 2 <button onClick={switchUser}>Switch to this user</button></div>
      <div>User 3 <button onClick={switchUser}>Switch to this user</button></div>
    </div>
  )
})

export default InPersonLanding
