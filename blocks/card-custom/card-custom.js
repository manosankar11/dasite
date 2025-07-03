import { createOptimizedPicture } from '../../scripts/aem.js';
export default function decorate(block) {
  const ul = document.createElement('ul');
  console.log("ul created");
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    console.log("li created");
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'card-custom-image';
      else div.className = 'cards-custom-body';
    });
    ul.append(li);
  });

  // replace images with optimized versions
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));

  block.replaceChildren(ul);

  
}
