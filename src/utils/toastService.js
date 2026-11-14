import { toast } from "react-toastify";

export const showToastMessage = (type, message, position = "top-right") => {
  const toastTypes = {
    success: toast.success,
    error: toast.error,
    warning: toast.warning,
    info: toast.info,
    dark: toast.dark,
    default: toast,
  };
  
  const toastFunction = toastTypes[type] || toastTypes.default;

  toastFunction(message, { position });
};