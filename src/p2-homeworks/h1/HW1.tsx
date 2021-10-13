import React from "react";
import Message from "./Message";

const messageData = {
  avatar:
    "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
  name: "Some Name",
  message:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad iure expedita voluptates! Beatae, porro corrupti. Eius id deserunt illum cum possimus unde molestias delectus quibusdam. Alias explicabo sint quia?",
  time: "22:00",
};

function HW1() {
  return (
    <div>
      homeworks 1{/*should work (должно работать)*/}
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeMessage/>*/}
    </div>
  );
}

export default HW1;
