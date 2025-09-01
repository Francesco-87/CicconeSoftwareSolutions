(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const l=`<div class="home-page">\r
    <!-- 1. Hero -->\r
    <section class="hero" id="hero">\r
        <div class="hero-content">\r
            <h1>Build Your Digital Presence in Days, Not Weeks</h1>\r
            <p>I handle domains, hosting, design and deployment—so you focus on running your business.</p>\r
            <a ref="#" data-page="projects">View Portfolio</a>\r
        </div>\r
    </section>\r
\r
    <!-- 2. What I Do -->\r
    <section class="services" id="services">\r
        <h2 class="services-title">What I Do</h2>\r
        <ul class="services-list">\r
            <li class="services-card">Domain &amp; Email Setup</li>\r
            <li class="services-card">Secure Static Hosting &amp; SSL</li>\r
            <li class="services-card">Brand &amp; Logo Design</li>\r
            <li class="services-card">Responsive Multi-Language Builds</li>\r
        </ul>\r
    </section>\r
\r
\r
    <section class="tech-stack">\r
        <div class="container">\r
            <h2>My Tech Stack</h2>\r
            <div class="tech-items">\r
                <div class="tech-item">\r
                    <img src="img/js.svg" alt="JavaScript logo" class="tech-icon">\r
                    <span class="tech-label">JavaScript</span>\r
                </div>\r
                <div class="tech-item">\r
                    <img src="img/react-js.svg" alt="React logo" class="tech-icon" >\r
                    <span class="tech-label">React</span>\r
                </div>\r
                <div class="tech-item">\r
                    <img src="img/node_js.svg" alt="Node.js logo" class="tech-icon" >\r
                    <span class="tech-label">Node.js</span>\r
                </div>\r
                <div class="tech-item">\r
                    <img src="img/html.svg" alt="HTML logo" class="tech-icon">\r
                    <span class="tech-label">HTML</span>\r
                </div>\r
                <div class="tech-item">\r
                    <img src="/img/css.svg" alt="CSS logo" class="tech-icon">\r
                    <span class="tech-label">CSS</span>\r
                </div>\r
                <div class="tech-item">\r
                    <img src="img/MySQL.svg" alt="SQL logo" class="tech-icon" >\r
                    <span class="tech-label">MySQL</span>\r
                </div>\r
                <div class="tech-item">\r
                    <img src="img/mongodb.svg" alt="MongoDB logo" class="tech-icon icon-big" >\r
                    <span class="tech-label">MongoDB</span>\r
                </div>\r
                <div class="tech-item">\r
                    <img src="img/github.svg" alt="Git logo" class="tech-icon" >\r
                    <span class="tech-label">Git & GitHub</span>\r
                </div>\r
                <div class="tech-item">\r
                    <img src="img/java.svg" alt="Java logo" class="tech-icon" >\r
                    <span class="tech-label">Java</span>\r
                </div>\r
                <div class="tech-item">\r
                    <img src="img/azure.svg" alt="Azure logo" class="tech-icon" >\r
                    <span class="tech-label">Azure</span>\r
                </div>\r
            </div>            \r
        </div>      \r
\r
    </section>       \r
\r
   <section class="statistics" id="statistics">\r
        <h2 class="statistics-title">By the Numbers</h2>\r
        <ul class="statistics-grid">\r
            <li class="stat-card">\r
            <div class="stat-figure">\r
                <div class="stat-circle"><span class="stat-number">25+</span></div>\r
                <p class="stat-label">Projects</p>\r
            </div>\r
            </li>\r
            <li class="stat-card">\r
            <div class="stat-figure">\r
                <div class="stat-circle"><span class="stat-number">2+</span></div>\r
                <p class="stat-label">Years Experience</p>\r
            </div>\r
            </li>\r
            <!-- <li class="stat-card">\r
            <div class="stat-figure">\r
                <div class="stat-circle"><span class="stat-number">5★</span></div>\r
                <p class="stat-label">Client Rating</p>\r
            </div>\r
            </li> -->\r
            <li class="stat-card">\r
            <div class="stat-figure">\r
                <div class="stat-circle"><span class="stat-number">5+</span></div>\r
                <p class="stat-label">Countries</p>\r
            </div>\r
            </li>\r
        </ul>\r
    </section>\r
\r
    \r
\r
 <!--        5. Recent Work \r
    <section class="portfolio" id="portfolio">\r
    <h2>Recent Work</h2>\r
    TODO: add project thumbnails or links here \r
    </section> -->\r
\r
   \r
\r
</div>`,d=`<div class="about-page">\r
    <section class="about-header" id="about-header">\r
        <div class="container">\r
            <h1>Democratizing the Future of Technology for Every Business</h1>\r
            <p>At Ciccone Software Solutions, we believe technology is the future— <br>\r
               and every organization, from solo entrepreneurs <br>\r
               to global enterprises, deserves access to powerful, intuitive software. <br>\r
               We craft scalable solutions that empower you to innovate, grow,<br>\r
               and thrive in tomorrow’s digital landscape.</p>\r
        </div>        \r
    </section>\r
\r
    <section class="about-story" id="about-story">\r
        <div class="container">\r
            <h2 class="about-title">Our Story</h2>\r
\r
            <div class="story-card">\r
                <span class="story-badge" aria-hidden="true">The Backstory</span>\r
\r
                <p class="story-lead">\r
                Founded in 2025 after seeing too many small businesses struggle online, \r
                I set out to make professional sites fast, secure, and easy to maintain.\r
                </p>\r
\r
                <p>\r
                Ciccone Software Solutions focuses on practical, lightweight stacks—clean HTML/CSS/JS, \r
                Vite builds, and static hosting—so clients get speed, security, and low upkeep without \r
                the agency price tag.\r
                </p>\r
            </div>\r
        </div>\r
        \r
    </section>\r
\r
    <section id="about-me" class="about-me">\r
        <div class="container">\r
            <h2>About Me</h2>\r
             <p>Hi, I’m Francesco, the founder of Ciccone Software Solutions. I’m passionate about leveling the playing field for small businesses through smart, scalable technology.</p>\r
                    My Story \r
                    Why I Started Ciccone Software Solutions \r
                    After [brief personal/industry insight], I realized small businesses deserve enterprise-grade technology just as much as large firms.\r
\r
            My Mission & Values\r
            I’m driven by accessibility, quality, and future-focus: making powerful software simple, reliable, and future-proof for everyone.\r
\r
            Who I Am\r
            I’m Francesco—a full-stack generalist with X years in web and cloud development. I love solving tricky problems, crafting clean code, and seeing small teams punch above their weight.\r
\r
            Fun Fact\r
            When I’m not coding, you’ll find me [your hobby/personal detail], which keeps my creative juices flowing.\r
        </div>\r
            \r
\r
    </section>\r
\r
    <section id="service-cards" class="service-cards">\r
        <div class="container">\r
            <h2>What I Offer</h2>\r
            <div class="cards-grid">\r
            <div class="card">\r
                <h3>Full-Stack Setup</h3>\r
                <p>Register domains, configure DNS & professional email.</p>\r
            </div>\r
            <div class="card">\r
                <h3>Secure Hosting</h3>\r
                <p>Static sites on GitHub Pages with HTTPS & auto SSL.</p>\r
            </div>\r
            <div class="card">\r
                <h3>Brand & Design</h3>\r
                <p>Color palettes, typography, and custom logo creation.</p>\r
            </div>\r
            <div class="card">\r
                <h3>Responsive Dev</h3>\r
                <p>Lightweight, multi-language HTML/CSS/JS portfolios.</p>\r
            </div>\r
            <div class="card">\r
                <h3>Ongoing Maintenance</h3>\r
                <p>Automated SSL/DNS checks, dependency & spam monitoring.</p>\r
            </div>\r
            </div>\r
        </div>\r
    </section>\r
    \r
</div>`,u=`<div>\r
    <p class="services-page">\r
This is the Services page for Ciccone Software Solutions.\r
    We are currently under construction, but we will be back soon with more information\r
    </p>\r
</div>`,p=`<div>\r
    <p class="projects-page">\r
        This is the Projects page for Ciccone Software Solutions.\r
    We are currently under construction, but we will be back soon with more information\r
    </p>\r
</div>`,g=`<div >\r
    <p class="contact-page">This is the Contact page for Ciccone Software Solutions.\r
    We are currently under construction, but we will be back soon with more information\r
    </p> \r
</div>`,h={home:l,about:d,services:u,projects:p,contact:g},c=document.getElementById("main-content");function o(r){c.innerHTML=h[r]||`<p style="padding:2rem;color:red">
    Site not available.
  </p>`;const n=c.querySelectorAll(".testimonial-item");if(n.length){let t=0;const i=e=>n.forEach((s,a)=>s.classList.toggle("active",e===a));i(t),setInterval(()=>i(t=(t+1)%n.length),5e3)}}document.addEventListener("DOMContentLoaded",()=>{o("home"),document.addEventListener("click",r=>{const n=r.target.closest("a[data-page]");n&&(r.preventDefault(),o(n.dataset.page),document.querySelector("nav")?.classList.remove("open"))}),document.getElementById("hamburger")?.addEventListener("click",()=>{document.querySelector("nav")?.classList.toggle("open")})});
