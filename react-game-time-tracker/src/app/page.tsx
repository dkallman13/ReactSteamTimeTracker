"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: handle auth flow here
    // For now just log to console (do not ship production code like this)
    // You can replace with real auth logic (OAuth, API call, etc.)
    console.log({ username, password: password ? "[REDACTED]" : "", remember });
    alert(`Signing in as ${username || "(empty)"}`);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.header}>
          <Image src="/steam-logo.svg" alt="Steam" width={160} height={50} className={styles.logo} priority />
        </div>

        <div className={styles.container}>
          <div className={styles.leftPane}>
            <h1 className={styles.title}>Welcome back</h1>
            <p className={styles.subtitle}>Sign in to your Steam account to track your playtime</p>
            <form className={styles.form} onSubmit={onSubmit}>
              <label className={styles.label} htmlFor="username">
                Account name
              </label>
              <input
                id="username"
                name="username"
                className={styles.input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="your_steam_username"
                autoComplete="username"
              />

              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className={styles.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                autoComplete="current-password"
              />

              <div className={styles.rowBetween}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Remember me
                </label>
                <a className={styles.link} href="#">Forgot your password?</a>
              </div>

              <button className={styles.primary} type="submit">Sign in</button>
            </form>

            <div className={styles.rowCenter}>
              <span className={styles.small}>New to Steam?</span>
              <a className={styles.create} href="#">Create an account</a>
            </div>
          </div>

          <aside className={styles.rightPane} aria-hidden>
            <div className={styles.panelTitle}>Features</div>
            <ul className={styles.features}>
              <li>Automatic playtime tracking</li>
              <li>Cloud saves and achievements</li>
              <li>Friends & community</li>
            </ul>
            <div className={styles.steamDeck}>Steam Deck compatible</div>
          </aside>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
