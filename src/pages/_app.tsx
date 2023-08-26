import ModalComponent from "@/presentation/components/common/ModalComponent";
import "../app/globals.css";
import "../fonts/fonts.css";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ModalComponent />
    </>
  );
}
