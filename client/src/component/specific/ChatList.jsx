import { Stack } from "@mui/material";
import ChatItem from "../shared/ChatItem";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [{ chatId: "", count: 0 }],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"}>
      {chats?.map((data, index) => {
        const { avatar, name, _id, groupChat, members } = data;
        const newMessagesAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );

        const isOnline = members?.some((member) => onlineUsers.includes(_id));
        return (
          <ChatItem
            index={index}
            newMessageAlert={newMessagesAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            sameSender={chatId === _id}
            handleDeleteChatOpen={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};
export default ChatList;
