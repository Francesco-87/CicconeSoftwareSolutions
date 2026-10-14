# Ciccone Software Solutions

## Overview

Ciccone Software Solutions is a personal software development website built to present services, projects, and case studies in a structured web portfolio.

The site is built with React and Vite. The main portfolio keeps a shared header and footer while rendering one selected page at a time. Each project case study also mounts a React page at its existing static URL.

The project focuses on responsive design, structured content organization, project presentation, deployment workflow, and maintainable frontend architecture.

---

## Project Context

* Type: Personal / Business Website
* Platform: Web
* Architecture: Static React pages with locale-prefixed routes and standalone case-study URLs
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

The main portfolio uses React Router with locale-prefixed paths (`/en`, `/en/about`, `/en/services`, `/en/projects`, and `/en/contact`). The root URL redirects to `/en`, and existing hash links such as `/#about` redirect to their corresponding route. English is currently the only routed locale; add a locale when its translated content is ready. Azure Static Web Apps uses `public/staticwebapp.config.json` to serve the app shell for client-side routes while excluding assets and standalone case studies from the fallback. Each case study remains a Vite static entry point with its own URL and shared site shell.

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

`App.jsx` defines the locale-prefixed routes and shared page layout. Each main-site view is a separate React component in `pages/`; the reusable header and footer live in `components/SiteShell.jsx`. Each case study has a static entry file and a separate JSX component under its project folder.

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
* Azure Static Web Apps
* Custom domain

### Azure Application Insights

The Azure Static Web Apps build can send basic page-view telemetry to Application Insights. Set `VITE_APPINSIGHTS_CONNECTION_STRING` in a local `.env.local` file for local builds, or configure a GitHub Actions repository secret with that name for the Azure workflow. The workflow injects the secret only into its build-and-deploy job. If it is absent, the site still builds and runs without telemetry.

The connection string is included in the browser bundle because this is client-side telemetry; it is not an authorization credential. Keep the separate Static Web Apps deployment token in its existing GitHub secret and never put that token in a Vite variable.

The integration tracks page views for the main routed views and project case studies. It omits query strings and fragments, and disables cookies, local/session storage, dependency (XHR/fetch), exception, and automatic performance telemetry. Automatic route tracking is off; main-site navigation is tracked manually. The telemetry initializer allows only page-view events, removes referrers and identifying context fields, and strips custom properties and measurements.

To inspect counts and paths, open the Application Insights resource in Azure and use **Logs**:

```kusto
pageViews
| summarize PageViews = count() by Day = startofday(timestamp)
| order by Day desc
```

```kusto
pageViews
| summarize PageViews = count() by Month = startofmonth(timestamp)
| order by Month desc
```

```kusto
pageViews
| summarize PageViews = count() by Url = tostring(url)
| order by PageViews desc
```

Application Insights is not anonymous by default in every respect. The browser SDK avoids persistent client storage and its telemetry initializer removes standard user, session, device, IP, and operation identifiers from the event, but Azure ingestion can still process the network source IP to derive location before storing telemetry. This integration cannot guarantee that no IP-derived data is processed or eliminate all fingerprinting by the browser/network. Before production use, complete the applicable GDPR review: establish and document a lawful basis, update the privacy notice and retention policy, assess consent requirements for the relevant jurisdictions, and verify Azure data residency/access controls and any IP/location processing settings for the resource.

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
