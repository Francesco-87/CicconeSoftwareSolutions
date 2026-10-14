export default function BookingAndRegistryCaseStudy() {
  return (
    <>

  <div className="case-study-wrapper">
      <section className="case-study section-base section-divider section-divider--bowtie">
        <a href="/en/projects" className="back-link">← All projects</a>

        <div className="container">
          
          <h1>Booking & Registration System</h1>
          <p className="lede">Full-Stack Web Application</p>

          <ul className="case-meta">
            <li><strong>Industry:</strong> Services</li>
            <li><strong>Type:</strong> Booking system</li>
            <li><strong>Tech:</strong> HTML, CSS, JavaScript</li>
          </ul>

          <div className="case-actions">
          <a className="btn btn-primary" href="https://github.com/Francesco-87/booking_reg_system_client" target="_blank" rel="noopener">
          View Client Repo
          </a>
          <a className="btn btn-secondary" href="https://github.com/Francesco-87/booking_reg_system_server" target="_blank" rel="noopener">
          View Server Repo
            </a>
          </div>
          
        </div>
      </section>

  

      <section className="case-overview section-base section-divider section-divider--lr">
        <div className="container">
          <h2 className="section-title">Overview</h2>
          <p>
          I designed and implemented a full-stack booking and registration system that enables customers to manage meal bookings and dietary preferences, while providing operational staff with structured and aggregated data for planning and preparation.
          </p>
        <p>
          The system replaces manual scheduling processes with a centralized, data-driven solution.
          </p>
        </div>      
      </section>

  
      <section className="case-hero-section section-base section-divider section-divider--rl">
        <div className="container">
          <h2 className="section-title">Images</h2>
            <div className="case-hero">
              <figure>
                <img
                  src="/img/chef_01.webp"
                  srcSet="
                    /img/chef_01_400.webp 400w,
                    /img/chef_01_800.webp 800w,
                    /img/chef_01.webp 1600w
                  "
                  sizes="(max-width: 600px) 90vw, (max-width: 1024px) 70vw, 800px"
                  alt="Booking system Chef login interface"
                  loading="lazy"
                  decoding="async" />
                <figcaption>Chef login interface</figcaption>
              </figure>

              <figure>
                <img
                  src="/img/chef_02.webp"
                  srcSet="
                    /img/chef_02_400.webp 400w,
                    /img/chef_02_800.webp 800w,
                    /img/chef_02.webp 1600w
                  "
                  sizes="(max-width: 600px) 90vw, (max-width: 1024px) 70vw, 800px"
                  alt="Booking system Chef dashboard interface"
                  loading="lazy"
                  decoding="async" />
                <figcaption>Chef dashboard overview</figcaption>
              </figure>

              <figure>
                <img
                  src="/img/client_01.webp"
                  srcSet="
                    /img/client_01_400.webp 400w,
                    /img/client_01_800.webp 800w,
                    /img/client_01.webp 1600w
                  "
                  sizes="(max-width: 600px) 90vw, (max-width: 1024px) 70vw, 800px"
                  alt="Booking system Client login interface"
                  loading="lazy"
                  decoding="async" />
                <figcaption>Client login interface</figcaption>
              </figure>

              <figure>
                <img
                  src="/img/client_02.webp"
                  srcSet="
                    /img/client_02_400.webp 400w,
                    /img/client_02_800.webp 800w,
                    /img/client_02.webp 1600w
                  "
                  sizes="(max-width: 600px) 90vw, (max-width: 1024px) 70vw, 800px"
                  alt="Booking system Client dashboard interface"
                  loading="lazy"
                  decoding="async" />
                <figcaption>Client dashboard overview</figcaption>
              </figure>

            </div>      
          </div>
          
      </section>

  
  <section className="case-challenge section-base section-divider section-divider--lr">
    <div className="container">
      <h2 className="section-title">Challenge</h2>

      <p>
        Companies in the food and service industry often handle meal registrations and dietary requirements manually
        <br />This leads to:
      </p>

      <ul>
        <li>Incomplete allergy tracking</li>
        <li>Scheduling conflicts</li>
        <li>Inefficient communication between customers and kitchen staff</li>
        <li>Food overproduction and waste</li>
      </ul>

      <p>
        The challenge was to build a system that:
      </p>

      <ul>
        <li>Stores structured customer data</li>
        <li>Tracks dietary restrictions and preferences</li>
        <li>Allows booking and cancellation of meals</li>
        <li>Provides summarized operational data for daily preparation</li>
      </ul>

      <p>
        The solution needed to be responsive, scalable, and maintain clear separation between frontend and backend logic.
      </p>
    </div>
  </section>

  <section className="case-solution section-base section-divider section-divider--rl">
    <div className="container">
      <h2 className="section-title">Solution</h2>

      <h3>Architecture</h3>

      <p>
        The application follows a classic full-stack architecture:
      </p>
    <div className="grid-cards" >
      <div className="card">
        <h4>Frontend</h4>
        <ul>
          <li>HTML / CSS</li>
          <li>Responsive UI</li>
          <li>Dynamic client-side behavior</li>
        </ul>
      </div>
      <div className="card">
        <h4>Backend</h4>
        <ul>
          <li>Node.js server</li>
          <li>REST-based communication</li>
          <li>Structured MySQL database</li>
        </ul>
      </div>
      <div className="card">
        <h4>Deployment</h4>
        <ul>
          <li>Docker-based containerization</li>
        </ul>
      </div>
    </div>
      <p>
        This separation ensures maintainability and clear responsibility between presentation, business logic, and persistence layers.
      </p>

      <h3>Database Design</h3>
      <div className="grid-cards">
       <div className="card">
      <h4>
        The relational database was structured around core entities:
      </h4>

      <ul>
        <li>Customers</li>
        <li>Organizers / Staff</li>
        <li>Bookings</li>
        <li>Allergens</li>
        <li>Menus</li>
      </ul>
      </div>
        <div className="card">
      <h4>
        The system supports:
      </h4>

      <ul>
        <li>Role-based access (customer vs. organizer)</li>
        <li>CRUD operations across all main entities</li>
        <li>Query-based aggregation for daily summaries</li>
      </ul>
        </div>
      </div>
      <p>
        The data model allows both individual-level insight (single customer preferences) and aggregated operational insight (daily allergen totals).
      </p>

      <h3>Key Features</h3>
      <div className="grid-cards">
       <div className="card">
      <h4>Customer</h4>
      <ul>
        <li>Account creation and management</li>
        <li>Allergen and dietary preference selection</li>
        <li>Meal booking and cancellation</li>
        <li>Personal data updates</li>
      </ul>
      </div>
       <div className="card">

      <h4>Organizer / Staff</h4>
      <ul>
        <li>View filtered booking lists</li>
        <li>Access summarized allergen data</li>
        <li>Manage menus</li>
        <li>Retrieve structured operational overviews</li>
      </ul>
       </div>
      </div>
    </div>
  </section>

  <section className="case-outcome section-base">
    <div className="container">
      <h2 className="section-title">Outcome</h2>

      <h3>
        The result is a fully functioning full-stack application that:
      </h3>

      <ul>
        <li>Centralizes booking and dietary data</li>
        <li>Reduces communication overhead</li>
        <li>Improves preparation accuracy</li>
        <li>Supports operational planning through aggregated insights</li>
      </ul>

      <h3>
        The system demonstrates:
      </h3>

      <ul>
        <li>End-to-end CRUD functionality</li>
        <li>Structured relational database modeling</li>
        <li>Backend–frontend integration</li>
        <li>Clean separation of concerns</li>
        <li>Deployment-ready architecture</li>
      </ul>

      <h3>Technical Highlights</h3>
      <ul>
        <li>REST API design</li>
        <li>Role-based views</li>
        <li>Relational schema modeling</li>
        <li>Dynamic UI interactions</li>
        <li>Docker container deployment</li>
        <li>Version-controlled development workflow</li>
      </ul>
    </div>
  </section>
  </div>
    </>
  )
}
