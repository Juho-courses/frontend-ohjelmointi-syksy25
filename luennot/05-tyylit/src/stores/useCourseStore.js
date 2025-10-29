import { create } from "zustand";

const kurssit_orig = [
  "storesta",
  "ohjelmointi2",
  "nosql",
  "backend",
  "vaatimusmäärittely",
  "git",
];

const useCourseStore = create((set) => ({
  courses: kurssit_orig,
  addCourse: (new_course) =>
    set((state) => ({ courses: [...state.courses, new_course] })),
}));

export { useCourseStore };
