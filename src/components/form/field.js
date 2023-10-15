/** @jsxImportSource theme-ui */

import { useController } from "react-hook-form";
import { Input } from "theme-ui";

export function CustomField(props) {
  const { field, fieldState } = useController({
    ...props,
  });

  return (
    <div>
      <div sx={{ textAlign: "left" }}>{props.label}</div>
      <Input
        sx={{
          borderColor: fieldState.error ? "red" : "initial",
          borderWidth: fieldState.error ? "2px" : "0.5px",
          "&:focus-visible": {
            outlineColor: fieldState.error ? "red" : "initial",
          },
        }}
        type={props.type}
        ref={field.ref}
        name={field.name}
        onChange={(e) => field.onChange(e.target.value.trim())}
        onBlur={field.onBlur}
        value={field.value}
        disabled={field.disabled}
      />
      <div
        sx={{
          visibility: fieldState.error ? "visible" : "hidden",
          color: "red",
          height: "20px",
          fontSize: "10px",
          textAlign: "left",
        }}
      >
        {fieldState.error?.message}
      </div>
    </div>
  );
}
