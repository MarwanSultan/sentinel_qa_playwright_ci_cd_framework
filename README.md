# Sentinel QA Playwright CI/CD Framework

**Playwright test automation framework with Agentic AI features using Claude AI.**  
A scalable, maintainable end-to-end QA automation framework built on **Playwright** with integrated **AI-driven testing capabilities** powered by Claude AI agents. Supports CI/CD workflows, modular test design, and dynamic test orchestration for web applications.

---

## 🧠 Key Features

- **Playwright-based E2E Test Framework**  
  Robust, cross-browser test automation using Playwright and TypeScript.

- **Agentic AI Integration**  
  Leverages Claude AI agents for intelligent test suggestions, dynamic scenario generation, and enhanced automation workflows.

- **CI/CD Ready**  
  Integrates seamlessly with GitHub Actions or other CI/CD tools to automate test execution during build and deployment pipelines.

- **Modular and Scalable Structure**  
  Organized with reusable fixtures, page objects, and test components for maintainable test suites.

- **Best Practices Built-In**  
  Designed for readability, maintainability, and scalability in real-world QA workflows.

---

## 🧱 Typical Use Cases

- Automated regression and acceptance testing  
- Cross-environment validation in CI/CD pipelines  
- AI-augmented test generation and scenario coverage  
- Collaboration between QA automation teams and DevOps engineers

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