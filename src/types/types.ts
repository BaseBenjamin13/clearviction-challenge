
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
    handleLoadMore: any
    // handleLoadMore: (userLimit: number) => void
    userLimitReached: boolean
}
export interface PropsForUsersField {
    title: string
    value: string
}

export interface PropsForErrorDisplay {
    errMsg: string
    handleTryAgain: any
    // handleTryAgain: (value: boolean) => void
}

export interface PropsForGetUserData {
    setUserData: (users: any) => void
    setShowErrMsg: (value: boolean) => void
    setIsLoading: (value: boolean) => void
    userLimit: number
    setUserLimitReached: (value: boolean) => void
}

export interface PropsForHeader {
    pageTitle: string
}