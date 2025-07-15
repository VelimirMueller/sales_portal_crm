function MainMenu({ onClose, isClicked }) {
  return (
    <div className={`absolute top-0 right-0 w-[40vw] h-screen bg-white shadow-2xl z-40 flex items-center justify-center ${isClicked ? 'animate-flyin-to-left' : 'animate-flyout-to-right'}`}>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Menu Overlay</h2>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700">
          Close Overlay
        </button>
      </div>
    </div>
  );
}

export default MainMenu;