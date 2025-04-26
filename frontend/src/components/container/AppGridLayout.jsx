function AppGridLayout({ children }) {
  return (
    <div className="grid grid-cols-3 gap-4 px-4 max-w-[1200px]">
        {children}
      </div>
  );
}
export default AppGridLayout;