# Playwright Advantage Online Shopping

This project is a Playwright-based test automation framework for the Advantage Online Shopping application. It includes test cases for various functionalities such as user registration, login, adding products to the cart, filtering products, and more.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone <repository-url>
   cd playwright-advantageonlineshopping
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

## Configuration

The project uses a playwright.config.ts file for configuration. The base URL for the application is already set to:
```
https://advantageonlineshopping.com/#/
```

You can modify the configuration in the playwright.config.ts file if needed.

## Running Tests

### Run All Tests
To run all the tests in the project, use the following command:
```bash
npm run test-all
```

This will execute all the test cases in the tests folder.

### Run Tests in a Specific File
To run tests from a specific file, use:
```bash
npx playwright test tests/<filename>.spec.ts
```
For example:
```bash
npx playwright test tests/Runner.spec.ts
```


### Generate HTML Report
After running the tests, you can view the HTML report by running:
```bash
npx playwright show-report
```


This will open the Playwright Inspector for debugging.

## Folder Structure

```
playwright-advantageonlineshopping/
├── pages/                  # Page Object Model classes
│   ├── AddToCart.ts
│   ├── BasePage.ts
│   ├── Checkout.ts
│   ├── ContactUs.ts
│   ├── EmptyShoppingCart.ts
│   ├── FilterProductPrice.ts
│   ├── HeadphoneCategory.ts
│   ├── LoginPage.ts
│   ├── PopularItem.ts
│   ├── RegisterPage.ts
│   └── ...
├── tests/                  # Test files
│   └── Runner.spec.ts
├── playwright.config.ts    # Playwright configuration file
├── package.json            # Project metadata and scripts
├── package-lock.json       # Dependency lock file
└── README.md               # Project documentation
```


## Troubleshooting

- **Issue**: Tests fail due to timeout.
  - **Solution**: Increase the `actionTimeout` or `timeout` in playwright.config.ts.

- **Issue**: Tests fail due to missing dependencies.
  - **Solution**: Run `npm install` to ensure all dependencies are installed.

- **Issue**: Browser does not launch.
  - **Solution**: Ensure you have the required browsers installed. Run:
    ```bash
    npx playwright install
    ```

