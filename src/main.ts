import * as https from 'https';

export const translate = (word: string) => {
  if (typeof word !== 'string') throw new Error('类型错误');

  const query = new URLSearchParams({
    q: word,
    langpair: 'en|zh',
  }).toString();

  const options = {
    hostname: 'api.mymemory.translated.net',
    port: 443,
    path: '/get?' + query,
    method: 'GET',
  };

  const req = https.request(options, (res) => {
    res.on('data', (d) => {
      console.log('feng', JSON.parse(d.toString()));
    });
  });

  req.on('error', (e) => {
    console.error(e);
  });

  req.end();
};
