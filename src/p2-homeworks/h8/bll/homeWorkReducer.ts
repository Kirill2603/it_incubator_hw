import {UserType} from "../HW8";

type ActionsType = {type: 'sort', payload: 'up' | 'down'}
    | {type: 'check', payload: number}

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state].sort((a,b) => a.name > b.name ? 1 : -1 )
            } else return [...state].sort((a,b) => a.name < b.name ? 1 : -1 )
        }

        case 'check': {
            return [...state].filter(a => a.age >= action.payload)
        }
        default: return state
    }
}
