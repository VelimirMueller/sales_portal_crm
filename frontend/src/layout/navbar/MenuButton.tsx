import { useState } from "react";
import MainMenuOverlay from "../menu/MainMenuOverlay";

function MenuButton() {
    const [isClicked, setIsClicked] = useState(false);
    
    const toggle = () => {
      setIsClicked(prev => !prev);
    };
    
    return (
        <>
        <button onClick={toggle} className="w-44 h-full rounded-full text-xl text-gray-50 bg-gray-900 shadow-xl">
            Menu
        </button>
  
        {isClicked && (
          <MainMenuOverlay onClose={toggle} isClicked={isClicked} />
        )}
      </>
    );
}
    
    export default MenuButton;