/** @jsxImportSource theme-ui */

import { useDispatch, useSelector } from "react-redux";
import { Button, Flex, Link } from "theme-ui";
import { logout } from "../../utilities/redux/slice/authenticationSlice";
import { reset } from "../../utilities/redux/slice/toDoSlice";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const auth = useSelector((state) => state.authentication);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const textColor = ["/", "/login", "/dashboard", "/create"].includes(
    location.pathname
  )
    ? "black"
    : "white";

  return (
    <div
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        px: [10, 20],
        backgroundColor: "transparent",
      }}
    >
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          height: 50,
        }}
      >
        <Link
          sx={{ fontSize: [15, 20], fontWeight: 800, color: textColor }}
          href="/"
        >
          To Do Web
        </Link>
        {auth.token ? (
          <Flex sx={{ gap: [10, 20], fontSize: [15], alignItems: "center" }}>
            <Link href="/" sx={{ color: textColor }}>
              Home
            </Link>
            <Link href="dashboard" sx={{ color: textColor }}>
              Dashboard
            </Link>
            <Button
              onClick={() => {
                dispatch(logout());
                dispatch(reset());
                navigate("/");
              }}
            >
              Logout
            </Button>
          </Flex>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </Flex>
    </div>
  );
}
