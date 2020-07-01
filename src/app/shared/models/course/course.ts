export interface Course {
    id: number;
    title: string;
    creationDate: Date | string,
    duration: string | number;
    description: string;
    createdAt?: string;
    topRated? : boolean,
    authors?: any;
}

export type CourseDate = Pick<Course, 'creationDate'>;
export type CourseTitle = Pick<Course, 'title'>;
