export default function decorate(block) {
  const cards = document.createElement('div');
  cards.className = 'product-grid';

  [...block.children].forEach((row) => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.append(...row.children);

    cards.append(card);
  });

  block.replaceChildren(cards);
}