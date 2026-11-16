const menuButton=document.querySelector('.menu-toggle');const navigation=document.querySelector('.primary-nav');
if(menuButton&&navigation){menuButton.addEventListener('click',()=>{const open=navigation.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close menu':'Open menu')});navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navigation.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open menu')}))}
document.getElementById('current-year').textContent=new Date().getFullYear();const heroVideo=document.querySelector('.hero-video');if(heroVideo){heroVideo.muted=true;heroVideo.play().catch(()=>{});}


// Scroll-driven scale creates the layered, moving-card effect from the reference section.
(() => {
  const cards = [...document.querySelectorAll('.service-card')];
  if (!cards.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let ticking = false;
  const updateCards = () => {
    const stickyTop = window.innerWidth <= 900 ? 90 : 116;
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const travel = Math.max(1, card.offsetHeight * 0.9);
      const progress = Math.min(1, Math.max(0, (stickyTop - rect.top) / travel));
      const scale = 1 - progress * 0.055;
      card.style.transform = `scale(${scale})`;
      card.style.zIndex = String(20 + index);
    });
    ticking = false;
  };
  const requestUpdate = () => {
    if (!ticking) { ticking = true; window.requestAnimationFrame(updateCards); }
  };
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  updateCards();
})();


// Automatically update the footer year
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
