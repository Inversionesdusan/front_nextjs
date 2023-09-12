import PageLayout from "@/presentation/layouts/PageLayout";
import ProfileView from "@/presentation/profile/ProfileView";

const index = () => {
  return (
    <PageLayout title="Mis Datos">
      <ProfileView />
    </PageLayout>
  );
};

export default index;
