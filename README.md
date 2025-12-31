# Sentinel Playwright CI/CD Framework

🚀 **Sentinel** is a modern, scalable QA automation framework built with **Playwright**, designed for **CI/CD-first testing**, enterprise-grade web applications, and AI-assisted test workflows.

---

## 🧪 Key Features

- End-to-end UI testing using **Playwright**
- CI/CD-ready architecture (GitHub Actions / Jenkins friendly)
- Page Object Model (POM) for maintainability
- Cross-browser testing (Chromium, Firefox, WebKit)
- Parallel test execution
- Environment-based configuration
- Screenshot, video, and trace capture on failure
- Designed for AI-assisted test creation (LLM-ready)

---

## 🏗️ Tech Stack

- **Language:** TypeScript / JavaScript
- **Test Framework:** Playwright
- **Runtime:** Node.js
- **CI/CD:** GitHub Actions (extensible to Jenkins, GitLab CI)
- **Design Pattern:** Page Object Model (POM)
- **Reporting:** Playwright HTML Reports

---

## 📂 Project Structure

```text
sentinel-playwright-ci-cd/
├── tests/              # Test specifications
├── pages/              # Page Object Models
├── fixtures/           # Custom fixtures & hooks
├── utils/              # Helper utilities
├── playwright.config.ts
├── .github/workflows/  # CI pipelines
└── README.md
```

## 📂 Prerequisites

### Verify installation
```
node -v
npm -v
git --version
```


## ▶️ Installation & Setup

### 1️⃣ Clone the repository
```
git clone https://github.com/MarwanSultan/sentinel-playwright-ci-cd.git
cd sentinel-playwright-ci-cd
```

### 2️⃣ Install project dependencies
```
npm install
```

### 3️⃣ Install Playwright browsers
```
npx playwright install
```

### ▶️ Running Tests
```
npx playwright test
```

















