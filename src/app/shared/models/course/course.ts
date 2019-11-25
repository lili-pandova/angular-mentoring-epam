export interface Course {
    id: number;
    title: string;
    creationDate: Date;
    duration: number;
    description: string;
    topRated: boolean;
}

export type CourseDate = Pick<Course, 'creationDate'>;
export type CourseTitle = Pick<Course, 'title'>;
