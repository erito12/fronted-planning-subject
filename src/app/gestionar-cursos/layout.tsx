import Dashboard from "@/components/dashboard";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col ">
      <Dashboard />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Layout;
