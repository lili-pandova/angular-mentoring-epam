import { Injectable } from '@angular/core';
import { Course } from '../../models/course/course';
import { Observable } from 'rxjs';

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

    public item;

    constructor() {}

    index() {
        return this.listCourses;
    }

    destroy(id: number) {
        this.listCourses = this.listCourses.filter(x => x.id !== id);
        return true;
    }

    store(data: any) {
        return new Observable((obs) => {
            console.log(data, "DATA from service");
            const newData = this.listCourses.push(data);
            console.log(this.listCourses, "listcourses from services")
            
            obs.next(newData);
            obs.complete();
        });
    }

    view(id: number) {
        return this.item = this.listCourses.find(e => e.id === id);
    }

    update(id: number, data: any) {
        console.log(id, "ID")
        console.log(data, "data")
        this.item = this.listCourses.find(e => e.id === id);
        const updatedData = Object.assign(this.item, data)
        console.log(updatedData, "updatedData");
    };
}
