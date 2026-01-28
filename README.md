# Warm Springs - Community Hub

A community website for 6th grade families in Fremont with school schedules, carpool coordination, weather, local news, and government budget transparency.

## Features

### School Schedule Page (index.html)
- Interactive date picker to check school end times
- Automatic detection of Wednesdays as Minimum Days
- Special dates (block schedule, last day of school)
- Daily carpool drop-off and pickup information
- Current weather and clothing recommendations
- Latest news from Fremont and FUSD
- Parenting tips for 6th grade parents

### Government Budget Page (budget.html)
- Interactive visualization of Fremont's $392.4M FY 2025-26 budget
- Three-level drill-down: Departments → Divisions → Line Items
- Click on any chart segment or table row to explore details
- Breadcrumb navigation to easily move between levels
- Official budget data from City of Fremont sources

## How to Deploy to Vercel

### Option 1: Using Vercel Website (Easiest)
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New" → "Project"
3. Drag and drop this entire folder OR connect to GitHub
4. Vercel will automatically detect the static site
5. Click "Deploy"
6. You'll get a URL like `your-project.vercel.app` to share!

### Option 2: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# In this directory, run:
vercel

# Follow the prompts
# Your site will be deployed!
```

## Files

### School Schedule
- `index.html` - Main school schedule page with carpool, weather, and news
- `schedule-styles.css` - Styling for the schedule page

### Budget Visualization
- `budget.html` - Interactive government spending visualization
- `budget-styles.css` - Styling for the budget page
- `budget-data.js` - FY 2025-26 budget data structure

### Personal Site
- `personal.html` - Personal website
- `styles.css` - Styling for the personal page

## Updating Content

### School Schedule
- Special dates and bell schedule are defined in `index.html` in the JavaScript section
- News articles: Edit the news section in `index.html` (around lines 40-70)
- Carpool schedule: Update the `carpoolSchedule` object in `index.html`

### Budget Data
- To update budget figures: Edit `budget-data.js`
- Department amounts, divisions, and line items are all in the `BUDGET_DATA` object
- Colors for each department can be customized in the same file

## How the Budget Visualization Works

1. **Level 1 - Departments**: Shows all 8 city departments (Police, Fire, Public Works, etc.)
2. **Level 2 - Divisions**: Click a department to see its divisions (e.g., Patrol Services, Investigation Services)
3. **Level 3 - Line Items**: Click a division to see expense categories (Salaries, Equipment, etc.)
4. **Navigation**: Use breadcrumbs at the top or click "All Departments" to go back to the overview

The visualization uses Chart.js for interactive doughnut charts and includes a detailed data table below each chart.
