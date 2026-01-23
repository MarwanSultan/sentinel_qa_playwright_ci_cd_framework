# Sentinel QA - Playwright Test Automation Framework with Agentic AI


[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Playwright](https://img.shields.io/badge/Playwright-1.40+-green.svg)](https://playwright.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-yellow.svg)](https://nodejs.org/)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-red.svg)](https://github.com/features/actions)

Enterprise-grade test automation framework with Claude AI integration for intelligent test orchestration and failure analysis.


---

## Overview

Sentinel QA combines Playwright's cross-browser automation with Claude AI intelligence for intelligent test planning, execution, and failure analysis. Built for enterprise and government teams delivering secure, scalable software.

---

## Features

- **AI-Enhanced Intelligence** — Claude AI for test prioritization, failure analysis, and smart assertions
- **Cross-Browser Testing** — Chromium, Firefox, and WebKit support
- **CI/CD Ready** — GitHub Actions integration with parallel execution and comprehensive reporting
- **Type-Safe** — Full TypeScript support with strict typing
- **Modular Design** — Page Object Model pattern with reusable components
- **API Testing** — Seamless REST/GraphQL API testing alongside UI automation

---

## Quick Start

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x
- Claude API Key ([Get one here](https://console.anthropic.com/))

### Installation

```bash
git clone https://github.com/MarwanSultan/sentinel_qa_playwright_ci_cd_framework.git
cd sentinel_qa_playwright_ci_cd_framework
npm install
npx playwright install
```

### Configure Environment

```bash
cp .env.example .env
# Add your Claude API key and base URL
```

### Run Tests

```bash
npm test                          # Run all tests
npx playwright test --headed      # View browser execution
npx playwright test --debug       # Debug mode
npx playwright test --ui          # Interactive UI mode
npx playwright show-report        # View HTML report
```

---

## Project Structure

```
sentinel_qa_playwright_ci_cd_framework/
├── .github/workflows/        # GitHub Actions CI/CD
├── specs/                    # Test specifications
├── tests/
│   ├── pages/               # Page Object Models
│   ├── fixtures/            # Test data
│   ├── utils/               # Helper functions
│   └── ai/                  # Claude AI integration
├── playwright.config.ts
├── api.config.ts
└── package.json
```

---

## Usage Examples

### Basic Test

```typescript
import { test, expect } from '@playwright/test';

test('login flow', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('input[name="email"]', 'user@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button:has-text("Sign In")');
  await expect(page).toHaveURL(/\/dashboard/);
});
```

### AI-Powered Failure Analysis

```typescript
const analysis = await claudeAssistant.analyzeFailure(testResult);
console.log(analysis.rootCause);
console.log(analysis.recommendations);
```

---

## Configuration

### Playwright Config (playwright.config.ts)

```typescript
{
  fullyParallel: true,
  workers: 4,
  retries: 1,
  timeout: 30000,
  use: {
    baseURL: 'https://example.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  }
}
```

### Environment Variables (.env)

```env
CLAUDE_API_KEY=sk-ant-...
BASE_URL=https://your-app.com
ENVIRONMENT=staging
```

---

## CI/CD Integration

Tests run automatically on:
- Push to main branch
- Pull requests (gating)
- Scheduled nightly builds

Results include:
- Parallel execution across multiple workers
- Multi-browser testing (Chromium, Firefox, WebKit)
- HTML reports and test artifacts
- Screenshot/video capture on failure

View results in your repository's **Actions** tab.

---

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | Playwright 1.40+ |
| Language | TypeScript 5.0+ |
| Runtime | Node.js 18+ |
| AI | Claude API (Anthropic) |
| CI/CD | GitHub Actions |
| Reporting | HTML Reporter, Allure |

---

## Troubleshooting

**Tests fail in CI but pass locally**
- Verify environment variables in GitHub Secrets
- Check selector timing with explicit waits
- Ensure base URL matches test environment

**Playwright browsers not found**
```bash
npx playwright install
```

**Module not found errors**
```bash
npm install
npm run build
```

**Enable debug logging**
```bash
DEBUG=pw:api npx playwright test
```

Launch interactive debugger:
```bash
npx playwright test --debug
```

---

## Best Practices

- Keep tests independent and isolated
- Use Page Object Model pattern for maintainability
- Write specific assertions (avoid generic checks)
- Use explicit waits instead of hard sleeps
- One test file per feature/module
- Descriptive test names that explain what's being tested

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -m "Add feature"`)
4. Push and open a Pull Request

---

## License

MIT License. See [LICENSE](LICENSE) for details.

---

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Claude AI Documentation](https://www.anthropic.com/claude)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## Support

- [Issues](https://github.com/MarwanSultan/sentinel_qa_playwright_ci_cd_framework/issues)
- [Discussions](https://github.com/MarwanSultan/sentinel_qa_playwright_ci_cd_framework/discussions)
- Author: [Marwan Sultan](https://github.com/MarwanSultan)
