const inPersonFeature = FEATURE_FLAG.INPERSONSIGNING && { inPerson: null }

export default {
  authToken: null,
  ceremony: null,
  sideBar: false,
  ...inPersonFeature
}