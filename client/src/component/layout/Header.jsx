import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { orange } from "../../constants/color";
import {
  Group as GroupIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { LoaderLayout } from "./Loaders";
const Search = lazy(() => import("../specific/Search"));
const Notifications = lazy(() => import("../specific/Notifications"));
const NewGroups = lazy(() => import("../specific/NewGroups"));

const Header = () => {
  const navigate = useNavigate();
  const [ismobile, setismobile] = useState(false);
  const [isSearch, setisSearch] = useState(false);
  const [isNewGroup, setisNewGroup] = useState(false);
  const [isNotification, setisNotification] = useState(false);

  const handleMobile = () => {
    setismobile((prev) => !prev);
  };

  const openSearch = () => {
    setisSearch((prev) => !prev);
  };

  const openNewGroup = () => {
    setisNewGroup((prev) => !prev);
  };

  const openNotification = () => {
    setisNotification((prev) => !prev);
  };

  const manageGroup = () => navigate("/groups");

  const logoutHandler = () => {};

  return (
    <>
      <Box sx={{ flexFlow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}>
              ChatterBox
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1 }} />
            <Box>
              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onClick={openSearch}
              />
              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onClick={openNewGroup}
              />

              <IconBtn
                title={"Manage Groups"}
                icon={<GroupIcon />}
                onClick={manageGroup}
              />
              <IconBtn
                title={"Notifications"}
                icon={<NotificationsIcon />}
                onClick={openNotification}
              />
              <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <Search />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <Notifications />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroups />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton size="large" color="inherit" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
export default Header;
