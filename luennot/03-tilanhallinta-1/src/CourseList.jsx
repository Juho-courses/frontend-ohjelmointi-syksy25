import ListItem from "./ListItem";

function CourseList({ kurssit }) {
  return (
    <div>
      <h3>Kurssilistaus</h3>

      <ul>
        {kurssit.map((kurssi, index) => {
          return <ListItem nimi={kurssi} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default CourseList;
