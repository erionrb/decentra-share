import { useState, useEffect } from "react";

import Menu from "./components/Menu";

export default function Home() {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    setNfts([
      {
        title: "Trunks 'Fingers'",
        text: "Dragon Ball Z - Dragon Ball Super - Trunks 'Fingers'",
        creator: "0xfe8BBCa16B158Ac5fEf3C12Ffc401788531C1362",
      },
      {
        title: "Saiyan Man",
        text: "Dragon Ball Z - Great Saiyan Man",
        creator: "0xfe8BBCa16B158Ac5fEf3C12Ffc401788531C1362",
      },
    ]);
  }, []);

  return <div>Index</div>;
}
