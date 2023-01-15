import { useState } from "react";

import MyContext from "../context/MyContext"

function MyApp({ Component, pageProps }) {
  const [change, setChange] = useState(false);

  return (
    <MyContext.Provider value={{change, setChange}}>
      <Component {...pageProps} />
    </MyContext.Provider>
    )
}

export default MyApp
