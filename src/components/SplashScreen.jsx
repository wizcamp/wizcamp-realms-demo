import GameLogo from "./GameLogo";

/**
 * SPLASH SCREEN - Welcome to the Game!
 *
 * TODO: Session 2 - Add start and credits buttons
 * TODO: Session 3 - Add startGame and showCredits functionality
 */

export default function SplashScreen() {
  return (
    <div className="splash-screen">
      <GameLogo />
      <div className="splash-buttons"></div>
    </div>
  );
}
