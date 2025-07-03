export default function decorate(block) {
[...block.children].forEach(row) => {
  [...block.children].forEach(col) => {
  console.log(col);
  });
});
}
