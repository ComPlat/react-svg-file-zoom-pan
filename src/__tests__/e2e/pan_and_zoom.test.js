module.exports = {
  'step 1: render svg': browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body')
      .assert.title('React App')
      .waitForElementVisible('#svg-file-container', 2000)
      .pause(50)
  },

  'step 2: move x=100': browser => {
    browser
      .moveToElement('#svg-file-container', 5, 5)
      .mouseButtonDown(0)
      .moveTo(null, 100, 0)
      .mouseButtonUp(0)
      .assert.attributeContains(
        '#svg-file-container > g',
        'transform',
        'translate(100,0) scale(1)',
      )
      .pause(50)
  },

  'step 3: move y=50': browser => {
    browser
      .moveToElement('#svg-file-container', 5, 5)
      .mouseButtonDown(0)
      .moveTo(null, 0, 50)
      .mouseButtonUp(0)
      .assert.attributeContains(
        '#svg-file-container > g',
        'transform',
        'translate(100,50) scale(1)',
      )
      .pause(50)
  },

  'step 4: scroll +1000': browser => {
    browser
      .execute(function () {
        var evt = document.createEvent('MouseEvents');
        evt.initEvent('wheel', true, true);
        evt.deltaY = +1000;
        document.querySelector('#svg-file-container > g').dispatchEvent(evt);
      }, [])
      .assert.attributeContains(
        '#svg-file-container > g',
        'transform',
        'translate(18.25,-1.75) scale(0.25)',
      )
      .pause(50)
  },

  'step 5: move x=200;y=30': browser => {
    browser
      .moveToElement('#svg-file-container', 5, 5)
      .mouseButtonDown(0)
      .moveTo(null, 200, 30)
      .mouseButtonUp(0)
      .assert.attributeContains(
        '#svg-file-container > g',
        'transform',
        'translate(218.25,28.25) scale(0.25)',
      )
      .pause(50)
  },

  'step 6: scroll -500': browser => {
    browser
      .execute(function () {
        var evt = document.createEvent('MouseEvents');
        evt.initEvent('wheel', true, true);
        evt.deltaY = -500;
        document.querySelector('#svg-file-container > g').dispatchEvent(evt);
      }, [])
      .assert.attributeContains(
        '#svg-file-container > g',
        'transform',
        'translate(445.5,75.5) scale(0.5)',
      )
      .pause(50)
  },

  'step N: double click': browser => {
    browser
      .moveToElement('#svg-file-container', 5, 5)
      .doubleClick()
      .assert.attributeContains(
        '#svg-file-container > g',
        'transform',
        'translate(0,0) scale(1)',
      )
      .pause(50)
      .end();
  },
};
