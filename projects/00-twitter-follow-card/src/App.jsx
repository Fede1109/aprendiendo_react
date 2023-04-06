import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="fede1109" isFollowing>
        Federico Díaz
      </TwitterFollowCard>
      <TwitterFollowCard userName="elonmusk" isFollowing={false}>
        Elon Musk
      </TwitterFollowCard>
      <TwitterFollowCard userName="pheralb" isFollowing>
        Pablo Hernandez
      </TwitterFollowCard>
    </section>
  );
}
