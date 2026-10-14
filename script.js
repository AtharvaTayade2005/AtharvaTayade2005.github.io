/**
 * Atharva Tayade - Portfolio Script
 * Handles: Dynamic Year, Smooth Scrolling, Mobile Navigation,
 * Scrollspy Active Links, Copy-to-Clipboard, Contact Form & Toast Notifications
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Dynamic Year in Footer
  // --------------------------------------------------------------------------
  const currentYearEl = document.getElementById('current-year');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. Navbar Scroll Behavior
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('back-to-top');

  const handleWindowScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Sticky navbar backdrop state
    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  };

  window.addEventListener('scroll', handleWindowScroll, { passive: true });
  handleWindowScroll(); // Initial check

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 3. Mobile Navigation Drawer Toggle
  // --------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleMobileMenu = () => {
    const isOpen = navMenu.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  const openMobileMenu = () => {
    navMenu.classList.add('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeMobileMenu = () => {
    navMenu.classList.remove('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    // Close mobile menu when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          closeMobileMenu();
        }
      });
    });

    // Close when clicking outside menu
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        closeMobileMenu();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 4. Smooth Anchor Scrolling with Precise Offset
  // --------------------------------------------------------------------------
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 72;
        const targetPosition = targetEl.getBoundingClientRect().top + window.scrollY - navHeight - 16;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL hash cleanly
        if (history.pushState) {
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // 5. Scrollspy for Active Navigation Link Highlighting
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  const highlightNavOnScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const navHeight = navbar ? navbar.offsetHeight : 72;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - navHeight - 60;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });
  highlightNavOnScroll();

  // --------------------------------------------------------------------------
  // 6. Toast Notification Helper
  // --------------------------------------------------------------------------
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimeout;

  const showToast = (message, duration = 3000) => {
    if (!toast) return;

    if (toastMessage) {
      toastMessage.textContent = message;
    }

    toast.classList.add('show');

    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }

    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  };

  // --------------------------------------------------------------------------
  // 7. Copy-to-Clipboard Functionality
  // --------------------------------------------------------------------------
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback method for non-HTTPS or older browsers
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }

        // Visual feedback on button
        const originalIcon = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check" style="color: #10b981;"></i>';
        showToast(`Copied to clipboard: ${textToCopy}`);

        setTimeout(() => {
          btn.innerHTML = originalIcon;
        }, 2200);
      } catch (err) {
        showToast('Failed to copy to clipboard');
      }
    });
  });

  // --------------------------------------------------------------------------
  // 8. Contact Form Mailto Handler
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name')?.value.trim() || '';
      const email = document.getElementById('contact-email')?.value.trim() || '';
      const subject = document.getElementById('contact-subject')?.value.trim() || 'Portfolio Inquiry';
      const message = document.getElementById('contact-message')?.value.trim() || '';

      if (!name || !email || !message) {
        showToast('Please fill out all required fields');
        return;
      }

      const emailSubject = encodeURIComponent(`[Portfolio Contact] ${subject} - ${name}`);
      const emailBody = encodeURIComponent(
        `Hi Atharva,\n\n${message}\n\n---\nSender: ${name}\nEmail: ${email}`
      );

      const mailtoUrl = `mailto:atharvatayade9@gmail.com?subject=${emailSubject}&body=${emailBody}`;

      // Show instant feedback toast
      showToast('Launching email client...');

      // Open email client
      window.location.href = mailtoUrl;

      // Optional form reset
      setTimeout(() => {
        contactForm.reset();
      }, 1000);
    });
  }
});
