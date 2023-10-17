/** @jsxImportSource theme-ui */

import { useForm } from "react-hook-form";
import { Button, Flex, Heading } from "theme-ui";
import { CustomField } from "../form/field";
import { useState } from "react";
import { login } from "../../api/authentication";
import { useDispatch } from "react-redux";
import { register } from "../../utilities/redux/slice/authenticationSlice";
import { useNavigate } from "react-router-dom";
import { setLocalStorage } from "../../utilities/localStorage/localStorage";

export default function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      email: process.env.REACT_APP_EMAIL ?? "",
      password: process.env.REACT_APP_PASSWORD ?? "",
    },
  });

  const submitForm = async (data) => {
    setIsSubmitting(true);
    setApiError();
    let response = await login(data);
    if (response.error) {
      setApiError(response.message);
    } else {
      dispatch(register(response.data));
      setLocalStorage({ authentication: response.data });
      navigate("/dashboard");
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
        backgroundImage: "url('/assets/svg/background.svg')",
        backgroundSize: "cover",
      }}
    >
      <Heading as={"h2"} sx={{ fontSize: [30, 50], mb: 3 }}>
        Welcome
      </Heading>
      <form
        onSubmit={handleSubmit(submitForm)}
        sx={{
          width: ["250px", "300px"],
        }}
      >
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
        <Button
          sx={{ width: "100%", mt: 2 }}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Login"}
        </Button>
        <div sx={{ color: "red", fontSize: "15px", mt: 2, minHeight: 23 }}>
          {apiError}
        </div>
      </form>
    </Flex>
  );
}
