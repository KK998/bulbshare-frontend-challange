const request = require('supertest');
const app = require('../index');

describe('API Routes', () => {
    describe("/api/feed", () => {
        it('should return 200 ok', async () => {
            await request(app)
                .get('/api/feed')
                .expect(200);
        })

        it('should return 5 items', async () => {
            const response = await request(app)
                .get('/api/feed')
                .expect(200);

            expect(response.body.length).toEqual(5);
        });

        it('Should return 2 items when PAGE_SIZE is 2', async () => {
            const response = await request(app)
                .get('/api/feed?PAGE_SIZE=2')
                .expect(200);

            expect(response.body.length).toEqual(2);
        });

        it('Should return different 2 items when PAGE_SIZE is 2 and PAGE is 2', async () => {
            const response = await request(app)
                .get('/api/feed?PAGE_SIZE=2&PAGE=2')
                .expect(200);

            expect(response.body.length).toEqual(2);
            expect(response.body[0].brand.name).toEqual('Meta');
        });
    });

    describe("/api/comments", () => {
        it('should return 200 ok', async () => {
            await request(app)
                .get('/api/comments')
                .expect(200);
        })

        it("should return all items", async () => {
            const response = await request(app)
                .get('/api/comments')
                .expect(200);

            expect(response.body.length).toEqual(3);
        });

        it("should return 1 item if correct briefref is set", async () => {
            const response = await request(app)
                .get('/api/comments?briefref=brief-DD650C75-1401-11ED-B757-0A9E4A196D20')
                .expect(200);

            expect(response.body.length).toEqual(1);
        });

        it("should return 0 item if incorrect briefref is set", async () => {
            const response = await request(app)
                .get('/api/comments?briefref=I dont exist')
                .expect(200);

            expect(response.body.length).toEqual(0);
        });
    });

    afterAll(done => {
        app.close(done);
    });
});
