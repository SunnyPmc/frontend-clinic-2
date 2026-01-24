// import { Outlet } from "react-router-dom";
// import NavBar from "../components/common/navbar/NavBar";
// import Footer from "../components/common/footer/Footer";
// import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

// const Main = () => {
//   return (
//     <div data-theme={"light"} className="relative">
//       <NavBar />
//       <Outlet />
//       <div className="bg-[#2A374A]">
//         <Footer />
//       </div>
//       <ScrollToTop />
//     </div>
//   );
// };

// export default Main;



import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import NavBar from "../components/common/navbar/NavBar";
import Footer from "../components/common/footer/Footer";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => {
   useEffect(() => {
    if (!window.google) return;

    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: async (response) => {
        await fetch("http://localhost:5000/api/auth/google/onetap", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            credential: response.credential,
          }),
        });
      },
      auto_select: false,
      cancel_on_tap_outside: false,
    });

    window.google.accounts.id.prompt(); // 🔥 THIS triggers the popup
  }, []);
  return (
    <div data-theme={"light"} className="relative">
      <NavBar />
      <Outlet />
      <div className="bg-[#2A374A]">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Main;
