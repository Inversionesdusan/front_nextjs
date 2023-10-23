import PageLayout from "@/presentation/layouts/PageLayout";
import ResetPasswordView from "@/presentation/resetPassword/ResetPasswordView";
import { useRouter } from "next/router";

const Reset = () => {
  const router = useRouter();

  return (
    <PageLayout title="Creación nueva contraseña">
      <ResetPasswordView code={router.query["code"] as string} />
    </PageLayout>
  );
};

export default Reset;
