function AppGridCard({ children, isLarge = false, isHighlighted = false, bg="bg-white" }) {
    return (
      <div
      className={`h-86 ${bg} rounded-xl shadow-xl p-4 border border-gray-50
        ${isLarge ? "col-span-2" : "col-span-1"}
        ${isHighlighted ? "bg-yellow-200" : ""}
      `}
    >
      {children}
    </div>
    );
  }
  
  export default AppGridCard; 