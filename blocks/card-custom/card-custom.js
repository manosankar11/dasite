
export default function decorate(block) {
   div.className = 'card-wrap';
  [...block.children].forEach((row) => {
     const divs=document.querySelectorAll('div);
      divs.forEach(function(div)){
         div.classList.add('test');
      }
    });

  
}
