# Sentinel QA – Playwright CI/CD Automation Framework

🚀 **Sentinel QA** is a modern, scalable, and security-aware **Playwright-based end-to-end test automation framework** built with **TypeScript** and designed for **CI/CD pipelines, cloud-native applications, and DevSecOps environments**.

This framework emphasizes:
- High-quality automated testing
- AI-assisted test intelligence (Claude AI agents)
- Secure-by-design CI/CD practices
- Enterprise-grade scalability and maintainability

---

## 🔑 Key Features

### ✅ End-to-End Automation
- Built on **Playwright + TypeScript**
- Supports **Chromium, Firefox, and WebKit**
- Parallel execution & cross-browser testing
- Page Object Model (POM) architecture

### 🤖 AI-Assisted Testing (Claude AI Agents)
- Intelligent test reasoning and validation
- AI-assisted failure analysis
- Dynamic assertion support
- Human-readable explanations for test results

### 🔄 CI/CD Ready
- GitHub Actions–friendly
- Environment-based configuration
- Fast feedback loops for pull requests and merges

### 🔐 Security-First Mindset (DevSecOps)
- No hardcoded secrets
- Environment variable–driven configuration
- Integrated **static application security testing (SAST)** using **CodeQL**

---

## 🛡️ Security & Code Quality

### 🔍 CodeQL Static Code Analysis

This repository integrates **GitHub CodeQL** to automatically scan the codebase for:
- Security vulnerabilities
- Unsafe coding patterns
- Common JavaScript / TypeScript weaknesses
- Dependency misuse and injection risks

**CodeQL runs automatically on:**
- Pull requests
- Pushes to protected branches

📁 Configuration location:
Results appear in:
> **GitHub → Security → Code scanning alerts**

This enforces **shift-left security** and aligns with modern **DevSecOps best practices**.

---

## 🤖 Using Claude AI Agents

Sentinel QA integrates **Claude AI agents** as an intelligent reasoning layer to enhance automated testing. These agents assist QA engineers by analyzing application behavior, validating UI flows, and explaining failures in both local and CI environments.

### 🧠 What Claude AI Agents Are Used For

Claude agents can:
- Analyze test failures and suggest root causes
- Validate UI content and workflows dynamically
- Assist with exploratory testing logic
- Generate intelligent edge-case scenarios
- Provide human-readable explanations for failures in CI
- Reduce brittle assertions by using reasoning-based validation

Claude **does not replace Playwright** — it augments it.

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x
- Playwright (`npm install -D @playwright/test`)

### Installation
```bash
git clone https://github.com/MarwanSultan/sentinel_qa_playwright_ci_cd_framework.git
cd sentinel_qa_playwright_ci_cd_framework
npm install
npx playwright install
```

### Running Tests
```bash
npx playwright test --reporter=list
```
