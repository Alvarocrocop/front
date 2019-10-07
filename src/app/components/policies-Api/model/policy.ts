export interface policy {
    id: string,
    agreementId: string,
    networkId: string,
    certificateNumber: string,
    policyNumber: string,
    effective: string,
    end: string,
    expiration: string,
    state: string,
    subState: string,
    endReason: string,
    regularPayment: string,
    currencyId: string
    reinsurance: string,
    reinsuranceDetail: string,
    collective: string,
    collectivePolicyId: string,
    beneficiaryType: string,
    beneficiaryFreeText: string,
    relations: {
        id: string,
        entityRef: {
            type: string,
            reference: string
        }
        roles: {
            holder: string,
            insured: string
        }
        postalAddress: string,
        account: {
            number: string,
            type: string,
            holder: string,
            bic: string
        }
    }
    metadata: {
        created: string,
        updated: string,
        sync: string,
        messages: string
    }
    authorization: string[],
    additionalData: {
        sumInsured: {
            value: string,
            currencyId: string
        },
        ownershipPercentage: number,
        monthDuration: number,
        interestRate: number,
        loanNumber: string,
        modality: string,
        calculations: string
    },
    links: any[]
}