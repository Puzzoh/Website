import React, { useRef, useEffect } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const RouterChat = () => {
  const tawkMessengerRef = useRef<any>();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  const onLoad = () => {
    console.log("onLoad works!");
  };

  return (
    <div>
      <button onClick={handleMinimize}> Minimize the Chat </button>
      <TawkMessengerReact
        propertyId={process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID}
        widgetId={process.env.NEXT_PUBLIC_TAWK_WIDGET_ID}
        ref={tawkMessengerRef}
        onLoad={onLoad}
      />
    </div>
  );
};

export default RouterChat;
