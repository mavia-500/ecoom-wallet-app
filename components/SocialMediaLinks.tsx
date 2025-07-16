import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTiktok } from "react-icons/fa6";

const SocialMediaLinks = () => {
  return (
    <div className="flex space-x-5 m-10">
      <Link href={"https://www.facebook.com/profile.php?id=61573823107878"}>
        <FaFacebook />
      </Link>
      <Link href={"https://www.instagram.com/hilyah965?igsh=NnpjcXAxN29ldHVi"}>
        <FaInstagram />
      </Link>
      <Link href={""}>
        <BsFillThreadsFill />
      </Link>
      <Link href={""}>
        <FaYoutube />
      </Link>
      <Link
        href={
          "https://wa.me/923285478737?text=Hello%2C%20I%20am%20interested%20in%20your%20products"
        }
      >
        <IoLogoWhatsapp />
      </Link>
      <Link href={""}>
        <FaTiktok />
      </Link>
    </div>
  );
};

export default SocialMediaLinks;
