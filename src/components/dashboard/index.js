/** @jsxImportSource theme-ui */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Flex, Heading, Paragraph } from "theme-ui";
import { getToDoCategory, getToDoList } from "../../api/todo";
import {
  initializeCategoryList,
  initializeToDoList,
} from "../../utilities/redux/slice/toDoSlice";
import { useNavigate } from "react-router-dom";
import CategoryCard from "./categoryCard";
import { getLocalStorage } from "../../utilities/localStorage/localStorage";
import store from "../../utilities/redux/store";
import { AiOutlinePlus } from "react-icons/ai";

export default function Dashboard() {
  const auth = useSelector((state) => state.authentication);
  const todo = useSelector((state) => state.todo.todo);

  const [cat, setCat] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getCategoryList();
    getExistingToDoList();
  }, []);

  const getCategoryList = () => {
    getToDoCategory().then((response) =>
      dispatch(initializeCategoryList(response))
    );
  };

  const getExistingToDoList = () => {
    getToDoList().then((response) => {
      dispatch(initializeToDoList(response));
      if (response.length > 0) {
        setCat(
          [...new Set(response.map((data) => data.category))].sort((a, b) =>
            a.localeCompare(b)
          )
        );
      }
    });
  };

  return (
    <Flex
      sx={{
        minHeight: ["100vh"],
        pt: 50,
        // width: "100vw",
        justifyContent: ["center", "start"],
        alignItems: ["center", "start"],
        flexDirection: "column",
        backgroundImage: "url('/assets/svg/dashboard-background.svg')",
        backgroundSize: ["cover", "cover"],
        px: 20,
      }}
    >
      {todo.length > 0 ? (
        <>
          <Button
            sx={{ width: 200, mb: 50, backgroundColor: "#27ccb0" }}
            onClick={() => navigate("/create")}
          >
            <Flex
              sx={{ alignItems: "center", justifyContent: "center", gap: 10 }}
            >
              <span sx={{ fontSize: 20, fontWeight: 600 }}>Create</span>
              <AiOutlinePlus size={23} />
            </Flex>
          </Button>
          <Flex
            sx={{
              minWidth: ["90vw"],
              width: [null, "100%"],
              gap: 40,
              flexDirection: ["column", "row"],
              alignItems: ["center", "start"],
              overflowX: "auto",
              pb: 50,
              "&::-webkit-scrollbar": {
                height: "5px",
                backgroundColor: "#dedede",
                borderRadius: 10,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#e6731c",
                borderRadius: 10,
              },
            }}
          >
            {cat.map((category) => (
              <CategoryCard
                key={category}
                category={category}
                todo={todo.filter((i) => i.category == category)}
              />
            ))}
          </Flex>
        </>
      ) : (
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paragraph
            sx={{
              mb: [4, 5],
              fontSize: [20, 30],
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            You don't have any to do item yet.
          </Paragraph>
          <Button sx={{ width: 200 }} onClick={() => navigate("/create")}>
            Create Now
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
