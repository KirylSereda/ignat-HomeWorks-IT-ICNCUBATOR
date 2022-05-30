import { UserType } from "../HW8";

type ActionType = { type: "sort"; payload: "up" | "down" } | { type: "check"; payload: 18 };

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
  switch (action.type) {
    case "sort": {
      let copyState = [...state].sort((a, b) => (a.name > b.name ? 1 : -1));
      return action.payload == "up" ? copyState : copyState.reverse();
    }
    case "check": {
      return [...state].filter((el) => el.age! > action.payload);
    }
    default:
      return state;
  }
};
