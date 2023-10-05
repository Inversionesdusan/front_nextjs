import queryClient from "@/domain/configuations/reactQueryConfig";
import ModalComponent from "@/presentation/components/common/ModalComponent";
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
    <ModalComponent />
  </>
);

export default Index;
