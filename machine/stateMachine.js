import { Machine } from 'xstate'
import context from './context'
import actions from './actions'
import guards from './guards'
import { states } from './states'

const stateMachine = Machine({
  id: 'signerMachine',
  initial: 'authenticate',
  context,
  states
})

export const enhancedStateMachine = stateMachine.withConfig({
  actions,
  guards
})
