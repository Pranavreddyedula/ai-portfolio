import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Typewriter } from "react-simple-typewriter";

export default function App() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div style={styles.container}>
      
      {/* Particles */}
      <Particles
        init={particlesInit}
        options={{
          particles: {
            number: { value: 60 },
            size: { value: 2 },
            move: { enable: true, speed: 1 },
            links: { enable: true, color: "#00f7ff" },
          },
        }}
        style={{ position: "absolute" }}
      />

      {/* Hero */}
      <div style={styles.hero}>
        <h1>Sai Pranav Reddy</h1>
        <h2 style={{ color: "#00f7ff" }}>
          <Typewriter
            words={["Prompt Engineer", "AI Analyst", "AI Enthusiast"]}
            loop
            cursor
          />
        </h2>
      </div>

      {/* Buttons */}
      <div style={styles.buttons}>
        <a href="https://github.com/Pranavreddyedula" target="_blank">
          <button style={styles.btn}>GitHub</button>
        </a>

        <a href="/resume.pdf" target="_blank">
          <button style={styles.btn}>View Resume</button>
        </a>
      </div>

      {/* Projects */}
      <div style={styles.grid}>
        {projects.map((p, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} style={styles.card}>
            <h3>{p.title}</h3>
            <p><b>Goal:</b> {p.goal}</p>
            <div style={styles.box}><b>Prompt:</b><p>{p.prompt}</p></div>
            <div style={styles.box}><b>Output:</b><p>{p.output}</p></div>
          </motion.div>
        ))}
      </div>

      {/* Contact */}
      <div style={styles.contact}>
        <h2>Contact</h2>
        <p>Email: edulapranav@gmail.com</p>
        <p>Phone: +91 7075449939</p>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Customer Support AI Prompt",
    goal: "Generate polite responses",
    prompt: "Act as a professional customer support agent...",
    output: "Professional apology and resolution response",
  },
  {
    title: "Data Extraction Prompt",
    goal: "Convert text to JSON",
    prompt: "Extract details into JSON...",
    output: "{ name: Rahul, product: laptop }",
  },
];

const styles = {
  container: {
    minHeight: "100vh",
    padding: "20px",
    background: "#0f0f0f",
    color: "white",
    position: "relative",
  },
  hero: {
    textAlign: "center",
    marginBottom: "20px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px",
  },
  btn: {
    padding: "10px 20px",
    background: "#00f7ff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gap: "20px",
  },
  card: {
    background: "#111",
    padding: "20px",
    borderRadius: "10px",
  },
  box: {
    marginTop: "10px",
    background: "#000",
    padding: "10px",
  },
  contact: {
    textAlign: "center",
    marginTop: "40px",
  },
};