module.exports = {
  chromeSelector: '.container > *, #root > *, .story-decorator > *',
  diffingEngine: 'pixelmatch',
  configurations: {
    'chrome.laptop': {
      target: 'chrome.app',
        width: 1366,
        height: 768,
        deviceScaleFactor: 1,
        mobile: false
    },
  },
  fetchFailIgnore: 'localhost:6007/get',
};

