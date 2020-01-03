import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Course } from '../../models/course/course';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CoursesService {
    private autoIncrement = 4;
    private count: number = 1;
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

    constructor(private httpClient: HttpClient) { }

    incrementCount() {
        return this.count ++;
    }
    index(): Observable<Course[]> {
        //return this.listCourses;
        return this.httpClient.get<Course[]>(`http://localhost:3000/coursess?_page=${this.count}&_limit=3`);          
    };

    findCourse(serachWord): Observable<Course[]>  {
        return this.httpClient.get<Course[]>('http://localhost:3000/coursess', {params: { 'q': serachWord  }}) 
                              
    }

    destroy(id: number) {
        this.listCourses = this.listCourses.filter(x => x.id !== id);
        return true;
    }

    store(data: any) {
        return new Observable((obs) => {
            data.id = this.autoIncrement;
            this.autoIncrement++;

            const newData = this.listCourses.push(data);
            obs.next(newData);
            obs.complete();
        });
    }

    view(id: number) {
        return new Observable((obs) => {
            if (typeof id === 'string') {
                id = parseInt(id);
            }

            const item = this.listCourses.find(e => e.id === id);
            obs.next(item);
            obs.complete();
        });
    }

    update(id: number, data: any) {
        return new Observable((obs) => {
            if (typeof id === 'string') {
                id = parseInt(id);
            }

            const item = this.listCourses.find(e => e.id === id);
            const updatedData = Object.assign(item, data)
            obs.next(updatedData);
            obs.complete();
        });
    };
}
