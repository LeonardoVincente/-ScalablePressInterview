const holiday = {
    start: new Date('2019-12-24T21:00:00'),
    end: new Date('2019-12-25T21:00:00')
};

describe('addBusinessTime', () => {
    it('Should return 2019-12-01T01:00:00', () => {
        const expected = new Date('2019-12-01T01:00:00');
        const startDate = new Date('2019-12-01T00:00:00');
        const answer = addBusinessTime(holiday, startDate, 60 * 60);
        expect(answer).toEqual(expected);
    });

    it('Should return 2019-12-25T21:00:01', () => {
        const expected = new Date('2019-12-25T21:00:01');
        const startDate = new Date('2019-12-24T21:00:00');
        const answer = addBusinessTime(holiday, startDate, 1);
        expect(answer).toEqual(expected);
    });

    it('Should return 2019-12-25T21:30:00', () => {
        const expected = new Date('2019-12-25T21:30:00');
        const startDate = new Date('2019-12-24T20:30:00');
        const answer = addBusinessTime(holiday, startDate, 60 * 60);
        expect(answer).toEqual(expected);
    });

    it('Should return 2019-12-25T21:00:01', () => {
        const expected = new Date('2019-12-25T21:00:01');
        const startDate = new Date('2019-12-25T00:00:00');
        const answer = addBusinessTime(holiday, startDate, 1);
        expect(answer).toEqual(expected);
    });


    it('Should return 2019-12-24T20:59:59', () => {
        const expected = new Date('2019-12-24T20:59:59');
        const startDate = new Date('2019-12-25T00:00:00');
        const answer = addBusinessTime(holiday, startDate, -1);
        expect(answer).toEqual(expected);
    });
});