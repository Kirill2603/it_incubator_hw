const initState = {
    theme: 'dark'
};

export const themeReducer = (state = initState, action: ChangeThemeActionType): typeof initState=> { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

export const changeThemeAC = (theme: string) => ({
    type: 'CHANGE-THEME', theme
} as const); // fix any

type ChangeThemeActionType = ReturnType<typeof changeThemeAC>