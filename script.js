@import url('https://googleapis.com');

:root {
  --bg-page: #f4f4f0;
  --bg-card: #ffffff;
  --bg-subtle: #eaeae4;
  --ink-primary: #18181b;
  --ink-secondary: #52525b;
  --accent-primary: #2563eb;
  --accent-hover: #1d4ed8;
  --accent-secondary: #eab308;
  --border-dark: #18181b;
  --border-light: #d4d4d8;
  --status-success-bg: #dcfce7;
  --status-success-text: #166534;
  --status-warn-bg: #fef9c3;
  --status-warn-text: #854d0e;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: var(--bg-page);
  background-image: radial-gradient(#d4d4d8 1px, transparent 1px);
  background-size: 20px 20px;
  color: var(--ink-primary);
  line-height: 1.6;
}

nav {
  background-color: var(--ink-primary);
  color: #ffffff;
  border-bottom: 3px solid var(--border-dark);
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav-container {
  max-width: 1080px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-title {
  font-size: 1.35rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: #e4e4e7;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border: 2px solid transparent;
  border-radius: 6px;
  transition: all 0.15s ease;
}

.nav-links a:hover {
  background-color: var(--accent-secondary);
  color: var(--ink-primary);
  border-color: var(--border-dark);
}

header {
  background-color: var(--bg-card);
  border-bottom: 3px solid var(--border-dark);
  padding: 3.5rem 1.5rem;
  text-align: center;
}

.header-inner {
  max-width: 800px;
  margin: 0 auto;
}

.badge-tag {
  display: inline-block;
  background-color: var(--accent-secondary);
  color: var(--ink-primary);
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.35rem 0.9rem;
  border: 2px solid var(--border-dark);
  border-radius: 4px;
  box-shadow: 3px 3px 0px var(--border-dark);
}

header h1 {
  margin-top: 1.25rem;
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.03em;
}

header p {
  margin-top: 1rem;
  color: var(--ink-secondary);
  font-size: 1.05rem;
}

main {
  max-width: 1080px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.card-section {
  background-color: var(--bg-card);
  border: 3px solid var(--border-dark);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 6px 6px 0px var(--border-dark);
}

.card-section h2 {
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  border-bottom: 2px solid var(--bg-subtle);
  padding-bottom: 0.75rem;
}

.section-desc {
  font-size: 0.92rem;
  color: var(--ink-secondary);
  margin-top: 0.5rem;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.75rem;
  margin-top: 1.5rem;
}

.grid-2.align-center {
  align-items: center;
}

.grid-2.compact-grid {
  margin-top: 0;
  gap: 1rem;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.input-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.search-input {
  margin-bottom: 1rem;
}

.option-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-top: 0.75rem;
}

.option-box {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  background-color: var(--bg-card);
  border: 2px solid var(--border-dark);
  border-radius: 8px;
  padding: 0.75rem 0.9rem;
  cursor: pointer;
  font-size: 0.88rem;
  font-weight: 600;
  box-shadow: 3px 3px 0px var(--border-dark);
  transition: transform 0.1s ease, background-color 0.15s ease;
  user-select: none;
}

.option-box:hover {
  background-color: var(--bg-subtle);
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0px var(--border-dark);
}

.option-box input[type="checkbox"],
.option-box input[type="radio"] {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid var(--border-dark);
  border-radius: 4px;
  background-color: #ffffff;
  cursor: pointer;
  flex-shrink: 0;
  display: grid;
  place-content: center;
}

.option-box input[type="radio"] {
  border-radius: 50%;
}

.option-box input[type="checkbox"]:checked,
.option-box input[type="radio"]:checked {
  background-color: var(--accent-primary);
}

.option-box input[type="checkbox"]:checked::before {
  content: "";
  width: 9px;
  height: 9px;
  background-color: #ffffff;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

.option-box input[type="radio"]:checked::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ffffff;
}

.option-box:has(input:checked) {
  background-color: #dbeafe;
  border-color: var(--accent-primary);
  box-shadow: 3px 3px 0px var(--accent-primary);
}

label.field-label {
  display: block;
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

select,
input[type="number"],
input[type="text"] {
  width: 100%;
  padding: 0.75rem 0.9rem;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--ink-primary);
  background-color: var(--bg-card);
  border: 2px solid var(--border-dark);
  border-radius: 8px;
  outline: none;
}

select:focus,
input[type="number"]:focus,
input[type="text"]:focus {
  border-color: var(--accent-primary);
  box-shadow: 3px 3px 0px var(--accent-primary);
}

.btn-solid {
  width: 100%;
  padding: 0.85rem 1.25rem;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #ffffff;
  background-color: var(--accent-primary);
  border: 2px solid var(--border-dark);
  border-radius: 8px;
  box-shadow: 4px 4px 0px var(--border-dark);
  cursor: pointer;
  transition: transform 0.1s ease, background-color 0.15s ease;
}

.btn-solid:hover {
  background-color: var(--accent-hover);
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 0px var(--border-dark);
}

.btn-solid:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px var(--border-dark);
}

.result-panel {
  background-color: var(--bg-subtle);
  border: 2px solid var(--border-dark);
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.result-panel.chart-box {
  padding: 1rem;
  min-height: 280px;
}

.placeholder-text {
  font-size: 0.9rem;
  color: var(--ink-secondary);
  text-align: center;
}

.result-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--accent-primary);
}

.result-block {
  margin-top: 0.85rem;
}

.result-label-priority {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #be123c;
  display: block;
}

.result-value-priority {
  font-size: 0.95rem;
  font-weight: 800;
  margin-top: 0.25rem;
  color: var(--ink-primary);
}

.result-label-secondary {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--ink-secondary);
  display: block;
}

.result-value-secondary {
  font-size: 0.88rem;
  font-weight: 600;
  margin-top: 0.25rem;
}

.strategy-box {
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #ffffff;
  border: 2px solid var(--border-dark);
  border-radius: 6px;
  font-size: 0.82rem;
}

.chart-heading {
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.5rem;
  color: var(--ink-primary);
}

.rapor-svg {
  width: 100%;
  height: auto;
  background-color: #ffffff;
  border: 2px solid #18181b;
  border-radius: 8px;
  display: block;
}

.note-box {
  margin-top: 1rem;
  padding: 0.9rem 1rem;
  background-color: var(--status-warn-bg);
  color: var(--status-warn-text);
  border: 2px solid var(--border-dark);
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 600;
}

.status-banner {
  padding: 0.9rem 1rem;
  border: 2px solid var(--border-dark);
  border-radius: 8px;
  font-size: 0.88rem;
  font-weight: 600;
}

.status-good {
  background-color: var(--status-success-bg);
  color: var(--status-success-text);
}

.status-warn {
  background-color: var(--status-warn-bg);
  color: var(--status-warn-text);
}

.idea-card {
  background-color: var(--bg-card);
  border: 2px solid var(--border-dark);
  border-radius: 10px;
  padding: 1.25rem;
  box-shadow: 4px 4px 0px var(--border-dark);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.idea-tag {
  align-self: flex-start;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.25rem 0.6rem;
  background-color: var(--bg-subtle);
  border: 1.5px solid var(--border-dark);
  border-radius: 4px;
}

.idea-card h3 {
  font-size: 1.05rem;
  font-weight: 800;
}

.idea-card p {
  font-size: 0.86rem;
  color: var(--ink-secondary);
}

footer {
  background-color: var(--ink-primary);
  color: #a1a1aa;
  border-top: 3px solid var(--border-dark);
  padding: 2rem 1.5rem;
  margin-top: 3rem;
  text-align: center;
  font-size: 0.88rem;
}

@media (max-width: 768px) {
  .grid-2,
  .grid-3,
  .option-grid {
    grid-template-columns: 1fr;
  }

  .nav-links {
    display: none;
  }

  header h1 {
    font-size: 1.75rem;
  }
}
