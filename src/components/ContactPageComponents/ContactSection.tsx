import { motion } from "motion/react";
import SocialMediaDock from "../SocialMediaDock";

// Floating blob background graphic
const FloatingBlob = ({
  className,
  color,
}: {
  className?: string;
  color: string;
}) => (
  <motion.div
    className={`pointer-events-none absolute opacity-30 blur-3xl ${className}`}
    initial={{ scale: 1, rotate: 0 }}
    animate={{
      scale: [1, 1.15, 1],
      rotate: [0, 360, 0],
      borderRadius: ["30%", "50%", "30%"],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    style={{
      background: color,
      width: "18rem",
      height: "18rem",
    }}
  />
);

const ContactSection = () => (
  <section className="relative flex w-full flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100 px-4 md:px-16 py-20 dark:from-gray-950 dark:via-neutral-950 dark:to-gray-900">
    {/* Animated Blobs */}
    <FloatingBlob
      className="left-[-5rem] top-[-5rem]"
      color="rgba(59,130,246,0.5)"
    />
    <FloatingBlob
      className="bottom-[-7rem] right-[-4rem]"
      color="rgba(168,85,247,0.5)"
    />

    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative z-10 flex w-full flex-col gap-6 rounded-2xl bg-white/90 p-8 shadow-2xl backdrop-blur-md dark:bg-neutral-900/90"
    >
      {/* Heading */}
      <div className="text-center">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          Get in Touch
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300">
          Book a meeting, connect on socials, or send a direct message.
        </p>
      </div>

      {/* Social Media Dock */}

      <div className="flex justify-center">
        <SocialMediaDock />
      </div>

      {/* Appointment Scheduler */}
      <div id="appointment" className="scroll-mt-16">

        <div className="mx-auto w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow dark:border-neutral-800">
          {/* The iframe is always on a white background for readability */}
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ06SM_eDHRD-nT8CyT4ArcQz69gu_RffLkSMBQbcy5shcD0U3m32-KsPmf0wULCRHGl_h2RO1QW?gv=true"
            width="100%"
            height="800"
            className="w-full min-w-[320px] border-0 bg-white md:min-w-[600px]"
            title="Book an appointment"
            loading="lazy"
            allow="camera; microphone; fullscreen"
            style={{
              background: "white",
              colorScheme: "light",
            }}
          />
        </div>
      </div>
    </motion.div>
  </section>
);

export default ContactSection;
