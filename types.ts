export type addressType = {
    street: string
    suite: string
    city: string
    zipcode: string
}

export type contactType = {
    id: string
    name: string
    email: string
    address: addressType
}

export type postType = {
    id: number
    title: string
    body: string
}

export type socialType = {
    id: number
    icon: string
    path: string
}

export type navigateType = {
    id: number
    title: string
    path: string
}