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
    lessonDescription: lesson.description,
    status: lesson.status,      // Ajout de la propriété status ici
    courseDifficulty: course.difficulty,
    courseTools: course.tools,
    courseRole: course.role,
    courseTrial: course.trial || false,  // Ajout de la propriété courseTrial (false par défaut)
    authorId: course.authorId
  }));
};

const courses = [
  { ...course1, type: "course", courseTrial: course1.trial || false },
  ...formatLessons(course1, [lesson1Course1, lesson2Course1, lesson3Course1]),

  { ...course2, type: "course", courseTrial: course2.trial || false },
  ...formatLessons(course2, [lesson1Course2, lesson2Course2, lesson3Course2])
];

export default courses;