"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  image: string;
  index: number;
}

export function TeamMemberCard({
  name,
  role,
  description,
  image,
  index,
}: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-200 p-8 hover:bg-gray-100 transition-all duration-300"
    >
      <div className="relative z-10 space-y-4">
        <motion.div
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          viewport={{ once: true }}
          className="h-32 w-32 rounded-full bg-blue-500/10 mx-auto overflow-hidden"
        >
          <Image
            src={image}
            alt={name}
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </motion.div>
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
            className="font-satoshi text-2xl font-medium text-gray-900"
          >
            {name}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
            viewport={{ once: true }}
            className="text-blue-600 font-outfit"
          >
            {role}
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600 font-outfit text-center"
        >
          {description}
        </motion.p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
