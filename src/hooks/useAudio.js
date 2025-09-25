import { useRef, useState } from "react";

/**
 * CUSTOM AUDIO HOOK - Background Music Control
 *
 * TODO: Session 9 - Students will implement this custom hook
 *
 * A hook that lets you play audio files in your React app
 * @param {string} src - Path to the audio file (like "/audio/music.mp3")
 * @returns {Object} An object with play, pause, toggle functions and isPlaying status
 */
export function useAudio(src) {
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {};

  const pause = () => {};

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return { play, pause, toggle, isPlaying };
}
