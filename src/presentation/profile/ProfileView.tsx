import Container from "@/DI/Container";

import { styles } from "./ProfileViewStyles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CircularProgress,
  Grow,
  Typography,
} from "@mui/material";
import { IProfileViewModel } from "./ProfileViewModel";
import { useEffect } from "react";
import ClientDataFormView from "./components/clientDataForm/ClientDataFormView";
import AddressFormView from "./components/addressForm/AddressFormView";
import ChangePasswordFormView from "./components/passwordForm/ChangePasswordFormView";
import { constantes } from "@/domain/constants";

const ProfileView = () => {
  const profileVM = Container.resolve("ProfileViewModel") as IProfileViewModel;
  const {
    container,
    accordion,
    accordionSummary,
    details,
    boxNoData,
    progress,
    textEmptyState,
    summaryLabel,
  } = styles();

  useEffect(() => {
    (async () => {
      if (profileVM?.authData?.dataLoaded) {
        await profileVM.getUserData();
      }
    })();
  }, [profileVM?.authData?.dataLoaded]);

  return (
    <Box sx={container}>
      {profileVM.loadingData && !profileVM.dataLoaded ? (
        <Grow in style={{ transformOrigin: "0" }} timeout={500}>
          <Box sx={boxNoData}>
            <CircularProgress sx={progress} />
            <Typography sx={textEmptyState}>
              {constantes.profile.loading}
            </Typography>
          </Box>
        </Grow>
      ) : (
        <Box>
          <Accordion sx={accordion} expanded>
            <AccordionSummary sx={accordionSummary}>
              <Typography sx={summaryLabel}>Datos del Cliente</Typography>
            </AccordionSummary>
            <AccordionDetails sx={details}>
              {profileVM.formClientData && profileVM.userData && (
                <ClientDataFormView
                  formClientData={profileVM.formClientData}
                  onClick={profileVM.verifyClientDataForm}
                  savingData={profileVM.savingData}
                  handleChange={profileVM.handleSelectChange}
                  direccionEnvio={profileVM.direccionEnvio}
                />
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion sx={accordion} expanded>
            <AccordionSummary sx={accordionSummary}>
              <Typography sx={summaryLabel}>Dirección de envío</Typography>
            </AccordionSummary>
            <AccordionDetails sx={details}>
              {profileVM.formAddressData && profileVM.userData && (
                <AddressFormView
                  formAddressData={profileVM.formAddressData}
                  onClick={profileVM.updateShippingAddress}
                  savingData={
                    profileVM.savingData || profileVM.direccionEnvio === "S"
                  }
                />
              )}
            </AccordionDetails>
          </Accordion>
          <Accordion sx={accordion} expanded>
            <AccordionSummary sx={accordionSummary}>
              <Typography sx={summaryLabel}>Cambio contraseña</Typography>
            </AccordionSummary>
            <AccordionDetails sx={details}>
              {profileVM.formAddressData && profileVM.userData && (
                <ChangePasswordFormView
                  formPassword={profileVM.formPassword}
                  onClick={profileVM.updatePassword}
                  savingData={profileVM.savingData}
                />
              )}
            </AccordionDetails>
          </Accordion>
        </Box>
      )}
    </Box>
  );
};

export default ProfileView;
