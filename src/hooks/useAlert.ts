import React from "react";

export const useAlert = () => {
  const [alert, setAlert] = React.useState({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({
    text,
    type = "danger",
  }: {
    text: string;
    type?: "danger" | "success";
  }) => {
    setAlert({
      show: true,
      text,
      type,
    });
  };

  const hideAlert = () => {
    setAlert({
      show: false,
      text: "",
      type: "danger",
    });
  };

  return { alert, showAlert, hideAlert };
};
