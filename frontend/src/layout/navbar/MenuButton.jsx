import { useState } from "react";
import MainMenuOverlay from "../menu/MainMenuOverlay";

function MenuButton() {
    const [isClicked, setIsClicked] = useState(false);
    
    const toggle = () => {
      setIsClicked(prev => !prev);
    };
    
    return (
        <>
        <button onClick={toggle} class="w-44 h-full rounded-full text-xl text-gray-50 bg-gray-900 shadow-xl">
            Menu: {isClicked.toString()}
        </button>
  
        {isClicked && (
          <MainMenuOverlay onClose={toggle} isClicked={isClicked} />
        )}
      </>
    );
}
    
    export default MenuButton;