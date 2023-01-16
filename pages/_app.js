import { useState } from "react";

import MyContext from "../context/MyContext"

function MyApp({ Component, pageProps }) {
  const [change, setChange] = useState(false);
  const [item, setItem] = useState();

  return (
    <MyContext.Provider value={{change, setChange, item, setItem}}>
      <Component {...pageProps} />
    </MyContext.Provider>
    )
}

export default MyApp
