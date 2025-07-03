import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const child=document.querySelectorAll('div > *');
  child.forEach(child => {
child.classList.add('test');
}
}
