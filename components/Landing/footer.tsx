"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import black_logo from "@/public/images/landing/text_logo_black.svg";

export const Footer = () => {
  // Add scroll animation logic
  const { scrollYProgress } = useScroll();
  const footerOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  return (
    <motion.footer
      style={{ opacity: footerOpacity }}
      className="fixed bottom-0 left-0 w-full bg-white min-h-[40vh] z-0"
    >
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Image
              src={black_logo}
              alt="Atoma Media"
              width={31}
              height={31}
              className="h-[31px] w-auto mb-6"
            />
            <p className="text-sm text-gray-600 font-satoshi">
              Empowering traders with AI-driven insights and automated
              strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-outfit text-sm font-medium mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/dashboard"
                  className="text-sm text-gray-600 hover:text-black transition-colors font-satoshi"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-gray-600 hover:text-black transition-colors font-satoshi"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors font-satoshi"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-outfit text-sm font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors font-satoshi"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors font-satoshi"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors font-satoshi"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-outfit text-sm font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@atoma.ai"
                  className="text-sm text-gray-600 hover:text-black transition-colors font-satoshi"
                >
                  hello@atoma.ai
                </a>
              </li>
              <li className="text-sm text-gray-600 font-satoshi">
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600 font-satoshi">
              © 2024 Atoma Media. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors font-satoshi"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-black transition-colors font-satoshi"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
