function AppGridCard({ children, isLarge = false }) {
    return (
      <div className={`h-90 bg-white rounded-xl shadow-xl ${isLarge ? 'col-span-2': 'col-span-1'}`}>
        {children}
      </div>
    );
  }
  
  export default AppGridCard;