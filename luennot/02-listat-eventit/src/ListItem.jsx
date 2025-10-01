function ListItem({ nimi }) {
  return (
    <li
      onClick={() => {
        console.log(nimi);
      }}
    >
      {nimi}
    </li>
  );
}

export default ListItem;
