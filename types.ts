
export interface Lesson {
  id: string;
  topicCode: string; // e.g., "A1", "C2"
  lessonNumber: string; // e.g., "Bài 1"
  title: string;
  note?: string;
}

export interface WeeklyCurriculum {
  week: number;
  grade3: Lesson | string;
  grade4: Lesson | string;
  grade5: Lesson | string;
}

export type GradeKey = 'grade3' | 'grade4' | 'grade5';
