# Ciccone Software Solutions

## Overview

Ciccone Software Solutions is a personal software development website built to present services, projects, and case studies in a structured web portfolio.

The site was developed as a custom frontend project using Vite, HTML, CSS, and JavaScript. It functions as both a professional portfolio and a central presentation page for selected software projects.

The project focuses on responsive design, structured content organization, project presentation, deployment workflow, and maintainable frontend architecture.

---

## Project Context

* Type: Personal / Business Website
* Platform: Web
* Architecture: Multi-page Website
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

The project uses a Vite-based multi-page frontend architecture.

```text
src/
│
├── index.html
├── pages/
├── projects/
├── data/
└── resources/
```

Content is separated into page files, project data, project case studies, and shared frontend resources.

---

## Project Structure

```text
src/
│
├── index.html
│
├── data/
│   └── projects.json
│
├── pages/
│   ├── about.html
│   ├── contact.html
│   ├── home.html
│   ├── projects.html
│   └── services.html
│
├── projects/
│   ├── booking-and-registry-system/
│   │   └── index.html
│   │
│   └── mobile-goal-tracker/
│       └── index.html
│
└── resources/
    ├── css/
    │   ├── about.css
    │   ├── case-study.css
    │   ├── contact.css
    │   ├── global.css
    │   ├── home.css
    │   ├── projects.css
    │   ├── services.css
    │   ├── styles.css
    │   └── variables.css
    │
    └── js/
        ├── main.js
        └── projects.js
```

---

## Dynamic Project Content

Project overview content is stored in:

```text
src/data/projects.json
```

JavaScript is used to load and render project information dynamically on the projects page.

This approach keeps project data separate from page structure and makes the project list easier to update.

---

## Multi-Page Build Setup

The Vite configuration supports a multi-page structure.

The application includes:

* Main entry page
* Static content pages
* Dedicated project case-study pages
* Dynamic project entries based on project folders

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

* Multi-page frontend development
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
