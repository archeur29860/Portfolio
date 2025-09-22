interface PageFunctions {
    [key: number]: () => void;
  }
  
export const pages: PageFunctions = {
    0: scrollToTitle,
    1: scrollToProgressbar,
    2: scrollToProjects
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

function scrollToProjects() {
    const avatar = document.querySelector('.projects-browser');
    if (avatar) {
        avatar.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}