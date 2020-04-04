import React, { createContext, useState } from "react";
import card1 from "./data/card1.json";
import card2 from "./data/card2.json";
import card3 from "./data/card3.json";

export const CardContext = createContext();

const CardContextProvider = props => {
  const [cardData, setCardData] = useState([card1, card2, card3]);

  return (
    <CardContext.Provider value={{ cardData }}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
