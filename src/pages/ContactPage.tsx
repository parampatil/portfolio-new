import PageTransition from "@/components/PageTransitions/PageTransition";
import ContactSection from "@/components/ContactPageComponents/ContactSection";

const ContactPage = () => {
  return (
    <PageTransition className="flex flex-col items-center justify-center bg-white dark:bg-zinc-900 w-full scroll-smooth">
      <ContactSection />
    </PageTransition>
  )
}

export default ContactPage