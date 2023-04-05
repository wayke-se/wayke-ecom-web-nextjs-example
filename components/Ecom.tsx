import React, { useEffect, useRef } from "react";
import WaykeEcomWeb from "@wayke-se/ecom-web";

const Ecom = () => {
  const contextRef = useRef<WaykeEcomWeb | undefined>();

  useEffect(() => {
    contextRef.current = new WaykeEcomWeb({
      id: "4a18e9a4-f7ee-458e-8bb4-9b6b8b778bbf",
      ecomSdkConfig: {
        api: {
          address: "https://ecom.wayketech.se",
        },
      },
    });
  }, []);

  return (
    <button onClick={() => contextRef.current?.start()}>
      Start Wayke Ecom
    </button>
  );
};

export default Ecom;
