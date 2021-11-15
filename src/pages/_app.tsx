import type { AppProps } from "next/app";
import Global from "@styles/globals";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Global />
    </>
  );
}

export default MyApp;
