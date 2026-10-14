export default function TripSentinelCaseStudy() {
  return (
    <>
<div className="case-study-wrapper">

      
      <section
        className="case-study section-base section-divider section-divider--bowtie"
      >

        <a href="/en/projects" className="back-link">
          ← All projects
        </a>

        <div className="container">

          <h1>TripSentinel</h1>

          <p className="lede">
            Personal Safety Check-In Application
          </p>

          <ul className="case-meta">
            <li>
              <strong>Industry:</strong>
              Personal Safety
            </li>

            <li>
              <strong>Type:</strong>
              Full-Stack Web Application
            </li>

            <li>
              <strong>Tech:</strong>
              Java, Spring Boot, React, MariaDB, Docker
            </li>
          </ul>

          <div className="case-actions">

            <a
              className="btn btn-primary"
              href="https://github.com/Francesco-87/TripSentinel"
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
            TripSentinel is a privacy-focused personal safety application
            designed around planned-return verification.
          </p>

          <p>
            A user creates a check-in session before travelling, hiking,
            working alone, or entering another situation where someone
            should verify their safe return.
          </p>

          <p>
            Instead of relying on continuous location tracking,
            TripSentinel uses scheduled check-ins and human responder
            escalation when a user fails to confirm their return.
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
            Many personal safety applications depend on continuous
            location tracking or require the user to actively trigger
            an emergency alert.
          </p>

          <p>
            This creates several limitations:
          </p>

          <ul>
            <li>
              Continuous tracking can create unnecessary privacy concerns
            </li>

            <li>
              A user may be unable to trigger an emergency alert
            </li>

            <li>
              Automated alerts may lack human context
            </li>

            <li>
              Friends or family may need manual arrangements
            </li>

            <li>
              Existing solutions may provide more monitoring than needed
            </li>
          </ul>

          <p>
            The challenge was to design a system that:
          </p>

          <ul>
            <li>
              Verifies planned returns without continuous surveillance
            </li>

            <li>
              Supports scheduled safety check-ins
            </li>

            <li>
              Escalates missed check-ins to a human responder
            </li>

            <li>
              Stores only information relevant to each session
            </li>

            <li>
              Maintains clear responsibility between users and responders
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
            TripSentinel uses a layered full-stack architecture with
            separate application, persistence, and presentation concerns.
          </p>

          <div className="grid-cards">

            <div className="card">
              <h4>Backend</h4>

              <ul>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>REST API architecture</li>
                <li>Service and repository layers</li>
                <li>DTO and mapper separation</li>
              </ul>
            </div>


            <div className="card">
              <h4>Database</h4>

              <ul>
                <li>MariaDB</li>
                <li>Relational data model</li>
                <li>Flyway migrations</li>
                <li>Hibernate validation</li>
              </ul>
            </div>


            <div className="card">
              <h4>Frontend & Deployment</h4>

              <ul>
                <li>React</li>
                <li>Docker</li>
                <li>Docker Compose</li>
                <li>Environment-based configuration</li>
              </ul>
            </div>

          </div>

          <p>
            The structure keeps business rules separate from HTTP,
            persistence, and presentation logic.
          </p>


          
          <h3>Domain Design</h3>

          <div className="grid-cards">

            <div className="card">

              <h4>
                Core entities
              </h4>

              <ul>
                <li>Users</li>
                <li>Roles</li>
                <li>Responder availability</li>
                <li>Check-in sessions</li>
                <li>Check-in methods</li>
                <li>Session events</li>
              </ul>

            </div>


            <div className="card">

              <h4>
                Core relationships
              </h4>

              <ul>
                <li>Users can hold multiple roles</li>
                <li>Responders define availability windows</li>
                <li>Sessions connect customers and responders</li>
                <li>Sessions support multiple check-in methods</li>
                <li>Session events provide an activity history</li>
              </ul>

            </div>

          </div>

          <p>
            The data model supports both operational session management
            and an auditable history of important session events.
          </p>


          
          <h3>Check-In Session Model</h3>

          <p>
            Each safety session represents a defined period during which
            a user is expected to confirm their safe return.
          </p>

          <div className="grid-cards">

            <div className="card">

              <h4>Session Information</h4>

              <ul>
                <li>Start time</li>
                <li>Expected return time</li>
                <li>Latest allowed check-in time</li>
                <li>Location description</li>
                <li>Important session notes</li>
                <li>Selected check-in methods</li>
              </ul>

            </div>


            <div className="card">

              <h4>Session Lifecycle</h4>

              <ul>
                <li>Planned</li>
                <li>Active</li>
                <li>Checked in</li>
                <li>Missed</li>
                <li>Escalated</li>
                <li>Cancelled</li>
              </ul>

            </div>

          </div>


          
          <h3>Human Responder Model</h3>

          <p>
            TripSentinel introduces a responder role rather than relying
            entirely on automated emergency handling.
          </p>

          <p>
            Responders can define availability periods that determine
            when they are available to handle safety sessions.
          </p>

          <div className="grid-cards">

            <div className="card">

              <h4>Customer</h4>

              <ul>
                <li>Create safety sessions</li>
                <li>Select check-in methods</li>
                <li>Provide session-specific information</li>
                <li>Confirm safe return</li>
              </ul>

            </div>


            <div className="card">

              <h4>Responder</h4>

              <ul>
                <li>Maintain availability windows</li>
                <li>Support assigned safety sessions</li>
                <li>Handle missed check-ins</li>
                <li>Escalate when required</li>
              </ul>

            </div>


            <div className="card">

              <h4>Administrator</h4>

              <ul>
                <li>Manage users</li>
                <li>Manage roles</li>
                <li>Manage system data</li>
                <li>Support operational administration</li>
              </ul>

            </div>

          </div>


          
          <h3>Privacy by Design</h3>

          <p>
            TripSentinel is intentionally not designed as a live
            surveillance or continuous GPS tracking application.
          </p>

          <ul>
            <li>
              Location can be stored as a simple description
            </li>

            <li>
              Information is connected to individual safety sessions
            </li>

            <li>
              Continuous user location monitoring is not required
            </li>

            <li>
              Human escalation remains part of the safety workflow
            </li>
          </ul>

          <p>
            This keeps the system focused on confirming a user's safe
            return rather than monitoring their movements.
          </p>


          
          <h3>Session Event Tracking</h3>

          <p>
            Important actions are represented as session events.
          </p>

          <div className="grid-cards">

            <div className="card">

              <h4>Tracked Events</h4>

              <ul>
                <li>Session created</li>
                <li>Reminder sent</li>
                <li>Check-in received</li>
                <li>Check-in missed</li>
                <li>Escalation triggered</li>
                <li>Escalation confirmed</li>
                <li>Session cancelled</li>
              </ul>

            </div>


            <div className="card">

              <h4>Purpose</h4>

              <ul>
                <li>Preserve session history</li>
                <li>Separate events from current session state</li>
                <li>Support future escalation workflows</li>
                <li>Improve traceability</li>
              </ul>

            </div>

          </div>

        </div>
      </section>


      
      <section className="case-outcome section-base">

        <div className="container">

          <h2 className="section-title">
            Current State
          </h2>

          <p>
            TripSentinel is currently under active development.
          </p>

          <h3>
            The current implementation includes:
          </h3>

          <ul>
            <li>
              Relational database schema and Flyway migrations
            </li>

            <li>
              User and role management
            </li>

            <li>
              Responder availability management
            </li>

            <li>
              Check-in session domain model
            </li>

            <li>
              Configurable check-in methods
            </li>

            <li>
              Session event tracking
            </li>

            <li>
              DTO and mapper layers
            </li>

            <li>
              Service-layer architecture
            </li>

            <li>
              Controller and integration testing
            </li>

            <li>
              Docker-based local environment
            </li>
          </ul>


          <h3>
            Technical focus
          </h3>

          <ul>
            <li>Domain-driven relational modeling</li>
            <li>REST API design</li>
            <li>Layered backend architecture</li>
            <li>Database migration management</li>
            <li>Validation and exception handling</li>
            <li>Role-based system design</li>
            <li>Automated testing</li>
            <li>Containerized development environment</li>
          </ul>


          <h3>
            Project Goal
          </h3>

          <p>
            The goal is to build a complete safety workflow from session
            creation through check-in verification and, when necessary,
            human escalation.
          </p>

        </div>
      </section>

    </div>
    </>
  )
}
