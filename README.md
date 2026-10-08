# JavaScript Basic Analytical Assignment

This repository contains the active JavaScript assignment solutions, organized by case.

## Repository structure

```text
javascript-basic-analytical-assignment/
├── README.md
├── src/
│   ├── purchaseCalculator.js
│   └── scholarshipEligibility.js
├── screenshots/
│   ├── test-results.png1.png
│   └── test-results.png2.png
├── case1.js  # archived reference
└── case2.js  # backward-compatible alias
└── case3.js  # backward-compatible alias
```

## Active cases

### Purchase Total Calculator (`src/purchaseCalculator.js`)
Calculates the purchase subtotal, discount, shipping cost, and final payment.

**Features:**
- Compute purchase subtotal from product price and quantity
- Apply discount percentage
- Calculate shipping cost (free if subtotal >= Rp 500,000)
- Calculate final payment amount

### Scholarship Eligibility Checker (`src/scholarshipEligibility.js`)
Determines student scholarship eligibility based on multiple criteria.

**Eligibility criteria:**
- Average score >= 80 AND Attendance >= 90%
- Family income <= Rp 5,000,000
- Active organization member

**Scholarship categories:**
- **Category A**: Income <= Rp 3,000,000 + all basic requirements
- **Category B**: Income <= Rp 5,000,000 + all basic requirements
- **Not Eligible**: Does not meet requirements

## Notes

- Case 1 has been archived and removed from the active workflow.
- The screenshots folder contains console output examples from the assignment tests.
- Each solution includes example data demonstrating the calculation logic.
