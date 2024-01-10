import Navbar from "../Navbar";

function Layout({ children }) {
  return (
    <div className="flex h-[100vh]">
      <div className="w-[280px] h-[100vh]">
        <Navbar />
      </div>
      <div style={{ overflow: "scroll" }}>{children}</div>
    </div>
  );
}

export default Layout;
