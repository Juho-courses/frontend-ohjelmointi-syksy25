import ListItem from "./ListItem";
import { useCourseStore } from "./stores/useCourseStore";

function CourseList() {
  // const kurssit = useCourseStore((state) => state.courses);

  const { courses: kurssit } = useCourseStore();

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-2">
        Kurssilistaus
      </h3>

      <ul className="space-y-4">
        {kurssit.map((kurssi, index) => (
          <ListItem nimi={kurssi} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
