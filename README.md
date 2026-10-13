# Ciccone Software Solutions

## Overview

Ciccone Software Solutions is a personal software development website built to present services, projects, and case studies in a structured web portfolio.

The site is built with React and Vite. The main portfolio keeps a shared header and footer while rendering one selected page at a time; project case studies remain separate static pages.

The project focuses on responsive design, structured content organization, project presentation, deployment workflow, and maintainable frontend architecture.

---

## Project Context

* Type: Personal / Business Website
* Platform: Web
* Architecture: Static React single-page portfolio plus static case-study pages
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

* Booking and Registry System
* Mobile Goal Tracker

These pages provide more detailed project information than a simple project list.

---

## Technical Architecture

The main portfolio is rendered by React without a client-side routing library. Hashes (`/#about`, `/#services`, `/#projects`, and `/#contact`) select which page content React renders between the shared header and footer. Project case studies remain separate HTML entry points, so direct links and refreshes continue to work on static hosting.

```text
src/
│
├── App.jsx
├── main.jsx
├── index.html
├── data/
│   └── projects.json
├── projects/
│   └── <case-study>/
│       └── index.html
└── resources/
    └── css/
```

The React app owns the shared header, footer, portfolio sections, contact form, and project cards. Case studies retain their own static HTML entries and share the existing CSS and public assets.

---

## Project Structure

```text
src/
│
├── App.jsx
├── main.jsx
├── index.html
├── data/
│   └── projects.json
├── projects/
│   ├── booking-admin-dashboard/
│   │   └── index.html
│   ├── booking-and-registry-system/
│   │   └── index.html
│   ├── mobile-goal-tracker/
│   │   └── index.html
│   └── tripsentinel/
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

Vite builds the React portfolio and the separate static case-study pages.

The application includes:

* Main entry page
* Dedicated project case-study pages
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

* Dedicated HTML files for pages
* Shared JavaScript resources
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
