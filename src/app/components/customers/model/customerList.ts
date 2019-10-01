export interface Customer {
  id : string,
  type : string,
  name: string,
  surname1 : string,
  surname2 : string,
  idCard: {
    number : string,
    type : string,
    issued : string,
    expires : string,
    issuer : string,
    country : string,
  },
  state : {
    id : string
  },
  gender : string,
  birth: string,
  birthCountry: {
    id: string
  },
  nationalities : [{
    id : string
  }],
  civilStatus : string,

  fiscalAddress: {
    roadType : string,
    road : string,
    zipCode : string,
    locality: string,
    country : {
      id : string
    },
    province : {
      id : string,
      code : string,
      name : string,
      country: string,
      metadata: {
        owner : string,
        externalCode : string,
        externalCodeExtended: string,
        source : string,
        created : string,
        updated : string,
        syncPullDate : string,
        syncPullSource : string,
        syncPushDate : string,
        syncPushSource : string,
        messages : string
      }
    }
  },
  contactData: {
    email: string,
    alternateEmail: string,
    landlinePhone : string,
    cellPhone : string,
    fax : string,
    website : string,
  },
  detail : {
    profession : string,
    jobType : {
      id : string
    },
    decease : string,
    pepType : string,
    pepCode : string,
    highRiskCode : string,
    publicInterestPerson : string,
    annualIncomeAmount : string,
    annualIncomeCurrency : string,
    commercialNotifications : string,
    alternativeFiscalCountry : string,
    economicActivity : string
  },
  metadata : {
    owner : string,
    externalCode : string,
    externalCodeExtended: string,
    source : string,
    created : string,
    updated : string,
    syncPullDate : string,
    syncPullSource : string,
    syncPushDate : string,
    syncPushSource : string,
    messages : string
  }
}