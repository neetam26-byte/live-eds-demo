export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    const columns = [...row.children];

    row.classList.add(`columns-${columns.length}`);

    columns.forEach((column) => {
      column.classList.add('custom-column');
    });
  });
}