import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const children=document.querySelectorAll('div > *');
  children.forEach(child => {
child.classList.add('test');
}
}
