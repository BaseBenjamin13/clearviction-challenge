
interface geoFields {
    lat: string
    lng: string
}
interface addressFields {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: geoFields
}
interface companyFields {
    name: string
    catchPhrase: string
    bs: string
}
interface userFields {
    id: number
    name: string
    username: string
    email: string
    address: addressFields
    phone: string
    website: string
    company: companyFields
}
export interface PropsForUsersList {
    users: Array<userFields>
}
export interface PropsForUsersField {
    title: string
    value: string
}

export interface PropsForErrorDisplay {
    errMsg: string
    handleTryAgain: any
}

export interface PropsForGetUserData {
    setUserData: (users: any) => void
    setShowErrMsg: (value: boolean) => void
    setIsLoading: (value: boolean) => void
}

export interface PropsForHeader {
    pageTitle: string
}