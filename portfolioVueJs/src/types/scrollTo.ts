interface PageFunctions {
    [key: number]: () => void;
  }
  
export const pages: PageFunctions = {
    0: scrollToTitle,
    1: scrollToProgressbar,
    2: scrollToSkillsShowcase,
    3: scrollToProjects,
    4: scrollToContactForm
  };  

export function disableScroll() {
    document.body.style.overflow = 'hidden';
}

export function enableScroll() {
    document.body.style.overflow = '';
}

function scrollToTitle() {
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        avatar.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
    }
}

function scrollToProgressbar() {
  const progressbar = document.querySelector('.timeline-wrapper');
  if (progressbar) {
      progressbar.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  }
}

function scrollToSkillsShowcase() {
    const skills = document.querySelector('.skillsShowcase-wrapper');
    if (skills) {
        skills.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function scrollToProjects() {
    const project = document.querySelector('.projects-browser');
    if (project) {
        project.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function scrollToContactForm() {
    const contact = document.querySelector('.contactForm-wrapper');
    if (contact) {
        contact.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}