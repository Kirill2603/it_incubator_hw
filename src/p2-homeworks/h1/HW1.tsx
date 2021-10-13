import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
  avatar:
    "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
  name: "Kitty",
  message:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad iure expedita voluptates!",
  time: "22:00",
};

const alternativeMessageData = {
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjALj6QDBDcZ37pD3z4UnTG5xKpwAozbCjjw&usqp=CAU",
    name: "Batman",
    message: "Hello",
    time: "22:01"
}


function HW1() {
  return (
    <div>
        <hr/>
      homeworks 1{/*should work (должно работать)*/}
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      {/*для личного творчества, могу проверить*/}

      <AlternativeMessage
          avatar={alternativeMessageData.avatar}
          name={alternativeMessageData.name}
          message={alternativeMessageData.message}
          time={alternativeMessageData.time}
      />
        <hr/>
        <hr/>
    </div>
  );
}

export default HW1;
