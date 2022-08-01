window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector: string, text: string) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  ['chrome', 'node', 'electron'].forEach((type) => {
    replaceText(`${type}-version`, process.versions[type]);
  });
});
