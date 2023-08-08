import "../app/globals.css";
import "../fonts/fonts.css";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log("Pagina ...", pageProps);
  return <Component {...pageProps} />;
}
