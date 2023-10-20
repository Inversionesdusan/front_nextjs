import queryClient from "@/domain/configuations/reactQueryConfig";
import LandingIndex from "@/presentation/landing/LandingIndex";
import theme from "@/presentation/styles/theme";
import { ThemeProvider } from "@emotion/react";
import { QueryClientProvider } from "react-query";

const Index = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <LandingIndex />
      </ThemeProvider>
    </QueryClientProvider>
  </>
);

export default Index;
