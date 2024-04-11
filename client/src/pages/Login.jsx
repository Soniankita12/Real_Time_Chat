import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../component/styled/StyledComponent";
import { userNameValidator } from "../utils/validators";

const Login = () => {
  const [isLogin, setisLogin] = useState(true);
  const name = useInputValidation("");
  const userName = useInputValidation("", userNameValidator);
  const password = useStrongPassword();
  const bio = useInputValidation("");
  const avatar = useFileHandler("single");

  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Paper
        elevation={8}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        {isLogin ? (
          <>
            <Typography varient="h5">Login</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }}>
              <TextField
                required
                fullWidth
                varient="outlined"
                label="Username"
                margin="normal"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                type="password"
                varient="outlined"
                label="Password"
                margin="normal"
                value={password.value}
                onChange={password.changeHandler}
              />
              <Button
                sx={{ marginTop: "1rem" }}
                type="submit"
                color="primary"
                fullWidth
                variant="contained">
                Login
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>
              <Button
                onClick={() => {
                  setisLogin(false);
                }}
                fullWidth
                sx={{ marginTop: "1rem" }}
                varient="text"
                color="secondary">
                Sign Up
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography varient="h5">Sign Up</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }}>
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{ width: "10rem", height: "10rem", objectFit: "contain" }} src={avatar.preview}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    ":hover": { bgcolor: "rgba(0,0,0,0.7" },
                  }}
                  component="label">
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                varient="outlined"
                label="Name"
                margin="normal"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                varient="outlined"
                label="Username"
                margin="normal"
                value={userName.value}
                onChange={userName.changeHandler}
              />
              {userName.error && (
                <Typography color="error" varient="caption">
                  {userName.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                type="password"
                varient="outlined"
                label="Password"
                margin="normal"
                value={password.value}
                onChange={password.changeHandler}
              />
              {password.error && (
                <Typography color="error" varient="caption">
                  {password.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                varient="outlined"
                label="Bio"
                margin="normal"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <Button
                sx={{ marginTop: "1rem" }}
                type="submit"
                color="primary"
                fullWidth
                variant="contained">
                Register
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                Or
              </Typography>
              <Button
                onClick={() => {
                  setisLogin(true);
                }}
                fullWidth
                sx={{ marginTop: "1rem" }}
                varient="text"
                color="secondary">
                Login
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
