export class Customer {

    constructor(
        id : string,
        name : string,
        surname1 : string,
        surname2 : string,
        idCard:{
            idCard: string,
            type: string,
            issued : string,
            expires: string,
            issuer : string,
            country : string
        },
        state : {
            id: string
        },
        fiscalAddress : {
            roadType : string,
            road : string,
            zipCode: string,
            Locality : string
        }
    ){}
}