function AppGridCard({ children, isLarge = false, isHighlighted = false }) {
    return (
      <div
      className={`h-86 bg-white rounded-xl shadow-xl 
        ${isLarge ? "col-span-2" : "col-span-1"}
        ${isHighlighted ? "bg-yellow-200" : ""}
      `}
    >
      {children}
    </div>
    );
  }
  
  export default AppGridCard;