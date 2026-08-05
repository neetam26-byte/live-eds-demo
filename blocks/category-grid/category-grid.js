export default function decorate(block) {
  const ul = document.createElement('ul');
  ul.className = 'category-grid';

  [...block.children].forEach((row) => {
    const cells = [...row.children];

    const li = document.createElement('li');

    const image = cells[0];
    const title = cells[1];
    const link = cells[2];

    const a = document.createElement('a');
    a.href = link.textContent.trim();

    a.append(image);

    const caption = document.createElement('div');
    caption.className = 'category-title';
    caption.textContent = title.textContent;

    a.append(caption);

    li.append(a);
    ul.append(li);
  });

  block.replaceChildren(ul);
}