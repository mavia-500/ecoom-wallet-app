import Link from 'next/link'
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTiktok } from "react-icons/fa6";

const SocialMediaLinks = () => {
  return (
    <div className='flex space-x-5 m-10'>
        <Link href={''}><FaFacebook /></Link>
        <Link href={''}><FaInstagram /></Link>
        <Link href={''}><BsFillThreadsFill /></Link>
        <Link href={''}><FaYoutube /></Link>
        <Link href={''}><IoLogoWhatsapp /></Link>
        <Link href={''}><FaTiktok /></Link>
    </div>
  )
}

export default SocialMediaLinks