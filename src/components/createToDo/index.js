/** @jsxImportSource theme-ui */

import { Button, Flex, Heading } from "theme-ui";
import {
  CustomField,
  CustomFieldAllowSpace,
  CustomSelectField,
} from "../form/field";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { addToDo } from "../../utilities/redux/slice/toDoSlice";
import { createToDo } from "../../api/todo";

export default function CreateToDo() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState();

  const auth = useSelector((state) => state.authentication);
  const category = useSelector((state) => state.todo.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      label: "",
      category: "",
    },
  });

  const submitForm = async (data) => {
    setIsSubmitting(true);
    setApiError();
    let response = await createToDo({ ...data, userId: auth.user.id });
    if (response.error) {
      setApiError(response.message);
    } else {
      dispatch(addToDo(response.data));
      navigate(-1);
    }
    setIsSubmitting(false);
    reset(data);
  };

  return (
    <Flex
      sx={{
        pt: 50,
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage: "url('/assets/svg/create-background.svg')",
        backgroundSize: "cover",
      }}
    >
      <Heading as={"h2"} sx={{ fontSize: [30, 50], mb: 3 }}>
        Create a new To Do item
      </Heading>
      <form
        onSubmit={handleSubmit(submitForm)}
        sx={{
          width: ["250px", "300px"],
        }}
      >
        <CustomFieldAllowSpace
          label={"Label"}
          type="text"
          name={"label"}
          rules={{
            required: "Label is required",
            minLength: {
              value: 3,
              message: "Too short to understand",
            },
          }}
          control={control}
          disabled={isSubmitting}
        />
        <CustomSelectField
          label={"Category"}
          name={"category"}
          rules={{
            required: "Category is required",
          }}
          control={control}
          disabled={isSubmitting}
          options={category}
        />
        <Button
          sx={{ width: "100%", mt: 2 }}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Create"}
        </Button>
        <div
          sx={{
            color: "red",
            fontSize: "15px",
            mt: 2,
            minHeight: 50,
            textOverflow: "clip",
          }}
        >
          {apiError}
        </div>
        <Button
          sx={{ width: "100%", mt: 2, backgroundColor: "#bdbdbd" }}
          type="button"
          disabled={isSubmitting}
          onClick={() => navigate(-1)}
        >
          {"Cancel"}
        </Button>
      </form>
    </Flex>
  );
}
