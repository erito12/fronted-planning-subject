import Dashboard from "@/components/dashboard";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col ">
      <Dashboard />
      <div className=" h-screen">
        <main className="flex-grow bg-slate-400 h-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
