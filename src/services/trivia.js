import { getZoneById } from "../data/zones";

/**
 * TRIVIA API SERVICE - Connect to OpenTrivia Database
 *
 * TODO: Session 5 - Implement fetchQuestions and transformQuestion
 * TODO: Session 6 - Add caching with localStorage
 * TODO: Session 8 - Add cache management functions
 */

// Build API URL with zone parameters
function buildApiUrl(zone, questionCount) {
  return `https://opentdb.com/api.php?amount=${questionCount}&category=${zone.categoryId}&type=multiple&difficulty=${zone.difficulty}&encode=url3986`;
}

// Randomly shuffle answer choices
function shuffleAnswers(correctAnswer, incorrectAnswers) {
  const allAnswers = [...incorrectAnswers, correctAnswer];
  return allAnswers.sort(() => Math.random() - 0.5);
}

// Decode URL-encoded text from API
function decodeText(encodedText) {
  return decodeURIComponent(encodedText);
}

// Transform API question into game format
function transformQuestion(apiQuestion) {}

// Load questions for a specific zone
export async function fetchQuestions(zoneId, count = null) {
  const zone = getZoneById(zoneId);
  if (!zone) return [];

  const questionCount = count || zone.questionCount;
  const url = buildApiUrl(zone, questionCount);

  try {
    alert(`Loading questions for ${zone.name}`);
  } catch (error) {
    console.log("Failed to fetch questions:", error);
    return [];
  }
}
