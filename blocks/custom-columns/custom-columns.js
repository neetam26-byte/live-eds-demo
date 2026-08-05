export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    const custom-columns = [...row.children];

    row.classList.add(`columns-${custom-columns.length}`);

    columns.forEach((column) => {
      column.classList.add('custom-column');
    });
  });
}