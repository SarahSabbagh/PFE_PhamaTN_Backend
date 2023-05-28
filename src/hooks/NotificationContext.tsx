import React, { createContext, useState } from "react";

const [notificationCount, setNotificationCount] = useState(0);
const NotificationContext = createContext({
  notificationCount,
  setNotificationCount,
});
export const NotificationProvider = (children: JSX.Element) => {
  return (
    <NotificationContext.Provider
      value={{ notificationCount, setNotificationCount }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
