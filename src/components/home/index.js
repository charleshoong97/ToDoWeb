/** @jsxImportSource theme-ui */

import { useNavigate } from "react-router-dom";
import { Button, Flex, Heading } from "theme-ui";
import store from "../../utilities/redux/store";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Flex
      sx={{
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/assets/svg/background.svg')",
        backgroundSize: "cover",
      }}
    >
      <Heading
        as={"h1"}
        sx={{
          fontSize: 30,
          fontWeight: 800,
          mb: 5,
          textAlign: "center",
          lineHeight: 2,
        }}
      >
        Manage your ToDo item with us
      </Heading>
      <Button
        sx={{ fontSize: 20, fontWeight: 800 }}
        type="button"
        onClick={() =>
          store.getState().authentication.token != null
            ? navigate("dashboard")
            : navigate("login")
        }
      >
        Get Started
      </Button>
    </Flex>
  );
}
