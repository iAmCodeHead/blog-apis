const faker = require('faker');
const { Blog } = require('../../../models');

describe('Blog model', () => {
    describe('Blog validation', () => {
        let newPost;
        beforeEach(() => {
            newPost = {
                name: faker.name.findName(),
                email: faker.internet.email().toLowerCase(),
                body: "This is a sample post body"
            }
        });

        test('should correctly validate a valid post', async () => {
            await expect(new Blog(newPost).validate()).resolves.toBeUndefined();
          });
    });
});