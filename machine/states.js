import { authenticate, getCeremony, switchUser } from '../server'

// signingExperience.sideBar, closed
export const sideBar = {
  id: 'sideBar',
  initial: 'closed',
  states: {
    closed: { on: { TOGGLE: 'open' } },
    open: { on: { TOGGLE: 'closed' } }
  }
}

const inPersonFeature = FEATURE_FLAG.INPERSONSIGNING
  ? {
      getTransaction: {
        invoke: {
          src: (_context, _event) => getCeremony(),
          onDone: {
            target: 'directUserToCeremony',
            actions: ['setCeremony', 'setInPerson']
          },
          onError: {
            target: 'failed'
          }
        }
      },
      directUserToCeremony: {
        on: {
          '': [
            { target: 'inPersonLanding', cond: 'isInPersonExperience' },
            { target: 'signingExperience' }
          ]
        }
      },
      switchUser: {
        invoke: {
          src: (_context, _event) => switchUser(),
          onDone: {
            target: 'signingExperience',
            actions: ['setToken']
          },
          onError: {
            target: 'failed'
          }
        }
      },
      inPersonLanding: {
        on: {
          SWITCHUSER: 'signingExperience',
          SESSIONEXP: 'sessionExpired',
          // TOGGLESIDEBAR: {
          //   action: ['toggleSideBar']
          // }
        },
      }
    }
  : {
      getTransaction: {
        invoke: {
          src: (_context, _event) => getCeremony(),
          onDone: {
            target: 'directUserToCeremony',
            actions: ['setCeremony']
          },
          onError: {
            target: 'failed'
          }
        }
      },
      directUserToCeremony: {
        on: {
          '': [{ target: 'signingExperience' }]
        }
      }
    }

export const states = {
  authenticate: {
    invoke: {
      src: (_context, _event) => authenticate(),
      onDone: {
        target: 'getTransaction',
        actions: ['setToken']
      },
      onError: {
        target: 'failed'
      }
    }
  },
  ...inPersonFeature,
  signingExperience: {
    after: {
      360000: 'sessionExpired'
    },
    on: {
      DECLINE: 'declined',
      ACCEPT: 'thankYou',
      SESSIONEXP: 'sessionExpired',
      ADAMODE: 'adaModeSigningExperience',
      // TOGGLESIDEBAR: {
      //   action: ['toggleSideBar']
      // }      
    },
  },
  adaModeSigningExperience: {
    on: {
      DECLINE: 'declined',
      ACCEPT: 'thankYou',
      SESSIONEXP: 'sessionExpired',
      REGMODE: 'signingExperience',
      // TOGGLESIDEBAR: {
      //   action: ['toggleSideBar']
      // }
    },
  },
  sessionExpired: {
    type: 'final'
  },
  declined: {
    type: 'final'
  },
  failed: {
    type: 'final'
  },
  thankYou: {
    type: 'final'
  }
}
