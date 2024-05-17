const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full flex-1 overflow-auto md:overflow-visible flex flex-col gap-4 main-content">
      {children}
    </main>
  );
};

export default MainContent;
