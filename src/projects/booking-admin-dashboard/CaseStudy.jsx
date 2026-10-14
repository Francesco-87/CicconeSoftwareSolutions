import TranslatedMarkup from '../../components/TranslatedMarkup.jsx'
import { getProjectsHref } from '../localePaths.js'

export default function BookingAdminDashboardCaseStudy() {
  return (
    <TranslatedMarkup>
    <>
<div className="case-study-wrapper">

      
      <section
        className="case-study section-base section-divider section-divider--bowtie"
      >

        <a         href={getProjectsHref()} className="back-link">
          ← All projects
        </a>

        <div className="container">

          <h1>Booking & Operations Admin Dashboard</h1>

          <p className="lede">
            Full-Stack Booking Management Application
          </p>

          <ul className="case-meta">

            <li>
              <strong>Industry:</strong>
              Business Operations
            </li>

            <li>
              <strong>Type:</strong>
              Full-Stack Web Application
            </li>

            <li>
              <strong>Tech:</strong>
              Java, Spring Boot, React, PostgreSQL, Docker
            </li>

          </ul>

          <div className="case-actions">

            <a
              className="btn btn-primary"
              href="YOUR_GITHUB_REPOSITORY_URL"
              target="_blank"
              rel="noopener"
            >
              View GitHub Repo
            </a>

          </div>

        </div>
      </section>


      
      <section
        className="case-overview section-base section-divider section-divider--lr"
      >

        <div className="container">

          <h2 className="section-title">
            Overview
          </h2>

          <p>
            The Booking & Operations Admin Dashboard is a full-stack
            application for managing bookings, services, staff,
            customers, and operational data through one centralized
            system.
          </p>

          <p>
            The application supports both registered customers and guest
            bookings while giving administrators structured control over
            the resources required to manage daily booking operations.
          </p>

          <p>
            The project focuses on the business logic behind real-world
            scheduling rather than only providing a basic CRUD interface.
          </p>

        </div>
      </section>


      
      <section
        className="case-challenge section-base section-divider section-divider--rl"
      >

        <div className="container">

          <h2 className="section-title">
            Challenge
          </h2>

          <p>
            Booking systems need to coordinate several connected resources
            at the same time.
          </p>

          <p>
            Common operational problems include:
          </p>

          <ul>
            <li>
              Conflicting bookings for the same staff member
            </li>

            <li>
              Services with different durations and requirements
            </li>

            <li>
              Managing both registered and guest customers
            </li>

            <li>
              Keeping staff and customer records synchronized
            </li>

            <li>
              Maintaining consistent booking data across the system
            </li>
          </ul>

          <p>
            The challenge was to build a system that:
          </p>

          <ul>
            <li>
              Centralizes booking administration
            </li>

            <li>
              Prevents overlapping reservations
            </li>

            <li>
              Associates bookings with services and staff
            </li>

            <li>
              Supports registered and guest customers
            </li>

            <li>
              Provides clear administrative workflows
            </li>

            <li>
              Keeps business rules inside the backend
            </li>
          </ul>

        </div>
      </section>


      
      <section
        className="case-solution section-base section-divider section-divider--lr"
      >

        <div className="container">

          <h2 className="section-title">
            Solution
          </h2>


          
          <h3>Architecture</h3>

          <p>
            The application uses a separated frontend, backend, and
            relational database architecture.
          </p>

          <div className="grid-cards">

            <div className="card">

              <h4>Frontend</h4>

              <ul>
                <li>React</li>
                <li>Vite</li>
                <li>Administrative dashboard views</li>
                <li>Dynamic forms and filtered data</li>
              </ul>

            </div>


            <div className="card">

              <h4>Backend</h4>

              <ul>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>REST API</li>
                <li>Service-layer business logic</li>
                <li>DTO-based request and response handling</li>
              </ul>

            </div>


            <div className="card">

              <h4>Database & Environment</h4>

              <ul>
                <li>PostgreSQL</li>
                <li>Flyway migrations</li>
                <li>Docker Compose</li>
                <li>Relational persistence</li>
              </ul>

            </div>

          </div>

          <p>
            Business rules remain in the backend instead of being
            dependent on frontend validation.
          </p>


          
          <h3>Domain Design</h3>

          <div className="grid-cards">

            <div className="card">

              <h4>Core Entities</h4>

              <ul>
                <li>Users</li>
                <li>Staff profiles</li>
                <li>Services</li>
                <li>Bookings</li>
              </ul>

            </div>


            <div className="card">

              <h4>Relationships</h4>

              <ul>
                <li>Bookings reference a service</li>
                <li>Bookings reference assigned staff</li>
                <li>Bookings track their creator</li>
                <li>Bookings can reference registered customers</li>
                <li>Guest bookings use fallback customer information</li>
              </ul>

            </div>

          </div>

          <p>
            This model separates authentication data, staff-specific
            information, bookable services, and reservation data.
          </p>


          
          <h3>Booking Logic</h3>

          <p>
            Booking creation requires more than storing a date and time.
            The backend validates whether the requested reservation is
            operationally valid.
          </p>

          <div className="grid-cards">

            <div className="card">

              <h4>Validation</h4>

              <ul>
                <li>Service selection</li>
                <li>Staff assignment</li>
                <li>Booking start time</li>
                <li>Booking duration</li>
                <li>Time overlap detection</li>
                <li>Cancellation rules</li>
              </ul>

            </div>


            <div className="card">

              <h4>Customer Handling</h4>

              <ul>
                <li>Registered customer bookings</li>
                <li>Guest customer fallback</li>
                <li>Creator tracking</li>
                <li>Customer information management</li>
              </ul>

            </div>

          </div>

          <p>
            Centralizing these rules ensures that invalid bookings cannot
            bypass validation through the frontend.
          </p>


          
          <h3>Administrative Dashboard</h3>

          <p>
            The React frontend provides dedicated administrative views
            for the main operational areas.
          </p>

          <div className="grid-cards">

            <div className="card">

              <h4>Bookings</h4>

              <ul>
                <li>Create bookings</li>
                <li>View booking data</li>
                <li>Filter booking lists</li>
                <li>Handle registered customers</li>
                <li>Handle guest customers</li>
              </ul>

            </div>


            <div className="card">

              <h4>Services</h4>

              <ul>
                <li>Create services</li>
                <li>Update service information</li>
                <li>Manage bookable offerings</li>
              </ul>

            </div>


            <div className="card">

              <h4>Staff</h4>

              <ul>
                <li>Manage staff profiles</li>
                <li>Associate staff with bookings</li>
                <li>Maintain operational staff data</li>
              </ul>

            </div>


            <div className="card">

              <h4>Users</h4>

              <ul>
                <li>Manage user records</li>
                <li>Maintain customer information</li>
                <li>Support administrative account workflows</li>
              </ul>

            </div>

          </div>


          
          <h3>Business Rules</h3>

          <p>
            A central goal of the project was moving important booking
            decisions into explicit backend logic.
          </p>

          <ul>
            <li>
              Staff cannot receive overlapping bookings
            </li>

            <li>
              Booking duration is connected to the selected service
            </li>

            <li>
              Referenced users, services, and staff must exist
            </li>

            <li>
              Registered and guest bookings follow different customer
              handling paths
            </li>

            <li>
              Cancellation is handled as part of the booking lifecycle
            </li>
          </ul>

          <p>
            This creates predictable behavior regardless of which client
            consumes the API.
          </p>


          
          <h3>Database Design</h3>

          <p>
            PostgreSQL stores the operational data using a relational
            schema managed through Flyway migrations.
          </p>

          <div className="grid-cards">

            <div className="card">

              <h4>Data Structure</h4>

              <ul>
                <li>User accounts</li>
                <li>Staff-specific profiles</li>
                <li>Service definitions</li>
                <li>Booking records</li>
              </ul>

            </div>


            <div className="card">

              <h4>Design Goals</h4>

              <ul>
                <li>Referential integrity</li>
                <li>Clear entity responsibility</li>
                <li>Repeatable database migrations</li>
                <li>Maintainable schema evolution</li>
              </ul>

            </div>

          </div>

        </div>
      </section>


      
      <section className="case-outcome section-base">

        <div className="container">

          <h2 className="section-title">
            Outcome
          </h2>

          <p>
            The result is a working full-stack administration application
            that connects booking workflows with staff, services, and
            customer management.
          </p>

          <h3>
            The application currently supports:
          </h3>

          <ul>
            <li>
              End-to-end booking management
            </li>

            <li>
              Service administration
            </li>

            <li>
              User administration
            </li>

            <li>
              Staff profile management
            </li>

            <li>
              Registered customer bookings
            </li>

            <li>
              Guest bookings
            </li>

            <li>
              Booking overlap validation
            </li>

            <li>
              Booking cancellation handling
            </li>

            <li>
              Filtered administrative views
            </li>

            <li>
              PostgreSQL persistence
            </li>

            <li>
              Docker-based development environment
            </li>
          </ul>


          <h3>
            Technical Highlights
          </h3>

          <ul>
            <li>Java and Spring Boot REST API</li>
            <li>React administrative frontend</li>
            <li>PostgreSQL relational database</li>
            <li>Flyway database migrations</li>
            <li>Service-layer business rules</li>
            <li>DTO-based API boundaries</li>
            <li>Booking conflict validation</li>
            <li>Guest and registered customer workflows</li>
            <li>Docker Compose environment</li>
            <li>Frontend–backend integration</li>
          </ul>


          <h3>Project Purpose</h3>

          <p>
            The project demonstrates how a typical booking application
            becomes an operational system once scheduling rules,
            resource relationships, customer variations, and
            administrative workflows are handled together.
          </p>

        </div>
      </section>

    </div>
    </>
    </TranslatedMarkup>
  )
}
