import { TextField, TextFieldProps } from "@mui/material";
import { DateTimePicker, DateTimePickerProps } from "@mui/x-date-pickers";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type IProps = {
  name: string;
  label: string;
};

type Props = IProps & TextFieldProps;
const RHFDatePicker = ({ name, label, ...other }: Props) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <DateTimePicker
          {...field}
          label={label}
          inputFormat="dd/MM/yyyy hh:mm a"
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              error={!!error}
              helperText={error?.message}
              {...other}
            />
          )}
        />
      )}
    />
  );
};

export default RHFDatePicker;
