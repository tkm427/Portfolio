"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MoonIcon,
  SunIcon,
  ChipIcon,
  CodeIcon,
  GlobeIcon,
  CubeIcon,
} from "@heroicons/react/outline";

interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FuturisticPortfolioProps {
  name: string;
}

const FuturisticPortfolio: React.FC<FuturisticPortfolioProps> = ({ name }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const projects: Project[] = [
    {
      id: 1,
      title: "AI Assistant",
      description: "An AI-powered virtual assistant leveraging NLP.",
      icon: <ChipIcon className="w-8 h-8 text-blue-500" />,
    },
    {
      id: 2,
      title: "Blockchain Explorer",
      description: "A real-time blockchain explorer with analytics.",
      icon: <CodeIcon className="w-8 h-8 text-green-500" />,
    },
    {
      id: 3,
      title: "VR Workspace",
      description: "A virtual reality workspace for remote collaboration.",
      icon: <GlobeIcon className="w-8 h-8 text-purple-500" />,
    },
    {
      id: 4,
      title: "Quantum Algorithm Simulator",
      description: "A simulator for quantum computing algorithms.",
      icon: <CubeIcon className="w-8 h-8 text-red-500" />,
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
      } transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto p-8">
        <nav className="mb-12 flex justify-between items-center">
          <h1
            className={`text-2xl font-semibold ${
              darkMode ? "text-gray-100" : "text-gray-700"
            }`}
          >
            Floor Main
          </h1>
          <div className="flex items-center space-x-6">
            <ul className="flex space-x-6">
              {["Home", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`${
                      darkMode
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-500"
                    } transition-colors`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-800 text-yellow-400"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {darkMode ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-4xl font-bold mb-8 ${
                darkMode ? "text-gray-100" : "text-gray-700"
              }`}
            >
              Welcome to My Portfolio
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } p-8 rounded-xl shadow-lg mb-8`}
            >
              <h3
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-gray-100" : "text-gray-700"
                }`}
              >
                About Me
              </h3>
              <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                I'm a passionate developer creating futuristic web experiences,
                blending cutting-edge technology with innovative design.
              </p>
            </motion.div>

            <div>
              <h3
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-gray-100" : "text-gray-700"
                }`}
              >
                Featured Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ scale: 1.03 }}
                    className={`${
                      darkMode ? "bg-gray-800" : "bg-white"
                    } p-6 rounded-xl shadow-lg`}
                  >
                    <div className="flex items-center mb-3">
                      {project.icon}
                      <h4
                        className={`text-lg font-semibold ml-3 ${
                          darkMode ? "text-gray-100" : "text-gray-700"
                        }`}
                      >
                        {project.title}
                      </h4>
                    </div>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                      {project.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } p-6 rounded-xl shadow-lg mb-6`}
            >
              <h3
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-gray-100" : "text-gray-700"
                }`}
              >
                Skills
              </h3>
              {/* ここにスキルのリストや進捗バーを追加 */}
            </div>
            <div
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } p-6 rounded-xl shadow-lg`}
            >
              <h3
                className={`text-xl font-semibold mb-4 ${
                  darkMode ? "text-gray-100" : "text-gray-700"
                }`}
              >
                Contact
              </h3>
              {/* ここに連絡先情報やフォームを追加 */}
            </div>
          </div>
        </div>

        <footer
          className={`text-center mt-12 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p>
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default FuturisticPortfolio;
