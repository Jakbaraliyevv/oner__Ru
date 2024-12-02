import { createContext, useReducer } from "react";

const ShopAppContext = createContext();

const ShopContext1 = ({ children }) => {
  const intialState = {
    data: [],
  };

  const reducer = (state, { type, value }) => {
    switch (type) {
      case "add":
        const newData = { ...state, data: [...state.data, value] };
        localStorage.setItem("shop", JSON.stringify(newData.data));
        return newData;
    }
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <ShopAppContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopAppContext.Provider>
  );
};

export { ShopAppContext, ShopContext1 };
