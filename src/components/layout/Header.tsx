"use client"
import { ShoppingCart } from "lucide-react";
import logo from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FaSistrix } from "react-icons/fa";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import StickyNav from "../Navbar/StickyNav";

const Header = () => {
 
  return (
    
    <div>
      <Navbar />
      <StickyNav />
      
      
    </div>
  );
};

export default Header;
