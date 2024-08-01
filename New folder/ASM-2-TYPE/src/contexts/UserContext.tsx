import React, { createContext, useEffect, useReducer } from "react";
import instance from "../apis";
import { User } from "../interfaces/User";

type UserState = {
  users: User[];
};

type UserContextType = {
  state: UserState;
  handleRemove: (id: number | string) => void;
};

const initialState: UserState = {
  users: [],
};

const userReducer = (state: UserState, action: any): UserState => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

type ChirldrenProps = {
  children: React.ReactNode;
};

export const UserProvider = ({ children }: ChirldrenProps) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/users");
      dispatch({ type: "SET_USERS", payload: data });
    })();
  }, []);

  const handleRemove = async (id: number | string) => {
    if (confirm("Are you sure account?")) {
      await instance.delete(`/users/${id}`);
      dispatch({ type: "REMOVE_USER", payload: id });
    }
  };

  return (
    <UserContext.Provider value={{ state, handleRemove }}>
      {children}
    </UserContext.Provider>
  );
};
