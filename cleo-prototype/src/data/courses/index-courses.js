import course1 from "./course1/info.js";
import lesson1Course1 from "./course1/lesson1.js";
import lesson2Course1 from "./course1/lesson2.js";
import lesson3Course1 from "./course1/lesson3.js";

import course2 from "./course2/info.js";
import lesson1Course2 from "./course2/lesson1.js";
import lesson2Course2 from "./course2/lesson2.js";
import lesson3Course2 from "./course2/lesson3.js";

const formatLessons = (course, lessons) => {
  return lessons.map((lesson) => ({
    ...lesson,
    type: "lesson",
    courseId: course.id,
    courseTitle: course.title,  // Ajout du titre pour affichage correct
    description: lesson.description,
    courseDifficulty: course.difficulty,
    courseTools: course.tools,
    courseRole: course.role,
    authorId: course.authorId
  }));
};

const courses = [
  { ...course1, type: "course" },
  ...formatLessons(course1, [lesson1Course1, lesson2Course1, lesson3Course1]),

  { ...course2, type: "course" },
  ...formatLessons(course2, [lesson1Course2, lesson2Course2, lesson3Course2])
];

export default courses;