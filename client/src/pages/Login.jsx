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
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../component/styled/StyledComponent";

const Login = () => {
  const [isLogin, setisLogin] = useState(true);

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
              />
              <TextField
                required
                fullWidth
                type="password"
                varient="outlined"
                label="Password"
                margin="normal"
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
                  sx={{ width: "10rem", height: "10rem", objectFit: "contain" }}
                />
                <IconButton>
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput type="file" />
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                varient="outlined"
                label="Name"
                margin="normal"
              />
              <TextField
                required
                fullWidth
                varient="outlined"
                label="Username"
                margin="normal"
              />
              <TextField
                required
                fullWidth
                type="password"
                varient="outlined"
                label="Password"
                margin="normal"
              />
              <TextField
                required
                fullWidth
                varient="outlined"
                label="Bio"
                margin="normal"
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
