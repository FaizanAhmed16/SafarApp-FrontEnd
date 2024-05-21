import React, { createContext, useState, useContext } from "react";

const TicketContext = createContext();

export const useTicket = () => useContext(TicketContext);

export const TicketProvider = ({ children }) => {
  const [ticketDetails, setTicketDetails] = useState({});

  return (
    <TicketContext.Provider value={{ ticketDetails, setTicketDetails }}>
      {children}
    </TicketContext.Provider>
  );
};
