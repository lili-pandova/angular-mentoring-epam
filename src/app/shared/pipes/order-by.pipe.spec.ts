import { Course } from '../models/course/course';
import { OrderByPipe } from './order-by.pipe';

const dataBefore: Course[] = [
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
        id: 1,
        title: 'Lorem Ipsum',
        creationDate: new Date('February 29, 2016'),
        duration: 55,
        description:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' +
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," +
            'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        topRated: true
    }
];

const dataAfter = [dataBefore[1], dataBefore[0]];

describe('OrderByPipe', () => {
    const pipe = new OrderByPipe();

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });
    it('Order the courses', () => {
        expect(pipe.transform(dataBefore)).toEqual(dataAfter);
    });
});
