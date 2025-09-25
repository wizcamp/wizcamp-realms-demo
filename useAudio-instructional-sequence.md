# useAudio Hook Implementation Sequence

## Step 1: Build MusicToggle Component
Students create the audio control interface:

```javascript
function MusicToggle() {
  const { music } = useGame();

  return (
    <button 
      onClick={music.toggle}
      className="music-toggle"
      title={music.isPlaying ? "Pause Music" : "Play Music"}
    >
      <img 
        src={music.isPlaying ? "/icons/pause.svg" : "/icons/play.svg"}
        alt={music.isPlaying ? "Pause" : "Play"}
        className="music-icon"
      />
    </button>
  );
}
```

## Step 2: Add MusicToggle to HUD
Students include audio controls in the game interface:

```javascript
import MusicToggle from "./MusicToggle";

export default function HUD() {
  return (
    <>
      <Scoreboard />
      <MusicToggle />
    </>
  );
}
```

## Step 3: Add useRef to useAudio Hook
Students add the audio reference:

```javascript
export function useAudio(src) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // ... rest of hook
}
```

## Step 4: Implement Play Function
Students implement audio creation and playback:
Students add audio element creation and play logic:

```javascript
const play = () => {
  if (!audioRef.current) {
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
  }
  audioRef.current.play();
  setIsPlaying(true);
};
```

## Step 5: Implement Pause Function
Students add pause functionality:

```javascript
const pause = () => {
  audioRef.current?.pause();
  setIsPlaying(false);
};
```

## Step 6: Add Error Handling (AI-Assisted)
Students use AI to enhance the play function:

```javascript
const play = () => {
  if (!audioRef.current) {
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
  }
  audioRef.current.play().catch((error) => {
    console.warn("Audio play failed:", error.message);
    setIsPlaying(false);
  });
  setIsPlaying(true);
};
```



## Recommended Starting Scaffold

```javascript
import { useRef, useState } from "react";

/**
 * A hook that lets you play audio files in your React app
 * @param {string} src - Path to the audio file (like "/audio/music.mp3")
 * @returns {Object} An object with play, pause, toggle functions and isPlaying status
 */
export function useAudio(src) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = () => {
    
  };

  const pause = () => {
    
  };

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return { play, pause, toggle, isPlaying };
}
```

## Learning Progression Benefits

1. **UI First**: Students build the interface before the implementation
2. **Immediate Testing**: MusicToggle provides visual feedback for hook development
3. **Component Integration**: Experience using custom hooks in real components
4. **Progressive Enhancement**: Start with basic functionality, add complexity
5. **Professional Workflow**: Build UI → implement logic → enhance with AI