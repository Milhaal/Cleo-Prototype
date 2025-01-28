import course1 from "./course1/info.js";
import lesson1Course1 from "./course1/lesson1.js";
import lesson2Course1 from "./course1/lesson2.js";
import lesson3Course1 from "./course1/lesson3.js";

import course2 from "./course2/info.js";
import lesson1Course2 from "./course2/lesson1.js";
import lesson2Course2 from "./course2/lesson2.js";
import lesson3Course2 from "./course2/lesson3.js";

import course3 from "./course3/info.js";
import lesson1Course3 from "./course3/lesson1.js";
import lesson2Course3 from "./course3/lesson2.js";
import lesson3Course3 from "./course3/lesson3.js";
import lesson4Course3 from "./course3/lesson4.js";
// import lesson5Course3 from "./course3/lesson5.js";
// import lesson6Course3 from "./course3/lesson6.js";

import course4 from "./course4/info.js";
import lesson1Course4 from "./course4/lesson1.js";
import lesson2Course4 from "./course4/lesson2.js";
import lesson3Course4 from "./course4/lesson3.js";
import lesson4Course4 from "./course4/lesson4.js";
import lesson5Course4 from "./course4/lesson5.js";
import lesson6Course4 from "./course4/lesson6.js";
import lesson7Course4 from "./course4/lesson7.js";
import lesson8Course4 from "./course4/lesson8.js";
import lesson9Course4 from "./course4/lesson9.js";
import lesson10Course4 from "./course4/lesson10.js";
import lesson11Course4 from "./course4/lesson11.js";
import lesson12Course4 from "./course4/lesson12.js";

// import course5 from "./course5/info.js";

import course6 from "./course6/info.js";
import lesson1Course6 from "./course6/lesson1.js";
import lesson2Course6 from "./course6/lesson2.js";
import lesson3Course6 from "./course6/lesson3.js";
import lesson4Course6 from "./course6/lesson4.js";

import course7 from "./course7/info.js";
import lesson1Course7 from "./course7/lesson1.js";
import lesson2Course7 from "./course7/lesson2.js";
import lesson3Course7 from "./course7/lesson3.js";


const formatLessons = (course, lessons) => {
  return lessons.map((lesson, index) => ({
    ...lesson,
    id: `${course.id}_lesson${index + 1}`,  // Génération d'un identifiant unique
    type: "lesson",
    courseId: course.id,
    courseTitle: course.title,
    lessonDescription: lesson.description,
    status: lesson.status,
    courseDifficulty: course.difficulty,
    courseTools: course.tools,
    courseRole: lesson.role || course.role,  // Priorité au rôle de la leçon sinon celui du cours
    courseTrial: course.trial || false,
    authorId: course.authorId,
  }));
};

const courses = [
  { ...course1, type: "course", courseTrial: course1.trial || false },
  ...formatLessons(course1, [lesson1Course1, lesson2Course1, lesson3Course1]),

  { ...course2, type: "course", courseTrial: course2.trial || false },
  ...formatLessons(course2, [lesson1Course2, lesson2Course2, lesson3Course2]),

  { ...course3, type: "course", courseTrial: course3.trial || false },
  ...formatLessons(course3, [lesson1Course3, lesson2Course3, lesson3Course3, lesson4Course3]),

  { ...course4, type: "course", courseTrial: course4.trial || false },
  ...formatLessons(course4, [lesson1Course4, lesson2Course4, lesson3Course4, lesson4Course4, lesson5Course4, lesson6Course4, lesson7Course4, lesson8Course4, lesson9Course4, lesson10Course4, lesson11Course4, lesson12Course4]),

  // { ...course5, type: "course", courseTrial: course5.trial || false },
  // ...formatLessons(course5, []),

  { ...course6, type: "course", courseTrial: course6.trial || false },
  ...formatLessons(course6, [lesson1Course6, lesson2Course6, lesson3Course6, lesson4Course6]),

  { ...course7, type: "course", courseTrial: course7.trial || false },
  ...formatLessons(course7, [lesson1Course7, lesson2Course7, lesson3Course7]),


];

export default courses;