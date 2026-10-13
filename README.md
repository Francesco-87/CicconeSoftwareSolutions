# Ciccone Software Solutions

## Overview

Ciccone Software Solutions is a personal software development website built to present services, projects, and case studies in a structured web portfolio.

The site is built with React and Vite. The main portfolio keeps a shared header and footer while rendering one selected page at a time. Each project case study also mounts a React page at its existing static URL.

The project focuses on responsive design, structured content organization, project presentation, deployment workflow, and maintainable frontend architecture.

---

## Project Context

* Type: Personal / Business Website
* Platform: Web
* Architecture: Static React pages with hash-selected portfolio views and standalone case-study URLs
* Build Tool: Vite
* Purpose: Portfolio, project showcase, and service presentation

---

## Project Goals

The main goals of this project were to:

* Build a professional web presence
* Present software services clearly
* Showcase selected development projects
* Create structured project case-study pages
* Practice maintainable frontend architecture
* Implement a modern build and deployment workflow
* Use a custom domain for a professional presentation

---

## Features

### Home Page

Introduces the website and provides entry points to the main sections.

### About Page

Presents background information and professional context.

### Services Page

Describes offered software-related services and areas of focus.

### Projects Page

Displays selected projects using structured project data.

### Contact Page

Provides contact information and communication options.

### Project Case Studies

The website includes dedicated project pages for selected projects, including:

* Booking & Operations Admin Dashboard
* Booking and Registry System
* Mobile Goal Tracker
* TripSentinel

These pages provide more detailed project information than a simple project list.

---

## Technical Architecture

The main portfolio is rendered by React without a client-side routing library. Hashes (`/#about`, `/#services`, `/#projects`, and `/#contact`) select which page content React renders between the shared header and footer. Each case study is a Vite static entry point that mounts a shared React shell and its own JSX component at the existing URL.

```text
src/
│
├── App.jsx
├── case-study.jsx
├── components/
│   └── SiteShell.jsx
├── main.jsx
├── index.html
├── data/
│   └── projects.json
├── pages/
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── HomePage.jsx
│   ├── ProjectsPage.jsx
│   └── ServicesPage.jsx
├── projects/
│   └── <case-study>/
│       ├── CaseStudy.jsx
│       └── index.html
└── resources/
    └── css/
```

`App.jsx` selects the active portfolio page and owns no page markup. Each main-site view is a separate React component in `pages/`; the reusable header and footer live in `components/SiteShell.jsx`. Each case study has a static entry file and a separate JSX component under its project folder.

---

## Project Structure

```text
src/
│
├── App.jsx
├── case-study.jsx
├── components/
│   └── SiteShell.jsx
├── main.jsx
├── index.html
├── data/
│   └── projects.json
├── pages/
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── HomePage.jsx
│   ├── ProjectsPage.jsx
│   └── ServicesPage.jsx
├── projects/
│   ├── booking-admin-dashboard/
│   │   ├── CaseStudy.jsx
│   │   └── index.html
│   ├── booking-and-registry-system/
│   │   ├── CaseStudy.jsx
│   │   └── index.html
│   ├── mobile-goal-tracker/
│   │   ├── CaseStudy.jsx
│   │   └── index.html
│   └── tripsentinel/
│       ├── CaseStudy.jsx
│       └── index.html
└── resources/
    └── css/
```

---

## Dynamic Project Content

Project overview content is stored in:

```text
src/data/projects.json
```

React renders project cards from the JSON data on the projects section.

This approach keeps project data separate from page structure and makes the project list easier to update.

---

## Multi-Page Build Setup

Vite builds the React portfolio and a React-rendered static entry for each case study.

The application includes:

* Main entry page
* Dedicated React-mounted project case-study pages
* Project case-study entry points discovered from project folders

This allows the site to behave like a traditional multi-page website while still using modern frontend tooling.

---

## Technology Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Build Tooling

* Vite
* npm

### Development Tools

* Git
* GitHub
* VS Code

### Deployment

* GitHub Pages
* Custom domain

---

## Design and Maintainability

The project separates concerns through:

* One React component per main portfolio view in `src/pages/`
* Shared site chrome in `src/components/`
* Separate React JSX components for each case study
* Page-specific CSS files
* Global styling
* CSS variables
* Structured project data
* Separate project case-study pages

This structure makes the website easier to maintain and extend as new projects are added.

---

## Running the Project

### Prerequisites

* Node.js
* npm

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Run Browser Smoke Tests

The Playwright smoke tests check main-page navigation and browser history, direct loading of each case study, page metadata, shared layout, and case-study images. Build the site before running them:

```bash
npx playwright install chromium
npm test
```

The GitHub Pages workflow runs these tests after the production build and before uploading the site for deployment.

### Preview Production Build

```bash
npm run preview
```

---

## Learning Outcomes

This project demonstrates practical experience with:

* React component-based frontend development
* Hash-based page selection without a routing library
* Vite configuration
* JavaScript-based dynamic content loading
* Structured project data management
* Responsive web design
* CSS organization
* CSS variables
* Project case-study presentation
* GitHub Pages deployment
* Custom domain setup
* Portfolio website development
* Maintainable frontend architecture

---

## Future Improvements

Potential future improvements include:

* Additional project case studies
* Stronger accessibility testing
* More detailed service pages
* Contact form backend integration
* Further SEO improvements
* Automated deployment refinements

The project is intended to evolve as new portfolio projects and services are added.
