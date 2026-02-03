import logo from "../../../assets/screen-horizontal.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";



/* Footer nabLinks */
const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "Hearing Aid", url: "profile" },
  { id: 3, name: "Special Therapy", url: "work-process" },
  { id: 4, name: "Therapy Material", url: "portfolio" },
  { id: 5, name: "Blog", url: "blog" },
  { id: 6, name: "Services", url: "services" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <a href="#" className="flex items-center border-0">
          <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" />
          {/* <p className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold">
            Clinic
          </p> */}
        </a>
        <div className="mx-7 max-md:my-7 text-center">
      
          {navItems.map((item) => (
            <a
              key={item.id}
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]"
              href={`#${item.url.toLowerCase()}`}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
        <p className="text-[12px] sm:text-[16px]">
          Copyright &copy; {copyrightYear} KHASC. All rights reserved. 
        </p>
      </div>
      <p className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10">
        {/* <FontAwesomeIcon icon={faMapMarker} className="me-2" />{" "} */}
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="inline-block w-5 h-5 me-2 text-white"
>
  <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z" />
  <circle cx="12" cy="10" r="3" />
</svg>
        <a
          href="https://www.google.com/maps/place/Kathmandu+Hearing+and+Speech+Clinic/@27.7298999,85.3252215,798m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39eb19004aac5a89:0xea939e5a37cb74df!8m2!3d27.7298999!4d85.3252215!16s%2Fg%2F11yw5fg00k!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
          className="underline font-bold"
          target="_blank"
        >
          Map Location
        </a>
      </p>
    </div>
  );
};

export default Footer;
