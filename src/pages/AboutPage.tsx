import PageTransition from "@/components/PageTransitions/PageTransition";

const AboutPage = () => {
  return (
    <PageTransition className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold">About Me</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is the about page where you can learn more about me.
      </p>
    </PageTransition>
  );
};

export default AboutPage;
