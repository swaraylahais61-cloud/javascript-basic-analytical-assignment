# JavaScript Basic Analytical Assignment

A simple JavaScript practice project focused on basic analytical logic, calculations, and decision-making.

## Overview

This repository contains two active case solutions implemented in JavaScript:

- Purchase total calculation for a shopping checkout scenario
- Scholarship eligibility evaluation for student assistance criteria

The project is organized to keep the active logic easy to read, maintain, and extend.

## Project Structure

```text
javascript-basic-analytical-assignment/
├── README.md
├── src/
│   ├── purchaseCalculator.js
│   └── scholarshipEligibility.js
├── screenshots/
│   ├── test-results.png1.png
│   └── test-results.png2.png
├── case1.js              # archived reference
├── case2.js              # legacy file
├── case3.js              # legacy file
└── .gitignore
```

## Active Solutions

### 1. Purchase Calculator
File: `src/purchaseCalculator.js`

This script calculates:
- subtotal
- discount amount
- discounted total
- shipping cost
- final payment

Example logic:
- Product price: Rp 150,000
- Quantity: 3
- Discount: 10%
- Shipping is free when the discounted total is Rp 500,000 or more

### 2. Scholarship Eligibility Checker
File: `src/scholarshipEligibility.js`

This script checks whether a student qualifies for scholarship support based on:
- average score
- attendance percentage
- family income
- organization membership

It evaluates whether the student qualifies for:
- Category A
- Category B
- Not Eligible

## Screenshots

The `screenshots/` folder contains sample output images from test runs and validation results for the assignment.

## Notes

- Case 1 was removed from the active workflow and archived for reference.
- The repository keeps the core assignment logic separated into clear, readable JavaScript files.
- The project is intended for learning and demonstration of basic JavaScript conditionals and calculations.

## How to Run

Open a terminal in the project root and run either script with Node.js:

```bash
node src/purchaseCalculator.js
node src/scholarshipEligibility.js
```

## License

This project is for educational purposes and is not intended for production use.
