export const authenticate = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve({ token: 'FAKETOKENFROMFAKESERVER' }), 2000)
  })

export const switchUser = () =>
new Promise((resolve, reject) => {
  setTimeout(() => resolve({ token: 'FAKETOKENFORSWITCHUSER' }), 2000)
})  

export const getCeremony = () =>
  new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve({
          ceremony: {
            role: {
              id: '4ea78be2-898e-4afb-b747-415490ae968b',
              fullName: 'John Smith',
              email: 'john.smith@onespan.com',
              isSender: false,
              isReviewer: false,
              canSign: true,
              __typename: 'Role'
            },
            transaction: {
              hasCaptureSignatures: false,
              canDecline: true,
              canChangeLanguage: true,
              id: 'UPWL_tnsOZKPhh18t9_kWb7Sl1k=',
              name: 'test',
              zipUrl: '/packages/UPWL_tnsOZKPhh18t9_kWb7Sl1k=/documents/zip',
              isCompleted: false,
              language: 'en',
              initialDocumentId: 'default-consent',
              firstNonConsentDocument: {
                id: '359df066b24ce11605d696febfca053ab6e381383be67229',
                __typename: 'Document'
              },
              canDownload: true,
              isAda: false,
              numOfDocuments: 2,
              senderName: 'John Smith',
              cachedSignature: null,
              documents: [
                {
                  id: 'default-consent',
                  name: 'Electronic Disclosures and Signatures Consent',
                  index: 0,
                  isReview: false,
                  isConsent: true,
                  isDisclosure: true,
                  isConfirmed: false,
                  hasOnlyOptionalApprovals: false,
                  isLast: false,
                  downloadUrl:
                    '/packages/UPWL_tnsOZKPhh18t9_kWb7Sl1k=/documents/default-consent/pdf?utf8=✓',
                  flattenedPdfUrl:
                    '/api/packages/UPWL_tnsOZKPhh18t9_kWb7Sl1k=/documents/default-consent/flatPdf?utf8=✓',
                  isReadyToConfirm: true,
                  approvals: [
                    {
                      id:
                        '7af829b3-2398-4535-8d24-be543c243391-default-consent',
                      isSigned: false,
                      __typename: 'Approval'
                    }
                  ],
                  signerApprovals: [
                    {
                      id:
                        '7af829b3-2398-4535-8d24-be543c243391-default-consent',
                      isAccepted: false,
                      isOptional: false,
                      isSigned: false,
                      __typename: 'Approval'
                    }
                  ],
                  pages: [
                    {
                      top: 0,
                      left: 0,
                      height: 1056,
                      width: 816,
                      index: 0,
                      imageUrl:
                        '/api/packages/UPWL_tnsOZKPhh18t9_kWb7Sl1k=/documents/default-consent/pages/0?confirm=false',
                      signerFields: [],
                      __typename: 'Page'
                    },
                    {
                      top: 0,
                      left: 0,
                      height: 1056,
                      width: 816,
                      index: 1,
                      imageUrl:
                        '/api/packages/UPWL_tnsOZKPhh18t9_kWb7Sl1k=/documents/default-consent/pages/1?confirm=false',
                      signerFields: [],
                      __typename: 'Page'
                    }
                  ],
                  __typename: 'Document'
                },
                {
                  id: '359df066b24ce11605d696febfca053ab6e381383be67229',
                  name: 'ContractBasics',
                  index: 1,
                  isReview: false,
                  isConsent: false,
                  isDisclosure: false,
                  isConfirmed: false,
                  hasOnlyOptionalApprovals: false,
                  isLast: true,
                  downloadUrl:
                    '/packages/UPWL_tnsOZKPhh18t9_kWb7Sl1k=/documents/359df066b24ce11605d696febfca053ab6e381383be67229/pdf?utf8=✓',
                  flattenedPdfUrl:
                    '/api/packages/UPWL_tnsOZKPhh18t9_kWb7Sl1k=/documents/359df066b24ce11605d696febfca053ab6e381383be67229/flatPdf?utf8=✓',
                  isReadyToConfirm: false,
                  approvals: [
                    {
                      id:
                        'IMeld6AtuMsA-359df066b24ce11605d696febfca053ab6e381383be67229',
                      isSigned: false,
                      __typename: 'Approval'
                    }
                  ],
                  signerApprovals: [
                    {
                      id:
                        'IMeld6AtuMsA-359df066b24ce11605d696febfca053ab6e381383be67229',
                      isAccepted: false,
                      isOptional: false,
                      isSigned: false,
                      __typename: 'Approval'
                    }
                  ],
                  pages: [
                    {
                      top: 0,
                      left: 0,
                      height: 1056,
                      width: 816,
                      index: 0,
                      imageUrl:
                        '/api/packages/UPWL_tnsOZKPhh18t9_kWb7Sl1k=/documents/359df066b24ce11605d696febfca053ab6e381383be67229/pages/0?confirm=false',
                      signerFields: [
                        {
                          id:
                            '3DhHmS9JHH4H-IMeld6AtuMsA-359df066b24ce11605d696febfca053ab6e381383be67229',
                          originalId: '3DhHmS9JHH4H',
                          height: 46,
                          width: 208,
                          page: 0,
                          number: 1,
                          top: 76,
                          left: 497,
                          isTextField: false,
                          isTextArea: false,
                          isDateField: false,
                          isCheckbox: false,
                          isRadio: false,
                          isList: false,
                          isLabel: false,
                          isCustomField: false,
                          isSignature: true,
                          isClickToSign: true,
                          isCaptureSig: false,
                          isClickToInitial: false,
                          isAutofill: false,
                          isAutofillDate: false,
                          isAutofillCompany: false,
                          isAutofillTitle: false,
                          isAutofillName: false,
                          isSelected: false,
                          name: '',
                          isRequired: false,
                          maxLength: 4000,
                          minLength: null,
                          format: '',
                          options: [],
                          isInput: false,
                          value: '',
                          type: 'SIGNATURE',
                          subtype: 'FULLNAME',
                          binding: null,
                          pattern: null,
                          patternMessage: null,
                          patternErrorCode: null,
                          acceptedDate: '',
                          fontSize: 12,
                          lineHeight: 18,
                          radioGroup: null,
                          approval: {
                            id:
                              'IMeld6AtuMsA-359df066b24ce11605d696febfca053ab6e381383be67229',
                            originalId: 'IMeld6AtuMsA',
                            isAccepted: false,
                            isOptional: false,
                            role: {
                              initials: 'MM',
                              company: '',
                              title: '',
                              fullName: 'John Smith',
                              __typename: 'Role'
                            },
                            __typename: 'Approval'
                          },
                          customFieldNames: [],
                          __typename: 'Field'
                        }
                      ],
                      __typename: 'Page'
                    },
                    {
                      top: 0,
                      left: 0,
                      height: 1056,
                      width: 816,
                      index: 1,
                      imageUrl:
                        '/api/packages/UPWL_tnsOZKPhh18t9_kWb7Sl1k=/documents/359df066b24ce11605d696febfca053ab6e381383be67229/pages/1?confirm=false',
                      signerFields: [],
                      __typename: 'Page'
                    },
                    {
                      top: 0,
                      left: 0,
                      height: 1056,
                      width: 816,
                      index: 2,
                      imageUrl:
                        '/api/packages/UPWL_tnsOZKPhh18t9_kWb7Sl1k=/documents/359df066b24ce11605d696febfca053ab6e381383be67229/pages/2?confirm=false',
                      signerFields: [],
                      __typename: 'Page'
                    },
                    {
                      top: 0,
                      left: 0,
                      height: 1056,
                      width: 816,
                      index: 3,
                      imageUrl:
                        '/api/packages/UPWL_tnsOZKPhh18t9_kWb7Sl1k=/documents/359df066b24ce11605d696febfca053ab6e381383be67229/pages/3?confirm=false',
                      signerFields: [],
                      __typename: 'Page'
                    }
                  ],
                  __typename: 'Document'
                }
              ],
              settings: {
                ceremony: {
                  layout: {
                    header: {
                      sessionBar: true,
                      __typename: 'Header'
                    },
                    showDocumentName: true,
                    showProgressBar: true,
                    showNavigator: true,
                    __typename: 'Layout'
                  },
                  declineHandOverUrl:
                    'https://www.google.ca/search?q=handOver&package=UPWL_tnsOZKPhh18t9_kWb7Sl1k%3D&signer=6aa8a914-d688-44da-bded-0629f8d81956&status=PACKAGE_DECLINE',
                  disableDeclineOther: false,
                  disableOptOutOther: false,
                  declineButton: true,
                  declineReasons: [
                    '3. Long reason scroll bar appears on bottom but not able to scroll and read complete reason\t3. Long reason scroll bar appears on bottom but not able to scroll and read complete reason',
                    'Decline reason1',
                    'Decline reason1Decline reason1Decline reason1Decline reason1Decline reason1Decline reason1Decline reason1Decline reason1',
                    'Decline reason2',
                    'Decline reason3',
                    'Decline reason4',
                    'Decline reason5',
                    'Decline reason6',
                    'Decline reason7',
                    'Decline reason1Decline reason1Decline reason1Decline reason1',
                    'Decline reason8',
                    'Decline reason9',
                    'Decline reason10',
                    'Decline reason1Decline reason1'
                  ],
                  disableDownloadForUncompletedPackage: false,
                  enforceCaptureSignature: false,
                  handOverUrl: 'https://www.google.ca/search?q=handOver',
                  handOverText: 'Click to continue',
                  handOverTitle: 'Click to continue',
                  __typename: 'CeremonySettings'
                },
                __typename: 'Settings'
              },
              __typename: 'Transaction'
            },
            session: {
              showConsentBar: true,
              loginSessionTimeout: 8000000,
              signerExpiryRedirect: 'http://localhost:3002/login',
              user: {
                id: '6aa8a914-d688-44da-bded-0629f8d81956',
                email: 'john.smith@onespan.com',
                language: 'en',
                __typename: 'User'
              },
              support: {
                phone: '1-855-MYESIGN',
                __typename: 'Support'
              },
              __typename: 'Session'
            },
            __typename: 'Ceremony'
          }
        }),
      2500
    )
  })
