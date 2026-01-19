import { TextField } from "@mui/material";

function DynamicInput({
  name,
  label,
  type = "text",
  register,
  error,
}) {
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      {...register(name)}
      error={!!error}
      helperText={error?.message}
    />
  );
}

export default DynamicInput;
