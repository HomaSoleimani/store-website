import { toast } from "react-toastify";

export const successMessage = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 3000,
    closeOnClick: true,
  });
};

export const errorMessage = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 3000,
    closeOnClick: true,
  });
};
export const warningMessage = (message) => {
  toast.info(message, {
    position: "top-right",
    autoClose: 3000,
    closeOnClick: true,
  });
};
