
(function(){
  const headerLinks = document.querySelectorAll('.nav-link');
  for(const link of headerLinks){
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if(href && href.startsWith('#')){
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  }

  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if(hamburger && navMenu){
    hamburger.addEventListener('click',()=>{
      if(getComputedStyle(navMenu).display === 'none'){
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '60px';
        navMenu.style.right = '20px';
        navMenu.style.background = 'rgba(9,16,25,0.95)';
        navMenu.style.padding = '12px';
        navMenu.style.border = '1px solid rgba(255,255,255,0.08)';
        navMenu.style.borderRadius = '10px';
      } else {
        navMenu.style.display = 'none';
      }
    });
  }

  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('name');
      alert(`Thanks, ${name}! We'll get back to you shortly.`);
      form.reset();
    })
  }
})();

