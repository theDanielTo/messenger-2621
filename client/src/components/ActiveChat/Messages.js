import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble, Attachments } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  console.log("messages:", messages)

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        if (message.attachments) {
          return message.senderId === userId ? (
            <Box key={message.id}>
              <Attachments key={message.id} attachments={message.attachments} isOther={false} />
              <SenderBubble text={message.text} time={time} />
            </Box>
          ) : (
            <Box key={message.id}>
              <Attachments key={message.id} attachments={message.attachments} isOther={true} />
              <OtherUserBubble text={message.text} time={time} otherUser={otherUser} />
            </Box>
          );
        }

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} />
        ) : (
          <OtherUserBubble key={message.id} text={message.text} time={time} otherUser={otherUser} />
        );
      })}
    </Box>
  );
};

export default Messages;
