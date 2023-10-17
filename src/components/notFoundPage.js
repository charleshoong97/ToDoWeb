/** @jsxImportSource theme-ui */

import { Flex, Heading } from "theme-ui";

export default function NotFoundPage() {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/assets/svg/not-found-background.svg')",
        backgroundSize: "repeat",
      }}
    >
      <Heading as={"h1"} sx={{ fontSize: 30, color: "white" }}>
        404 Not Found
      </Heading>
    </Flex>
  );
}
