export function arr(object) {
  const keys = Object.keys(object);
  const array = [];
  for (let i = 0; i < keys.length; i++) {
    array.push(object[keys[i]]);
  }
  return array;
}

const SETTINGS_KEY = 'settings';
export function setLocalSettings(settings) {
  if (window.localStorage) {
    window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }
}
export function getLocalSettings(settings) {
  if (window.localStorage && localStorage.getItem(SETTINGS_KEY) !== null) {
    console.log(localStorage.getItem(SETTINGS_KEY));
    const localSettings = JSON.parse(localStorage.getItem(SETTINGS_KEY));
    if (localSettings) {
      settings = localSettings;
    }
  }

  return settings;
}