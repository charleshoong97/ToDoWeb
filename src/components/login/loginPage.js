/** @jsxImportSource theme-ui */

import { useForm } from "react-hook-form";
import { Button, Flex, Heading } from "theme-ui";
import { CustomField } from "../form/field";
import { useState } from "react";
import { login } from "../../api/authentication";
import { useDispatch } from "react-redux";
import { register } from "../../utilities/redux/slice/authenticationSlice";

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState();

  const dispatch = useDispatch();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const submitForm = async (data) => {
    setIsSubmitting(true);
    setApiError();
    let response = await login(data);
    if (response.error) {
      setApiError(response.message);
    } else {
      console.log("Login Success");
      dispatch(register(response.data));
    }
    setIsSubmitting(false);
    reset(data);
  };

  return (
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Heading as={"h2"}>Welcome to To Do Web</Heading>
      <form onSubmit={handleSubmit(submitForm)}>
        <CustomField
          label={"Email"}
          type="text"
          name={"email"}
          defaultValue=""
          rules={{
            required: "Email is required",
            minLength: {
              value: 4,
              message: "Email must be minimum 4 character",
            },
            pattern: {
              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Invalid email",
            },
          }}
          control={control}
          disabled={isSubmitting}
        />
        <CustomField
          label={"Password"}
          type="password"
          name={"password"}
          defaultValue=""
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be minimum 6 character",
            },
          }}
          control={control}
          disabled={isSubmitting}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Login"}
        </Button>
        <div sx={{ color: "red", fontSize: "15px", mt: 2 }}>{apiError}</div>
      </form>
    </Flex>
  );
}
