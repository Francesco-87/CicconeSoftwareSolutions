import projects from '../../data/projects.json';

const esc = (s='') => String(s)
  .replace(/&/g,'&amp;').replace(/</g,'&lt;')
  .replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');

const render = (grid) => {
  if (!grid || grid.dataset.bound === '1') return;
  grid.dataset.bound = '1';

  const hrefFor = (p) => {
  if (p.caseStudy) {
    const slug = (p.slug || '').trim();
    return `${import.meta.env.BASE_URL}projects/${encodeURIComponent(slug)}/`;
  }
  return p.url || '#';
};

const ctaFor = (p) =>
  p.caseStudy ? 'Read case study →' : 'Visit site →';

const linkAttrsFor = (p) =>
  p.caseStudy ? '' : ' target="_blank" rel="noopener noreferrer"';

 const card = (p) => {
  const isCase = !!p.caseStudy;

  const slug = (p.slug || '').trim();
  const url  = (p.url  || '').trim();

  // Require slug for case studies, url for non-case-study projects
  if (isCase && !slug) return '';
  if (!isCase && !url) return '';

  const tags = [...(p.industry || []), ...(p.tech || [])]
    .map(t => `<li class="badge">${esc(t)}</li>`).join('');

  const outcome = p.outcome ? `<div class="project-outcome">${esc(p.outcome)}</div>` : '';

  const href = isCase
    ? `${import.meta.env.BASE_URL}projects/${encodeURIComponent(slug)}/`
    : url;

  const extraAttrs = isCase ? '' : ' target="_blank" rel="noopener noreferrer"';
  const cta = isCase ? 'Read case study →' : 'Visit site →';

  return `
    <a class="card project-card" href="${esc(href)}"${extraAttrs}>
      <figure class="project-thumb">
        <img src="${esc(p.thumb || '')}" alt="${esc(p.title || 'Project')}" loading="lazy" decoding="async">
      </figure>
      <div class="project-body">
        <h2 class="project-title">${esc(p.title || 'Untitled')}</h2>
        <p class="project-summary">${esc(p.summary || '')}</p>
        <ul class="project-meta">${tags}</ul>
        ${outcome}
        <span class="project-cta">${cta}</span>
      </div>
    </a>`;
};

  grid.innerHTML = projects.map(card).join('');
  console.log('[projects.js] rendered', projects.length);
};

// 1) try immediately (in case Projects is the first view)
const now = document.querySelector('.projects-grid');
if (now) render(now);

// 2) observe SPA content swaps
const main = document.querySelector('main') || document.body;
const mo = new MutationObserver(() => {
  const grid = main.querySelector('.projects-grid');
  if (grid) render(grid);
});
mo.observe(main, { childList: true, subtree: true });
