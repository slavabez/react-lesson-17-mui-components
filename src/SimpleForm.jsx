import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";

const SimpleForm = () => {
  const { register, handleSubmit, formState } = useForm();
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { errors } = formState;

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 6000);
    }, 3000);
  };

  return (
    <Paper sx={{ p: 2 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("firstName", {
            required: "First Name is required",
            minLength: {
              value: 2,
              message: "First Name must be at least 2 characters",
            },
          })}
          error={!!errors.firstName}
          helperText={errors.firstName ? errors.firstName.message : ""}
          label="First Name"
          variant="outlined"
          fullWidth
          margin="dense"
          sx={(theme) => ({
            padding: theme.spacing(4),
          })}
        />
        <TextField
          {...register("lastName", {
            required: "Last Name is required",
            minLength: {
              value: 2,
              message: "Last Name must be at least 2 characters",
            },
          })}
          error={!!errors.lastName}
          helperText={errors.lastName ? errors.lastName.message : ""}
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <TextField
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
          label="Email"
          variant="outlined"
          fullWidth
          margin="dense"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
          endIcon={isLoading && <CircularProgress size={20} />}
          sx={{
            backgroundColor: "success.main",
            "&:hover": {
              backgroundColor: "success.dark",
            },
          }}
        >
          Submit
        </Button>
      </form>
      {showAlert && (
        <Snackbar open={showAlert}>
          <Alert severity="success">Form submitted successfully!</Alert>
        </Snackbar>
      )}
    </Paper>
  );
};

export default SimpleForm;
