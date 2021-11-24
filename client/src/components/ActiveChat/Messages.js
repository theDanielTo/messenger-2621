import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from "../ActiveChat";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;
  const [sortedMessages, setSortedMessages] = useState([]);

  useEffect(() => {
    setSortedMessages(() => {
      return messages.sort((a, b) => {
        return (a.id < b.id) ? -1 : 1;
      });
    });
  }, []);


  return (
    <Box>
      {sortedMessages.map((message) => {
          const time = moment(message.createdAt).format("h:mm");

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
