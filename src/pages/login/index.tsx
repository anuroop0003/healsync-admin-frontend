import AuthCard from "./components/auth-card";
import BrandingPanel from "./components/branding-panel";

const Login = () => {
  return (
    <div className="bg-muted flex min-h-svh items-center justify-center p-6 md:p-10">
      <div className="flex gap-6">
        <BrandingPanel />
        <AuthCard />
      </div>
    </div>
  );
};

export default Login;
