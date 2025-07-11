(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const l=`<div>\r
    This is the Home page for Ciccone Software Solutions.\r
    <p>We are currently under construction, but we will be back soon with more information\r
</div>`,d=`<div class="about-page">\r
    <section class="about-header" id="about-header">\r
        <div class="container">\r
            <h2>Democratizing the Future of Technology for Every Business</h2>\r
            <p>At Ciccone Software Solutions, we believe technology is the future— <br>\r
               and every organization, from solo entrepreneurs <br>\r
               to global enterprises, deserves access to powerful, intuitive software. <br>\r
               We craft scalable solutions that empower you to innovate, grow,<br>\r
               and thrive in tomorrow’s digital landscape.</p>\r
        </div>        \r
    </section>\r
    <section class="about-me">\r
        <!-- My Story \r
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
When I’m not coding, you’ll find me [your hobby/personal detail], which keeps my creative juices flowing.-->\r
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
        </div>       \r
\r
    </section>       \r
\r
    <div class="statistics">\r
        <p>100+ projects delivered</p>\r
        <p>10+ years of experience</p>\r
        <p>5-star client ratings</p>\r
        <p>Global reach: 20+ countries served</p>\r
    </div>\r
</div>`,u=`<div>\r
    This is the Services page for Ciccone Software Solutions.\r
    <p>We are currently under construction, but we will be back soon with more information\r
</div>`,p=`<div>\r
    This is the Projects page for Ciccone Software Solutions.\r
    <p>We are currently under construction, but we will be back soon with more information\r
</div>`,g=`<div>\r
    This is the Contact page for Ciccone Software Solutions.\r
    <p>We are currently under construction, but we will be back soon with more information\r
</div>`,h={home:l,about:d,services:u,projects:p,contact:g},c=document.getElementById("main-content");function a(t){c.innerHTML=h[t]||`<p style="padding:2rem;color:red">
    Site not available.
  </p>`;const r=c.querySelectorAll(".testimonial-item");if(r.length){let s=0;const i=e=>r.forEach((n,o)=>n.classList.toggle("active",e===o));i(s),setInterval(()=>i(s=(s+1)%r.length),5e3)}}document.addEventListener("DOMContentLoaded",()=>{a("home"),document.addEventListener("click",t=>{const r=t.target.closest("a[data-page]");r&&(t.preventDefault(),a(r.dataset.page),document.querySelector("nav")?.classList.remove("open"))}),document.getElementById("hamburger")?.addEventListener("click",()=>{document.querySelector("nav")?.classList.toggle("open")})});
