/**
 * GAME BUTTON - Reusable Button Component
 *
 * TODO: Session 2 - Students will create this component
 *
 * Props needed:
 * - text: Button text to display
 * - onClick: Function to call when clicked
 * - variant: "primary" or "secondary" for styling
 *
 * Example usage:
 * <GameButton text="Begin Quest" onClick={startGame} variant="primary" />
 */

export default function GameButton({ text, onClick, variant = "primary" }) {
  // TODO: Session 2 - Students implement this component
  return (
    <button className={`game-button ${variant}`} onClick={onClick}>
      {text}
    </button>
  );
}
