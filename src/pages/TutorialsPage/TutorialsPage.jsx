import useScrollToTop from "./../../hooks/useScrollToTop";

const TutorialsPage = () => {
  useScrollToTop();
  return (
    <div className="text-4xl text-center container mx-auto px-4  font-bold text-gray-400 italic flex items-center justify-center min-h-[70vh]">
      Tutorials coming soon...
    </div>
  );
};

export default TutorialsPage;
