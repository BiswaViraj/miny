import { useFormContext, Controller } from "react-hook-form";
import TextField, { TextFieldProps } from "@mui/material/TextField";

type IProps = {
  name: string;
};

type Props = IProps & TextFieldProps;

const RHFTextField = ({ name, ...other }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
};

export default RHFTextField;
