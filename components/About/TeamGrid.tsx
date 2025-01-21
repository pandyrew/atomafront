"use client";
import { TeamMemberCard } from "./TeamMemberCard";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Marc Pacheco",
    role: "CEO",
    image: "/headshots/marc.jpeg",
    description:
      "Visionary leader with extensive experience in AI and financial technology, driving innovation in market analysis.",
  },
  {
    name: "Timofey Obraztsov",
    role: "Founding Engineer",
    image: "/headshots/tim.jpeg",
    description:
      "Technical architect behind Atoma's core systems, specializing in AI/ML systems and scalable infrastructure.",
  },
];

const teamMembers = [
  {
    name: "Andrew Hwang",
    role: "Software Engineer",
    image: "/headshots/andrew.jpeg",
    description:
      "Full-stack developer focused on creating seamless user experiences and robust frontend architectures.",
  },
  {
    name: "Keyon Jazayeri",
    role: "Software Engineer",
    image: "/headshots/keyon.jpeg",
    description:
      "Specialized in building performant applications and optimizing system architecture.",
  },
  {
    name: "Issac Nguyen",
    role: "Software Engineer",
    image: "/headshots/issac.jpeg",
    description:
      "Expert in developing scalable solutions and implementing complex algorithms.",
  },
  {
    name: "Daphne Shaw",
    role: "Lead Data Engineer",
    image: "/headshots/daphne.jpeg",
    description:
      "Leading data infrastructure development and implementing advanced analytics systems.",
  },
  {
    name: "Kanhai Wadekar",
    role: "Backend Engineer",
    image: "/headshots/kanhai.jpeg",
    description:
      "Focused on building robust backend systems and optimizing server-side performance.",
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-6 mb-12">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1 max-w-[200px]"
      />
      <h2 className="text-3xl font-satoshi font-medium text-black text-center whitespace-nowrap">
        {children}
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-1 max-w-[200px]"
      />
    </div>
  );
}

export function TeamGrid() {
  return (
    <div className="space-y-24 pb-24 mb-24">
      {/* Founders Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>Founders</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((member, index) => (
            <TeamMemberCard key={member.name} {...member} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <SectionTitle>Technical Team</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              {...member}
              index={index + founders.length}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
