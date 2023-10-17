/** @jsxImportSource theme-ui */

import { useRef } from "react";
import { Checkbox, Flex, Label, MenuButton } from "theme-ui";
import { deleteExistingToDo, updateExistingToDo } from "../../api/todo";
import { removeToDo, updateToDo } from "../../utilities/redux/slice/toDoSlice";
import { useDispatch } from "react-redux";

export default function Item(props) {
  const ref = useRef();
  const dropDownRef = useRef();
  const dispatch = useDispatch();

  const handleChange = async (event) => {
    let data = {
      ...props,
      isCompleted: event.target.checked,
    };
    let response = await updateExistingToDo(data);
    if (!response.error) {
      dispatch(updateToDo(response.data));
    } else {
      ref.current.checked = !event.target.checked;
    }
  };

  const deleteAction = async () => {
    let data = {
      ...props,
    };
    let response = await deleteExistingToDo(data);
    if (!response.error) {
      dispatch(removeToDo(data));
    }
  };

  return (
    <Flex
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Label
        key={props.id}
        sx={{
          position: "relative",
        }}
      >
        <Checkbox
          ref={ref}
          key={props.id}
          alt={props.id}
          defaultChecked={props.isCompleted}
          onChange={handleChange}
        />
        {props.taskName}
      </Label>
      <div sx={{ position: "relative", display: "inline-block" }}>
        <MenuButton
          size={26}
          sx={{
            ":hover": {
              backgroundColor: "#dedede",
              borderRadius: "50%",
              cursor: "pointer",
            },
          }}
          onClick={() => {
            let current = dropDownRef.current.style.display;
            if (current == "block") {
              dropDownRef.current.style.display = "none";
            } else {
              dropDownRef.current.style.display = "block";
            }
          }}
        />
        <div
          ref={dropDownRef}
          sx={{
            display: "none",
            position: "absolute",
            backgroundColor: "#f1f1f1",
            minWidth: "80px",
            boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
            zIndex: 1,
          }}
        >
          {/* <DropDownActionButton
            func={() => {
              dropDownRef.current.style.display = "none";
            }}
          >
            Edit
          </DropDownActionButton> */}
          <DropDownActionButton
            func={() => {
              dropDownRef.current.style.display = "none";
              deleteAction();
            }}
          >
            Delete
          </DropDownActionButton>
        </div>
      </div>
    </Flex>
  );
}

function DropDownActionButton({ func, children }) {
  return (
    <div
      sx={{
        color: "black",
        px: 2,
        py: 2,
        textDecoration: "none",
        display: "block",
        ":hover": {
          backgroundColor: "#dedede",
          cursor: "pointer",
        },
      }}
      onClick={func}
    >
      {children}
    </div>
  );
}
