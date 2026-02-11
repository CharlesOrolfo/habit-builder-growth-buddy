import { useState } from "react";
import TodayScreen from "./screens/TodayScreen";
import HabitsScreen from "./screens/HabitsScreen";
import InsightsScreen from "./screens/InsightsScreen";
import BuddyScreen from "./screens/BuddyScreen";

type Tab = "today" | "habits" | "insights" | "buddy";

export default function App() {
  const [tab, setTab] = useState<Tab>("today");

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.title}>Habit Buddy</h1>
      </header>

      <main style={styles.main}>
        {tab === "today" && <TodayScreen />}
        {tab === "habits" && <HabitsScreen />}
        {tab === "insights" && <InsightsScreen />}
        {tab === "buddy" && <BuddyScreen />}
      </main>

      <nav style={styles.nav}>
        <NavButton label="Today" active={tab === "today"} onClick={() => setTab("today")} />
        <NavButton label="Habits" active={tab === "habits"} onClick={() => setTab("habits")} />
        <NavButton label="Insights" active={tab === "insights"} onClick={() => setTab("insights")} />
        <NavButton label="Buddy" active={tab === "buddy"} onClick={() => setTab("buddy")} />
      </nav>
    </div>
  );
}

function NavButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        padding: "12px 0",
        background: "none",
        border: "none",
        color: active ? "#38BDF8" : "#E5E7EB",
        fontWeight: active ? 600 : 400,
      }}
    >
      {label}
    </button>
  );
}

const styles: Record<string, React.CSSProperties> = {
  app: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0B1220",
    color: "#E5E7EB",
    fontFamily: "system-ui, sans-serif",
  },
  header: {
    padding: "16px",
    textAlign: "center",
    borderBottom: "1px solid #1F2937",
  },
  title: {
    margin: 0,
    fontSize: "1.25rem",
  },
  main: {
    flex: 1,
    padding: "16px",
  },
  nav: {
    display: "flex",
    borderTop: "1px solid #1F2937",
  },
};