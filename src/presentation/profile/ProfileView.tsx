import Container from "@/DI/Container";
import { ProfileViewModel } from "./ProfileViewModel";
import { styles } from "./ProfileViewStyles";
import { Box } from "@mui/material";

const ProfileView = () => {
  const profileVM = Container.resolve("ProfileViewModel") as ProfileViewModel;
  const { container } = styles();
  return <Box sx={container}></Box>;
};

export default ProfileView;
