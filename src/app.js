import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { useMachine } from '@xstate/react'
import { enhancedStateMachine } from '../machine/stateMachine.js'
import AdaModeSigningExperience from './components/AdaModeSigningExperience.jsx'
import Authenticate from './components/Authenticate.jsx'
import Declined from './components/Declined.jsx'
import Failed from './components/Failed.jsx'
import GetTransaction from './components/GetTransaction.jsx'
import SessionExpired from './components/SessionExpired.jsx'
import SigningExperience from './components/SigningExperience.jsx'
import ThankYou from './components/ThankYou.jsx'
import SideBar from './components/SideBar.jsx'

const InPersonLanding = lazy(() => import('./components/InPersonLanding.jsx'))

const App = () => {
  const [state, send] = useMachine(enhancedStateMachine)
  console.log(`Render :: App`)
  const {
    context: { ceremony },
    sideBar
  } = state
{console.log('FEATURE_FLAG.INPERSONSIGNING', FEATURE_FLAG.INPERSONSIGNING )}
  return (
    <>
      {state.matches('authenticate') && <Authenticate />}
      {state.matches('adaModeSigningExperience') && (
        <>
          <SideBar send={send} state={state} sideBar={sideBar}/>
          <AdaModeSigningExperience send={send} ceremony={ceremony} />
        </>
      )}
      {state.matches('signingExperience') && (
        <>
          <SideBar send={send} state={state} sideBar={sideBar} />
          <SigningExperience send={send} ceremony={ceremony} />
        </>
      )}

      {FEATURE_FLAG.INPERSONSIGNING && state.matches('inPersonLanding') && (
        <Suspense fallback="<div>Loading...</div>">
          <SideBar send={send} state={state} sideBar={sideBar}/>
          <InPersonLanding send={send} ceremony={ceremony} />
        </Suspense>
      )}

      {state.matches('declined') && <Declined />}
      {state.matches('failed') && <Failed />}
      {state.matches('getTransaction') && <GetTransaction />}
      {state.matches('sessionExpired') && <SessionExpired />}
      {state.matches('thankYou') && <ThankYou />}
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
