import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../utilities/redux/slice/authenticationSlice";
import { reset } from "../../utilities/redux/slice/toDoSlice";
import { validateToken } from "../../api/authentication";

export default function ValidateAuthorization({ children }) {
  //   const auth = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const forceLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const validateAccess = async () => {
    const state = localStorage.getItem("state");
    const auth = JSON.parse(state)?.authentication;

    if (
      auth != null &&
      auth.token != null &&
      Date.parse(auth.expiration) > Date.now()
    ) {
      let response = await validateToken();

      if (response.error) {
        forceLogout();
      }
    } else {
      console.log(auth);
      forceLogout();
    }
  };

  useEffect(() => {
    validateAccess();
  }, []);

  return children;
}
