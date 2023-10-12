export default function Stats({ items }) {
    if (!items.length)
      return (
        <p className="stats">
          <em>Start adding some items to your packing list</em>
        </p>
      );
    const numItems = items.length;
    const isPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((isPacked / numItems) * 100);
    console.log(percentage);
    console.log(percentage);
    return (
      <footer className="stats">
        <em>
          {percentage === 100
            ? "You got everything ready to Go"
            : `You have ${numItems} items on your List and you already packed ${isPacked}(${percentage} %`}
        </em>
      </footer>
    );
  }