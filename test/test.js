const test = require('tape');
const supertest = require('supertest');
const app = require('../src/app');
const { filterData } = require('./../src/logic');

const actual = {
  data: [{
    type: 'gif',
    id: 'MCfhrrNN1goH6',
    slug: 'easy-ear-MCfhrrNN1goH6',
    url: 'https://giphy.com/gifs/easy-ear-MCfhrrNN1goH6',
    bitly_gif_url: 'https://gph.is/2zcNO4C',
    bitly_url: 'https://gph.is/2zcNO4C',
    embed_url: 'https://giphy.com/embed/MCfhrrNN1goH6',
    username: '',
    source: 'https://www.reddit.com/r/gifs/comments/7lc9g4/easy_there_youre_chewing_my_ear_off/',
    rating: 'g',
    content_url: '',
    source_tld: 'www.reddit.com',
    source_post_url: 'https://www.reddit.com/r/gifs/comments/7lc9g4/easy_there_youre_chewing_my_ear_off/',
    is_sticker: 0,
    import_datetime: '2017-12-21 20:40:19',
    trending_datetime: '2019-07-11 13:45:02',
    user: {
      avatar_url: 'https://media1.giphy.com/avatars/leroypatterson/kmR9dQjdzWa3.gif',
      banner_url: 'kjk',
    },
    title: 'cat GIF',
  }],
};

test('test filterData function', (t) => {
  const expected = [{
    Imagesurl: 'https://media1.giphy.com/avatars/leroypatterson/kmR9dQjdzWa3.gif',
    ImagesTitle: 'cat GIF',
  }];
  t.deepEqual(filterData(actual.data), expected, `should equals ${JSON.stringify(expected)}`);
  t.end();
});

test('test success for main endpoint /', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      const isInclode = res.text.includes('Your Gallery');
      t.equals(isInclode, true, 'should response have Your Gallery');
      t.end();
    });
});

test('test success for /photo endpoint', (t) => {
  supertest(app)
    .get('/photo')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      t.error(err);
      const isInclode = res.text.includes('gifs__gif');
      t.equals(isInclode, true, 'should response have gifs__gif');
      t.end();
    });
});

test('test for client error 404', (t) => {
  supertest(app)
    .get('/err')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.equal(res.clientError, true, 'should be client error');
        t.end();
      }
    });
});
