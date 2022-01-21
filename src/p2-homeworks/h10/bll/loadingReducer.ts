const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: ReturnType<typeof loadingAC>): typeof initState => {
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) =>
    ({type: 'LOADING', isLoading} as const)
