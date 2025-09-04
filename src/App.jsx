/**
 * APP COMPONENT - The Main Screen Controller
 * 
 * TODO: Day 1 - Replace <StartHere /> with <SplashScreen />
 * TODO: Day 3 - Add screen navigation with SCREENS constants
 * TODO: Day 7 - Add QuizModal conditional rendering
 * TODO: Day 8 - Add GameOver screen
 */

import StartHere from './components/StartHere';
// import SplashScreen from './components/SplashScreen';

export default function App() {
  return (
    <div className="app-container">
      <StartHere />
    </div>
  );
}