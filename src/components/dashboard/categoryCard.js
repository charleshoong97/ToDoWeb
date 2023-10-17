/** @jsxImportSource theme-ui */

import {
  Card,
  Checkbox,
  Flex,
  Heading,
  IconButton,
  Label,
  MenuButton,
} from "theme-ui";
import { updateExistingToDo } from "../../api/todo";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { updateToDo } from "../../utilities/redux/slice/toDoSlice";
import { getCategoryColor } from "../../utilities/category";
import { AiOutlineMore } from "react-icons/ai";
import Item from "./item";

export default function CategoryCard(props) {
  const { category, todo } = props;

  return (
    <div
      sx={{
        minWidth: 230,
        width: 230,
        backgroundColor: "white",
        borderRadius: 20,
        borderWidth: 10,
        borderStyle: "solid",
        borderColor: getCategoryColor(category),
        p: 20,
      }}
    >
      <Heading as={"h3"}>{category}</Heading>
      <span sx={{ fontSize: "12px" }}>
        Completed : {todo.filter((i) => i.isCompleted == true).length}
      </span>
      <br />
      <span sx={{ fontSize: "12px" }}>
        Pending : {todo.filter((i) => i.isCompleted == false).length}
      </span>
      <div sx={{ mt: 2 }}>
        {todo
          .filter((i) => i.isCompleted == false)
          .sort((a, b) => Date.parse(b.updatedDate) - Date.parse(a.updatedDate))
          .map((i) => (
            <Item key={i.id} {...i} />
          ))}
        {todo
          .filter((i) => i.isCompleted == true)
          .sort((a, b) => Date.parse(a.updatedDate) - Date.parse(b.updatedDate))
          .map((i) => (
            <Item key={i.id} {...i}>
              {console.log(Date.parse(i.updatedDate))}
            </Item>
          ))}
      </div>
    </div>
  );
}
