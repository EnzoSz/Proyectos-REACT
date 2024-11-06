import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    isfollowing: true,
  },
  {
    userName: "enzosz",
    name: "Enzo Soliz",
    isfollowing: false,
  },
]
export function App() {
  const formatUserName = (userName) => {
    return `@${userName}`;
  };
  return (
    <section className="App">
      {users.map(({ userName, name, isfollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          name={name}
          formatUserName={formatUserName}
          initialIsFollowing={isfollowing}
        />
      ))}
    </section>
  );
}
