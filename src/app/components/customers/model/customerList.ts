export interface Customer {
  id : string,
  name: string,
  surname1 : string,
  surname2 : string,
  idCard: {
    number : string,
    type : string,
    issued : string,
    expires : string,
    issuer : string
  },
  fiscalAddress: {
    roadType : string,
    road : string,
    zipCode : string,
    locality: string,
    country : {
      id : string
    }
  }
}