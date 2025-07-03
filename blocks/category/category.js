import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Handle the title and view-all section
  const firstRow = block.children[0];
  const title = firstRow.children[0];
  const viewAll = firstRow.children[1];

  firstRow.className = 'category-title-wrapper';
  title.className = 'category-title';
  viewAll.className = 'category-viewall';

  const ul = document.createElement('ul');
  ul.className = 'cards-list';

  [...block.children].slice(1).forEach((row) => {
    const li = document.createElement('li');
    li.className = 'cards-card';

    while (row.firstElementChild) {
      li.append(row.firstElementChild);
    }

    // Replace any <a> inside card body with plain text
    li.querySelectorAll('.cards-card-body a').forEach((a) => {
      const span = document.createElement('span');
      span.textContent = a.textContent;
      a.replaceWith(span);
    });

    // Extract href from the title link
    const titleLink = title.querySelector('a');
    const href = titleLink?.getAttribute('href');

    // Wrap the entire card in an anchor if href exists
    if (href) {
      const wrapperLink = document.createElement('a');
      wrapperLink.href = href;
      wrapperLink.className = 'cards-card-link';
      wrapperLink.append(...li.childNodes);
      li.appendChild(wrapperLink);
    }

    [...li.querySelectorAll('div')].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'cards-card-image';
      } else {
        div.className = 'cards-card-body';
      }
    });

    ul.append(li);
  });

  // Replace images with optimized versions
  ul.querySelectorAll('picture > img').forEach((img) => {
    img.closest('picture').replaceWith(
      createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])
    );
  });

  // Replace all children except the first row with the UL
  block.replaceChildren(firstRow, ul);
}
