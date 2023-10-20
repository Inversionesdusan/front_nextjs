import ModalComponent from "@/presentation/components/common/ModalComponent";
import "../app/globals.css";
import "../fonts/fonts.css";
import { AppProps } from "next/app";
import { Helmet } from "react-helmet";
import useModalStore from "@/domain/store/useModalStore";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { dataModal } = useModalStore();

  const [showModal, setShowModal] = useState<boolean>(true);

  useEffect(() => {
    setShowModal(dataModal.open);
  }, [dataModal.open]);

  return (
    <>
      <Helmet>
        <html lang="es" />
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta httpEquiv="last-modified" content="0" />
        <meta name="robots" content="all | index | follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="author" content="Inversiones Dusan S.A.S" />
        <meta
          name="copyright"
          content="Fabricación de abonos y compuestos inorgánicos nitrogenados"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Helmet>
      <Component {...pageProps} />
      {showModal && <ModalComponent />}
    </>
  );
}
