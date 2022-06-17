import EpisodeScreens from "./screens/EpisodeScreens";
import EpisodeState from "./context/Episode/EpisodeState";
function App() {
  return (
    <EpisodeState>
      <EpisodeScreens />
    </EpisodeState>
  );
}

export default App;
