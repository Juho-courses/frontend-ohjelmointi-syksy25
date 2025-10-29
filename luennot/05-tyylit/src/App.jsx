import SubTitle from "./SubTitle";
import CourseList from "./CourseList";
import CourseSave from "./CourseSave";
import "./styles.css";

function App() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Moro</h1>
      <SubTitle />

      <CourseSave />
      <CourseList />
    </div>
  );
}

export default App;
