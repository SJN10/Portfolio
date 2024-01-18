function addMotionAnimation() {
  const containers = document.querySelectorAll('.container');
  const animateMotion = () => {
    containers.forEach((container) => {
      const containerTop = container.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (containerTop < windowHeight * 0.75) {
        container.classList.add('animate-motion');
      }
    });
  };
  window.addEventListener('scroll', animateMotion);
  animateMotion();
}

document.addEventListener('DOMContentLoaded', function () {
  addMotionAnimation();
});

function playClickSound() {
  const clickSound = new Audio('buttonClick.mp3');
  clickSound.play();
}

function blinkContent(section) {
  const blinkCount = 3;
  let count = 0;

  function blink() {
    if (count < blinkCount) {
      section.classList.add('blink');
      setTimeout(() => {
        section.classList.remove('blink');
        count++;
        blink();
      }, 500);
    }
  }

  blink();
}

// Add event listeners for navbar links
document.addEventListener('DOMContentLoaded', function () {
  const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const contentSections = document.querySelectorAll('section.content');
  const footerSection = document.querySelector('footer');

  // Attach click event listener to navbar links
  navbarLinks.forEach((link, index) => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default behavior of the link
      playClickSound();

      // Add blinking effect to the corresponding content section or footer section
      if (index < contentSections.length) {
        const section = contentSections[index];
        blinkContent(section);
        section.scrollIntoView({ behavior: 'smooth' });
      } else if (index === navbarLinks.length - 1) {
        blinkContent(footerSection);
        footerSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

        sklfjdkjfdfkdfmgf,gnf,gnfkglrtkngdfkjers
