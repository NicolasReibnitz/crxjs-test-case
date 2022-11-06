import mainWorld from './main-world?script&module';

const appEl = document.createElement('div');
appEl.id = 'insta-cheat';
document.body.prepend(appEl);

const script = document.createElement('script');
script.src = chrome.runtime.getURL(mainWorld);
script.type = 'module';
document.head.prepend(script);
