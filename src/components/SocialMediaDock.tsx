import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Dock, DockIcon } from "@/components/ui/dock";

import {
  FaPhone,
  FaXTwitter,
  FaFacebookF,
  FaSquareInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const SocialMediaDock = () => {
  const { toast } = useToast();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      // Force update by changing state or any other method
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Dock
      iconSize={
        windowWidth >= 1280
          ? 40
          : windowWidth >= 1024
            ? 40
            : windowWidth >= 768
              ? 30
              : 35
      }
      iconDistance={
        windowWidth >= 1280
          ? 40
          : windowWidth >= 1024
            ? 25
            : windowWidth >= 768
              ? 0
              : 0
      }
      className="m-0 lg:mx-auto lg:mt-0"
    >
      <DockIcon className="bg-red-600 dark:bg-red-500">
        <button
          className="size-full"
          onClick={() => {
            navigator.clipboard.writeText("paramrpatil@gmail.com");
            toast({
              title: "Email address copied to clipboard",
              description: "paramrpatil@gmail.com",
            });
          }}
        >
          <SiGmail className="m-auto" />
        </button>
      </DockIcon>
      <DockIcon className="bg-black/10 dark:bg-white/10">
        <button
          className="size-full"
          onClick={() => {
            navigator.clipboard.writeText("+1 8127785261");
            toast({
              title: "Phone number copied to clipboard",
              description: "+1 (812) 778 5261",
            });
          }}
        >
          <FaPhone className="m-auto" />
        </button>
      </DockIcon>
      <DockIcon className="bg-blue-700 dark:bg-blue-600">
        <a
          href="https://linkedin.com/in/parampatil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-full items-center justify-center"
        >
          <FaLinkedin className="m-auto" />
        </a>
      </DockIcon>
      <DockIcon className="bg-black/10 dark:bg-white/10">
        <a
          href="https://github.com/parampatil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-full items-center justify-center"
        >
          <FaGithub className="m-auto" />
        </a>
      </DockIcon>
      <DockIcon className="bg-purple-500 dark:bg-purple-400">
        <a
          href="https://instagram.com/paramrpatil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-full items-center justify-center"
        >
          <FaSquareInstagram className="m-auto" />
        </a>
      </DockIcon>
      <DockIcon className="bg-blue-900 dark:bg-blue-800">
        <a
          href="https://facebook.com/paramrpatil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-full items-center justify-center"
        >
          <FaFacebookF className="m-auto" />
        </a>
      </DockIcon>
      <DockIcon className="bg-blue-500 dark:bg-blue-400">
        <a
          href="https://twitter.com/paramrpatil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-full items-center justify-center"
        >
          <FaXTwitter className="m-auto" />
        </a>
      </DockIcon>
      <DockIcon className="bg-red-700 dark:bg-red-600">
        <a
          href="https://youtube.com/c/PARAM"
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-full items-center justify-center"
        >
          <FaYoutube className="m-auto" />
        </a>
      </DockIcon>
    </Dock>
  );
};

export default SocialMediaDock;
