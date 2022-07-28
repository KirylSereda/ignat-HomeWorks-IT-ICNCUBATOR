type ThemeStateType = {
  theme: string;
};

const initState = {
  theme: "dark",
};

const CHANGE_THEME = "CHANGE_THEME";

export const themeReducer = (state: ThemeStateType = initState, action: changeThemeAC): ThemeStateType => {
  // fix any
  switch (action.type) {
    case CHANGE_THEME: {
      return { ...state, theme: action.theme };
    }
    default:
      return state;
  }
};

export type changeThemeAC = ReturnType<typeof changeTheme>;

export const changeTheme = (theme: string) =>
  ({
    type: CHANGE_THEME,
    theme,
  } as const); 
