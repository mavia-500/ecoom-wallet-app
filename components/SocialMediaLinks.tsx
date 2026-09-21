import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const SocialMediaLinks = () => {
  const links = [
    {
      href: "https://www.facebook.com/profile.php?id=61573823107878",
      icon: FaFacebook,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/hilyah965?igsh=NnpjcXAxN29ldHVi",
      icon: FaInstagram,
      label: "Instagram",
    },
    {
      href: "https://www.tiktok.com/@hilyah965",
      icon: FaTiktok,
      label: "TikTok",
    },
    {
      href: "https://wa.me/923285478737?text=Hello%2C%20I%20am%20interested%20in%20Hilyah%20wallets",
      icon: IoLogoWhatsapp,
      label: "WhatsApp",
    },
  ];

  return (
    <div className="flex items-center gap-5">
      {links.map(({ href, icon: Icon, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-2xl text-[#e5e1dc] transition hover:text-[#faf9f7]"
        >
          <Icon />
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
