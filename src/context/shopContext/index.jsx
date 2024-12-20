import { createContext, useReducer } from "react";

const ShopAppContext = createContext();

const ShopContext1 = ({ children }) => {
  const intialState = {
    data: JSON.parse(localStorage.getItem("shop")) || [],
  };

  const reducer = (state, { type, value, delet_ID, product__id }) => {
    switch (type) {
      case "add":
        const findData = state?.data?.find((item) => item.id === value.id);

        if (findData) {
          state.data = state.data.map((value) =>
            findData.id === value.id
              ? {
                  ...findData,
                  count: findData.count + 1,
                  userPrice: value.count * value.price_current,
                }
              : value
          );
        } else {
          state.data = [
            ...state.data,
            { ...value, count: 1, userPrice: value.price_current },
          ];
        }

        localStorage.setItem("shop", JSON.stringify(state.data));
        return { ...state };

      case "delete":
        const filterData = state.data.filter((value) => value.id !== delet_ID);
        localStorage.setItem("shop", JSON.stringify(filterData));

        return { ...state, data: filterData };

      case "increment":
        state.data = state.data.map((item) =>
          product__id === item.id
            ? {
                ...item,
                count: item.count + 1,
                userPrice: (item.count + 1) * item.price_current,
              }
            : item
        );
        localStorage.setItem("shop", JSON.stringify(state.data));
        return { ...state };

      case "decrement":
        state.data = state.data.map((item) =>
          product__id === item.id
            ? {
                ...item,
                count: item.count > 1 ? item.count - 1 : 1,
                userPrice:
                  (item.count > 1 ? item.count - 1 : 1) * item.price_current,
              }
            : item
        );
        localStorage.setItem("shop", JSON.stringify(state.data));
        return { ...state };
      default:
        return { ...state, data: [] };
    }
  };

  const [state, dispatch] = useReducer(reducer, intialState);

  console.log(state.data);

  return (
    <ShopAppContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopAppContext.Provider>
  );
};

export { ShopAppContext, ShopContext1 };
