import Title from "../shared/Title";
import Header from "./Header";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
import { sampleChats } from "../../constants/SampleData";

const AppLayout = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Title title="Chat - App" />
        <Header />
        <Grid container height={"calc(100vh-4rem"}>
          <Grid
            item
            sm={4}
            md={3}
            sx={{ display: { xs: "none", sm: "block" } }}
            height={"100%"}>
            <ChatList chats={sampleChats}/>
          </Grid>
          <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedComponent {...props} />
          </Grid>
          <Grid
            item
            xs={4}
            md={4}
            lg={3}
            height={"100%"}
            sx={{
              display: { xs: "none", md: "block" },
              padding: "2rem",
              bgcolor: "rgba()",
            }}>
            3rd
          </Grid>
        </Grid>
      </>
    );
  };
};

export default AppLayout;
