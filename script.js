const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    const navAnchors = document.querySelectorAll('.nav-links a');
    const reveals = document.querySelectorAll('.reveal');
    const sections = document.querySelectorAll('section[id]');
    const cursorGlow = document.getElementById('cursorGlow');

    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navAnchors.forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.14 });

    reveals.forEach(item => revealObserver.observe(item));

    const activateNav = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navAnchors.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', activateNav);
    activateNav();

    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.opacity = '1';
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });

    window.addEventListener('mouseleave', () => {
      cursorGlow.style.opacity = '0';
    });

    document.querySelectorAll('.project-card, .skill-card, .stat, .timeline-card, .strength-card, .contact-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(110,231,255,0.12), rgba(17,24,45,0.78) 45%)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(17, 24, 45, 0.7)';
      });
    });