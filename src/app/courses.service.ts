import { Injectable } from '@angular/core';
import { Course } from './shared/models/course/course';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private listCourses: Course[] = [
        {
            id: 1,
            title: 'Lorem Ipsum',
            creationDate: new Date('February 29, 2016'),
            duration: 55,
            description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
                'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            topRated: true
        },
        {
            id: 2,
            title: 'Lorem Ipsum-1',
            creationDate: new Date('February 25, 2016'),
            duration: 87,
            description:
                ' It has survived not only five centuries, but also the leap into electronic typesetting, ' +
                'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing' +
                ' Lorem Ipsum passages,' +
                'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
            topRated: true
        },
        {
            id: 3,
            title: 'Test course',
            creationDate: new Date('February 7, 2016'),
            duration: 195,
            description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
                'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            topRated: true
        }
    ];

    constructor() {}

    getList() {
        return this.listCourses;
    }

    removeItem(id: number) {
        this.listCourses = this.listCourses.filter(x => x.id !== id);
        this.closeModal(id);
        return true;
        console.log(this.listCourses, 'listCourses from Service');
        //renew this.listCourses!!! from idex!!!
    }

    openModal(id: number) {
        document.querySelector('.confirmation-modal').classList.add('block');
    }

    closeModal(id: number) {
        document.querySelector('.confirmation-modal').classList.remove('block');
    }

    createCourse() {}

    getItemById(id: number) {
        return id;
    }

    updateListCourses() {
        this.listCourses;
        console.log(this.listCourses, 'listCourses from Service, Update');
    }
}
