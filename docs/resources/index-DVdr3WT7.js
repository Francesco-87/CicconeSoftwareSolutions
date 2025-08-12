(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const l=`<div class="home-page">
    <!-- 1. Hero -->
    <section class="hero" id="hero">
        <div class="hero-content">
            <h1>Build Your Digital Presence in Days, Not Weeks</h1>
            <p>I handle domains, hosting, design and deployment—so you focus on running your business.</p>
            <a ref="#" data-page="projects">View Portfolio</a>
        </div>
    </section>

    <!-- 2. What I Do -->
    <section class="services" id="services">
        <h2 class="services-title">What I Do</h2>
        <ul class="services-list">
            <li class="services-card">Domain &amp; Email Setup</li>
            <li class="services-card">Secure Static Hosting &amp; SSL</li>
            <li class="services-card">Brand &amp; Logo Design</li>
            <li class="services-card">Responsive Multi-Language Builds</li>
        </ul>
    </section>


    <section class="tech-stack">
        <div class="container">
            <h2>My Tech Stack</h2>
            <div class="tech-items">
                <div class="tech-item">
                    <img src="img/js.svg" alt="JavaScript logo" class="tech-icon">
                    <span class="tech-label">JavaScript</span>
                </div>
                <div class="tech-item">
                    <img src="img/react-js.svg" alt="React logo" class="tech-icon" >
                    <span class="tech-label">React</span>
                </div>
                <div class="tech-item">
                    <img src="img/node_js.svg" alt="Node.js logo" class="tech-icon" >
                    <span class="tech-label">Node.js</span>
                </div>
                <div class="tech-item">
                    <img src="img/html.svg" alt="HTML logo" class="tech-icon">
                    <span class="tech-label">HTML</span>
                </div>
                <div class="tech-item">
                    <img src="/img/css.svg" alt="CSS logo" class="tech-icon">
                    <span class="tech-label">CSS</span>
                </div>
                <div class="tech-item">
                    <img src="img/MySQL.svg" alt="SQL logo" class="tech-icon" >
                    <span class="tech-label">MySQL</span>
                </div>
                <div class="tech-item">
                    <img src="img/mongodb.svg" alt="MongoDB logo" class="tech-icon icon-big" >
                    <span class="tech-label">MongoDB</span>
                </div>
                <div class="tech-item">
                    <img src="img/github.svg" alt="Git logo" class="tech-icon" >
                    <span class="tech-label">Git & GitHub</span>
                </div>
                <div class="tech-item">
                    <img src="img/java.svg" alt="Java logo" class="tech-icon" >
                    <span class="tech-label">Java</span>
                </div>
                <div class="tech-item">
                    <img src="img/azure.svg" alt="Azure logo" class="tech-icon" >
                    <span class="tech-label">Azure</span>
                </div>
            </div>            
        </div>      

    </section>       

    <section class="statistics" id="statistics">
        <div >
            <p>100+ projects delivered</p>
            <p>10+ years of experience</p>
            <p>5-star client ratings</p>
            <p>Global reach: 20+ countries served</p>
        </div>
    </section>
    

        <!-- 5. Recent Work -->
    <section class="portfolio" id="portfolio">
    <h2>Recent Work</h2>
    <!-- TODO: add project thumbnails or links here -->
    </section>

    <!-- 6. Call to Action -->
    <section class="cta" id="cta">
    <h2>Ready to get started?</h2>
    <a href="/contact">Contact Me</a>
    </section>

</div>`,d=`<div class="about-page">
    <section class="about-header" id="about-header">
        <div class="container">
            <h1>Democratizing the Future of Technology for Every Business</h1>
            <p>At Ciccone Software Solutions, we believe technology is the future— <br>
               and every organization, from solo entrepreneurs <br>
               to global enterprises, deserves access to powerful, intuitive software. <br>
               We craft scalable solutions that empower you to innovate, grow,<br>
               and thrive in tomorrow’s digital landscape.</p>
        </div>        
    </section>
    <section class="about-me">
        <!-- My Story 
         Why I Started Ciccone Software Solutions 
         After [brief personal/industry insight], I realized small businesses deserve enterprise-grade technology just as much as large firms.

My Mission & Values
I’m driven by accessibility, quality, and future-focus: making powerful software simple, reliable, and future-proof for everyone.

Who I Am
I’m Francesco—a full-stack generalist with X years in web and cloud development. I love solving tricky problems, crafting clean code, and seeing small teams punch above their weight.

Fun Fact
When I’m not coding, you’ll find me [your hobby/personal detail], which keeps my creative juices flowing.-->

    </section>

    <section id="service-cards" class="service-cards">
        <div class="container">
            <h2>What I Offer</h2>
            <div class="cards-grid">
            <div class="card">
                <h3>Full-Stack Setup</h3>
                <p>Register domains, configure DNS & professional email.</p>
            </div>
            <div class="card">
                <h3>Secure Hosting</h3>
                <p>Static sites on GitHub Pages with HTTPS & auto SSL.</p>
            </div>
            <div class="card">
                <h3>Brand & Design</h3>
                <p>Color palettes, typography, and custom logo creation.</p>
            </div>
            <div class="card">
                <h3>Responsive Dev</h3>
                <p>Lightweight, multi-language HTML/CSS/JS portfolios.</p>
            </div>
            <div class="card">
                <h3>Ongoing Maintenance</h3>
                <p>Automated SSL/DNS checks, dependency & spam monitoring.</p>
            </div>
            </div>
        </div>
    </section>
    
</div>`,h=`<div>
    This is the Services page for Ciccone Software Solutions.
    <p>We are currently under construction, but we will be back soon with more information
</div>`,u=`<div>
    This is the Projects page for Ciccone Software Solutions.
    <p>We are currently under construction, but we will be back soon with more information
</div>`,p=`<div>
    This is the Contact page for Ciccone Software Solutions.
    <p>We are currently under construction, but we will be back soon with more information
</div>`,g={home:l,about:d,services:h,projects:u,contact:p},a=document.getElementById("main-content");function r(t){a.innerHTML=g[t]||`<p style="padding:2rem;color:red">
    Site not available.
  </p>`;const s=a.querySelectorAll(".testimonial-item");if(s.length){let i=0;const o=e=>s.forEach((n,c)=>n.classList.toggle("active",e===c));o(i),setInterval(()=>o(i=(i+1)%s.length),5e3)}}document.addEventListener("DOMContentLoaded",()=>{r("home"),document.addEventListener("click",t=>{const s=t.target.closest("a[data-page]");s&&(t.preventDefault(),r(s.dataset.page),document.querySelector("nav")?.classList.remove("open"))}),document.getElementById("hamburger")?.addEventListener("click",()=>{document.querySelector("nav")?.classList.toggle("open")})});
