import { useState } from "react";

export default function App() {
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.title}>Habit Buddy</h1>
      </header>

      <main style={styles.main}>
        <p style={styles.placeholder}>
          🚧 App scaffold ready. Next: navigation & screens.
        </p>
      </main>

      <nav style={styles.nav}>
        <button style={styles.navButton}>Today</button>
        <button style={styles.navButton}>Habits</button>
        <button style={styles.navButton}>Insights</button>
        <button style={styles.navButton}>Buddy</button>
      </nav>
    </div>
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  placeholder: {
    opacity: 0.7,
  },
  nav: {
    display: "flex",
    borderTop: "1px solid #1F2937",
  },
  navButton: {
    flex: 1,
    padding: "12px 0",
    background: "none",
    border: "none",
    color: "#E5E7EB",
    fontSize: "0.9rem",
  },
};
