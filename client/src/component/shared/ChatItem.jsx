import { Box, Stack, Typography } from "@mui/material";
import { Link } from "../styled/StyledComponent";
import { memo } from "react";

const ChatItems = ({
  avatar = [],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChatOpen,
}) => {
  return (
    <Link
      to={`/chat/${_id}`}
      onContextMenu={(e) => handleDeleteChatOpen(e, _id, groupChat)}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          padding: "1rem",
          backgroundColor: sameSender ? "black" : "unset",
          color: sameSender ? "black" : "unset",
          position: "relative",
        }}>
        {/* {avatar card} */}
        <Stack>
          <Typography>{name}</Typography>
          {newMessageAlert && (
            <Typography>{newMessageAlert.count} New Message</Typography>
          )}
        </Stack>
        {isOnline && <Box width="1opx" height="10px" />}
      </div>
    </Link>
  );
};

export default memo(ChatItems);
