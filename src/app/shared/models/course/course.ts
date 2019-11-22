export interface Course {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
}

export type CourseDate = Pick<Course, 'creationDate'>;
export type CourseTitle = Pick<Course, 'title'>;
