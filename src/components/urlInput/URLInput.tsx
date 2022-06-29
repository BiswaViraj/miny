import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, RHFDatePicker, RHFTextField } from "../hookForm";
import {
  Alert,
  Button,
  Icon,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import LoadingButton from "../LoadingButton";
import { APP_BASE_URL, BASE_ENPOINTS } from "../../utils/constant";
import { privateAxiosInstance, publicAxiosInstance } from "../../utils/axios";
import CopyClipboard from "../CopyClipboard";
import useLocalStorage from "../../hooks/useLocalStorage";
import { URLType } from "../../types/url.type";
import useURLDrawer from "../../hooks/useURLDrawer";
import useAuth from "../../hooks/useAuth";

type FormValuesProps = {
  originalURL: string;
  customURL?: string;
  timeout?: Date | string;
};

const URLSchema = yup.object().shape({
  originalURL: yup
    .string()
    .url("Enter valid URL")
    .required("Please enter the URL"),
  customURL: yup
    .string()
    .test("maxLength", "Max 16 characters allowed", (val) => {
      if (!val) return true;
      return val?.length <= 16;
    })
    .test("minLength", "Minimum 3 characters allowed", (val) => {
      if (!val) return true;
      return val?.length >= 3;
    }),
});

const defaultValues = {
  originalURL: "",
  customURL: "",
  timeout: "",
};

type ShortURLState = {
  show: boolean;
  value: string | null;
};

const URLInput = () => {
  const [shortURL, setShortURL] = React.useState<ShortURLState>({
    show: false,
    value: null,
  });

  const [urls, setUrls] = useLocalStorage<URLType[]>("local-urls", []);
  const { setOpen } = useURLDrawer();

  const { isAuthenticated } = useAuth();

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(URLSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = methods;

  const onSubmit = async (values: FormValuesProps) => {
    try {
      const url = isAuthenticated
        ? `${BASE_ENPOINTS.url}/create/private`
        : `${BASE_ENPOINTS.url}/create`;
      const { originalURL, customURL, timeout } = values;
      const payload = {
        originalURL,
        customURL,
        timeout,
      };

      const axiosInstance = isAuthenticated
        ? privateAxiosInstance
        : publicAxiosInstance;

      const { data } = await axiosInstance.post(url, {
        ...payload,
      });
      if (data.shortURL) {
        const url = `${APP_BASE_URL}${data.shortURL}`;
        setShortURL({
          show: true,
          value: url,
        });

        const tempLocalURLs = [...urls];
        const newURL: URLType = {
          originalURL,
          timeout,
          shortURL: url,
        };
        tempLocalURLs.push(newURL);
        setUrls(tempLocalURLs);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleShortenAnotherBtn = () => {
    setShortURL({
      show: false,
      value: null,
    });
    reset();
  };

  const handleMyUrlBtn = () => {
    setOpen(true);
  };
  return (
    <Box>
      {shortURL.show && shortURL.value ? (
        <Stack spacing={3}>
          <Alert severity="success" variant="outlined">
            URL Minyfied!
          </Alert>
          <Stack spacing={1}>
            <Typography>Original URL:</Typography>
            <TextField value={getValues("originalURL")} disabled fullWidth />
          </Stack>
          <Stack spacing={1}>
            <Typography>Miny URL:</Typography>
            <CopyClipboard value={shortURL.value} />
          </Stack>
          <Stack
            spacing={2}
            direction={{
              xs: "column",
              md: "row",
            }}
          >
            <Button variant="outlined" onClick={handleMyUrlBtn}>
              My URLs
            </Button>
            <Button variant="contained" onClick={handleShortenAnotherBtn}>
              Shorten Another
            </Button>
          </Stack>
        </Stack>
      ) : (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <Stack spacing={2}>
              <Typography variant="subtitle1">Enter URL:</Typography>
              <RHFTextField
                name="originalURL"
                label="Enter a long URL to shorten"
              />
            </Stack>
            <Stack spacing={2}>
              <Stack spacing={1} direction="row">
                <Icon component={AutoFixHighIcon} />
                <Typography variant="subtitle1">Customisation:</Typography>
              </Stack>
              <Stack spacing={2}>
                <RHFTextField
                  name="customURL"
                  label="Alias (optional)"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">miny.in/</InputAdornment>
                    ),
                  }}
                />
                <Stack>
                  <RHFDatePicker name="timeout" label="Expiry  (optional)" />
                </Stack>
              </Stack>
            </Stack>
            <LoadingButton loading={isSubmitting} text="Submit" type="submit" />
          </Stack>
        </FormProvider>
      )}
    </Box>
  );
};

export default URLInput;
