import { useState } from "react";
import { SCREENS } from "../constants/screens";
import { useGame } from "../hooks/useGame";
import CreditsModal from "./CreditsModal";
import GameLogo from "./GameLogo";

/**
 * SPLASH SCREEN - Welcome to the Game!
 * 
 * TODO: Day 2 - Students will create GameButton component and replace buttons
 * TODO: Day 3 - Add setScreen functionality for navigation
 */

export default function SplashScreen() {
  const { setScreen } = useGame();
  const [showCredits, setShowCredits] = useState(false);

  // TODO: Day 3 - Students will implement this function
  const startGame = () => {
    console.log("TODO: Navigate to PLAYING screen");
    // setScreen(SCREENS.PLAYING);
  };

  return (
    <div className="splash-screen">
      {/* Game Logo */}
      <GameLogo />

      {/* TODO: Day 2 - Replace these buttons with GameButton components */}
      <div className="splash-buttons">
        <button onClick={startGame}>
          Begin Quest
        </button>
        <button onClick={() => setShowCredits(true)}>
          Credits
        </button>
      </div>

      {/* Show credits when requested */}
      {showCredits && <CreditsModal onClose={() => setShowCredits(false)} />}
    </div>
  );
}