export interface UsersState {
    isLoading: boolean;
    selectedUser: {
        email: string
        data: userData[]
    },
    userInformationBar: boolean;
    users: [],
    error?: null | string,
    total: number,
}

export type userData = {
    color: string,
    date: Date,
    type: string,
    value: number,
}