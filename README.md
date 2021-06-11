# alan-btn-test

This repo is an alan-ai web component bug implementation. Trying to implement the web component via the alan-ai documentation is failing to render the alan-ai button.

### Noted issues

- The docs are not correct in the install instructions. `npm install @alan-button` is incorrect and needs to be updated to reflect `npm install @alan-ai/alan-button`. This will successfully install the package.

- Even with the correct package installation location, the package still fails to render. The assumption here would be to pull in the component like this: `import alanBtn from '@alan-ai/alan-button/` but that fails. Further traversing into the package still doesn't yield any success.


### Sugestions
- Update the package so standard component registration both globally and locally will work.

- Update the documentation to reflect an increase in specificity when implementing the alan-ai web component