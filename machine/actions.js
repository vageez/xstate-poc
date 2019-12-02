import { assign } from 'xstate'

const inPersonFeature = FEATURE_FLAG.INPERSONSIGNING && 
    ({ setInPerson: console.log('isInPerson') || assign({ inPerson: (state, event) => true }) })

export default {
    setToken: assign({ authToken: (state, event) => event.data.token }),
    setCeremony: assign({ ceremony: (state, event) => event.data }),
    toggleSideBar: assign({ sideBar: (state, event) => !state.sideBar }),
    ...inPersonFeature
}