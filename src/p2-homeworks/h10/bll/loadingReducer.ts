const initState = {
  isLoading: false,
};

type initStateType = typeof initState;

export const loadingReducer = (state = initState, action: loadingAT): initStateType => {
  switch (action.type) {
    case "CHANGE_ISLOADING": {
      return { ...state, isLoading: action.isLoading };
    }
    default:
      return state;
  }
};

type loadingAT = {
  type: "CHANGE_ISLOADING";
  isLoading: boolean;
};

export const loadingAC = (isLoading: boolean): loadingAT => ({ type: "CHANGE_ISLOADING", isLoading }); // fix any
