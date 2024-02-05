export function Stats({ itemsSize }) {
  if (!itemsSize.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  }

  const numItems = itemsSize.length;
  const packedSize = itemsSize.filter((item) => item.packed).length;
  const percentage = Math.round((packedSize / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        you have {numItems} items on your list, and you already packed{" "}
        {packedSize} ({percentage}%)
      </em>
    </footer>
  );
}
