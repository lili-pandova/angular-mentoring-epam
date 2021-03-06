export interface Course {
    id: number;
    title: string;
    creationDate: string;
    duration: string;
    description: string;
    createdAt?: string;
    authors: any;
}

export type CourseDate = Pick<Course, 'creationDate'>;
export type CourseTitle = Pick<Course, 'title'>;
