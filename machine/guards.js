const inPersonFeature = FEATURE_FLAG.INPERSONSIGNING && {
  isInPersonExperience: ({ inPerson }, event) => inPerson
}

export default {
  ...inPersonFeature
}
