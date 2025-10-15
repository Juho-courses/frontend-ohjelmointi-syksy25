import ListItem from "./ListItem";
import { useCourseStore } from "./stores/useCourseStore";

function CourseList() {
  // const kurssit = useCourseStore((state) => state.courses);

  const { courses: kurssit } = useCourseStore();

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
