"use client";

import LandingIndex from "@/presentation/landing/LandingIndex";
import theme from "@/presentation/styles/theme";
import { ThemeProvider } from "@emotion/react";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <LandingIndex />
    </ThemeProvider>
  );
}
