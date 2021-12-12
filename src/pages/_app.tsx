import GlobalStyle from "@styles/globals";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
