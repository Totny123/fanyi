import * as https from 'https';

export const translate = (word: string) => {
  if (typeof word !== 'string') throw new Error('类型错误');

  let langpair = 'en|zh';
  if (!/a-zA-Z/.test(word[0])) {
    langpair = 'zh|en';
  }

  const query = new URLSearchParams({
    q: word,
    langpair,
  }).toString();

  const options = {
    hostname: 'api.mymemory.translated.net',
    port: 443,
    path: '/get?' + query,
    method: 'GET',
  };

  const request = https.request(options, (response) => {
    const dataArr: Buffer[] = [];

    response.on('data', (data) => {
      dataArr.push(data);
    });

    response.on('end', () => {
      const data = JSON.parse(Buffer.concat(dataArr).toString());
      if (data?.responseData?.translatedText) {
        console.log(data?.responseData?.translatedText);
        process.exit(0);
      } else {
        console.error('发生错误');
        process.exit(2);
      }
    });
  });

  request.on('error', (e) => {
    console.error(e);
  });

  request.end();
};
