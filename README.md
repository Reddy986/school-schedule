# 6th Grade School Schedule Website

A simple website to check school end times for 6th graders in Fremont Unified School District, plus local Fremont news.

## Features
- Interactive date picker to check school end times
- Automatic detection of Wednesdays as Minimum Days
- Special dates (block schedule, last day of school)
- Latest news from Fremont and FUSD

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
- `index.html` - Main school schedule page
- `schedule-styles.css` - Styling for the schedule page
- `personal.html` - Your personal website
- `styles.css` - Styling for the personal page

## Updating News
Edit the news section in `index.html` (lines 36-64) to update news stories.
