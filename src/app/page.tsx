"use client";
import queryClient from "@/domain/configuations/reactQueryConfig";
import LandingIndex from "@/presentation/landing/LandingIndex";
import theme from "@/presentation/styles/theme";
import { ThemeProvider } from "@emotion/react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../fonts/fonts.css";

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <LandingIndex />
      </ThemeProvider>
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
      )}
    </QueryClientProvider>
  );
}
