import { createContext, useMemo, useState } from "react";

import { SCREENS } from "../constants/screens";
import { getZoneById, ZONES } from "../data/zones";
import { fetchQuestions } from "../services/trivia";

/**
 * GAME CONTEXT - The Brain of Our Quiz Game
 *
 * This manages all the game's state and logic:
 * - 📊 GAME STATE: Core game data (screens, zone progress)
 * - ❓ QUIZ STATE: Quiz-specific data (questions, progress)
 * - ⚡ ACTIONS: Game logic functions (load questions, record answers, check completion)
 * - 🎛️ CONTROLS: Simple UI state setters (show/hide screens and modals)
 *
 * Think of this as the "save file" for our game - it remembers everything!
 *
 * TODO: Session 8 - Add scoring system and cache clearing
 * TODO: Session 9 - Add audio integration
 * TODO: Session X - Add score reset
 *
 * ┌─────────────────────┬───────────────┬───────────────────────────────────┐
 * │     GAME STATE      │ Type          │ Description                       │
 * ├─────────────────────┼───────────────┼───────────────────────────────────┤
 * │ screen              │ string        │ Current screen to display         │
 * │ zoneProgress        │ object        │ Which zones are completed         │
 * │ activeZone          │ number/null   │ Current unlocked zone ID          │
 * │ currentZone         │ object/null   │ Full data for active zone         │
 * │ completedZones      │ number        │ Count of finished zones           │
 * └─────────────────────┴───────────────┴───────────────────────────────────┘
 *
 * ┌─────────────────────┬───────────────┬───────────────────────────────────┐
 * │     QUIZ STATE      │ Type          │ Description                       │
 * ├─────────────────────┼───────────────┼───────────────────────────────────┤
 * │ currentQuestions    │ array         │ Questions for current quiz        │
 * │ currentQuestion     │ number        │ Which question (0,1,2...)         │
 * │ correctAnswers      │ number        │ Correct answers this quiz         │
 * └─────────────────────┴───────────────┴───────────────────────────────────┘
 *
 * ┌─────────────────────────────────────┬───────────────────────────────────┐
 * │             ACTIONS                 │ What It Does                      │
 * ├─────────────────────────────────────┼───────────────────────────────────┤
 * │ loadQuestionsForZone(zoneId)        │ Prepare questions for a zone      │
 * │ nextQuestion()                      │ Move to next question             │
 * │ recordCorrectAnswer()               │ Player got it right!              │
 * │ recordIncorrectAnswer()             │ Player got it wrong               │
 * │ checkZoneCompletion()               │ Did player pass the zone?         │
 * │ resetGame()                         │ Start completely over             │
 * └─────────────────────────────────────┴───────────────────────────────────┘
 *
 * ┌─────────────────────────────────────┬───────────────────────────────────┐
 * │            CONTROLS                 │ What It Does                      │
 * ├─────────────────────────────────────┼───────────────────────────────────┤
 * │ setScreen(screenName)               │ Switch to different screen        │
 * └─────────────────────────────────────┴───────────────────────────────────┘
 */

// ============================================================================
// GAME SETTINGS - Change these to customize your game!
// ============================================================================
const PASS_PERCENTAGE = 0.6; // Need 60% correct to pass a zone
const POINTS_PER_CORRECT = 100;

export const GameContext = createContext();

export function GameProvider({ children }) {
  // ============================================================================
  // GAME STATE - These variables remember everything about the current game
  // ============================================================================
  const [screen, setScreen] = useState(SCREENS.SPLASH); // Which screen to show

  // Track which zones are completed - starts with all zones incomplete
  const [zoneProgress, setZoneProgress] = useState({
    0: { completed: false },
    1: { completed: false },
    2: { completed: false },
  });

  // Current quiz state - resets for each new quiz
  const [currentQuestions, setCurrentQuestions] = useState([]); // Array of questions
  const [currentQuestion, setCurrentQuestion] = useState(0); // Which question (0, 1, 2...)
  const [correctAnswers, setCorrectAnswers] = useState(0); // How many correct so far

  // Find the first zone that isn't completed yet
  const activeZone = useMemo(() => {
    for (let zoneId = 0; zoneId < ZONES.length; zoneId++) {
      if (!zoneProgress[zoneId].completed) {
        return zoneId;
      }
    }
    return null; // All zones completed
  }, [zoneProgress]);

  // Get the full zone data for the active zone
  const currentZone = useMemo(() => {
    return activeZone !== null ? getZoneById(activeZone) : null;
  }, [activeZone]);

  // Calculate how many zones have been completed
  const completedZones = useMemo(() => {
    return Object.values(zoneProgress).filter((zone) => zone.completed).length;
  }, [zoneProgress]);

  // Load questions for a specific zone
  const loadQuestionsForZone = async (zoneId) => {
    const questions = await fetchQuestions(zoneId);
    setCurrentQuestions(questions);
    setCurrentQuestion(0);
    setCorrectAnswers(0);
  };

  // Move to the next question
  const nextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  // Handle correct answer: add points and track it
  const recordCorrectAnswer = () => {
    // TODO: Session 8 - Add score increment
    setCorrectAnswers((prev) => prev + 1);
  };

  // Handle wrong answer: subtract points (but don't go below 0)
  const recordIncorrectAnswer = () => {
    // TODO: Session 8 - Add score decrement
  };

  // Check if player passed the current zone (needs 60% correct)
  const checkZoneCompletion = () => {
    if (activeZone === null || currentQuestions.length === 0) return;

    const questionsNeeded = Math.ceil(
      currentQuestions.length * PASS_PERCENTAGE
    );
    const passed = correctAnswers >= questionsNeeded;

    if (passed) {
      // Mark zone as completed
      setZoneProgress((prev) => ({
        ...prev,
        [activeZone]: { completed: true },
      }));
      // TODO: Session 8 - Add clearQuestionCache call

      // Check if this was the final zone
      if (activeZone === ZONES.length - 1) {
        setScreen(SCREENS.GAME_OVER);
      }
    }
  };

  // Reset everything to start over
  const resetGame = () => {
    // TODO: Session 8 - Add score reset
    setZoneProgress({
      0: { completed: false },
      1: { completed: false },
      2: { completed: false },
    });
    // TODO: Session 7 - Add setIsQuizVisible(false)
    setCurrentQuestions([]);
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    // TODO: Session X - Add clearAllQuestionCache call
  };

  return (
    <GameContext.Provider
      value={{
        // GAME STATE
        screen,
        zoneProgress,
        activeZone,
        currentZone,
        completedZones,
        // QUIZ STATE
        currentQuestions,
        currentQuestion,
        correctAnswers,
        // ACTIONS
        loadQuestionsForZone,
        nextQuestion,
        recordCorrectAnswer,
        recordIncorrectAnswer,
        checkZoneCompletion,
        resetGame,
        // CONTROLS
        setScreen,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

// ============================================================================
// DEBUGGING TIP: console.log('Game State:', useGame());
// ============================================================================
