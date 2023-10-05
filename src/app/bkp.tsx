"use client";
import queryClient from "@/domain/configuations/reactQueryConfig";
import theme from "@/presentation/styles/theme";
import { ThemeProvider } from "@emotion/react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../fonts/fonts.css";
import ModalComponent from "@/presentation/components/common/ModalComponent";
import Index from "../pages/index";

export default function Home() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Index />
        </ThemeProvider>
        {process.env.NODE_ENV === "development" && (
          <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
        )}
      </QueryClientProvider>
      <ModalComponent />
    </>
  );
}
