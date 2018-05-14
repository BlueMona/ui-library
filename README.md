# peerio-desktop-ui-library
Styles and PeerUI React component library for peerio-desktop

## Documenting some ongoing problems/questions

### Transferring static assets when this repo/package gets included elsewhere
Right now we have the following static assets which are used in `ui-library` and need to then be passed to `peerio-desktop` and whatever else ends up using `ui-library`:
* Material Icons font files & CSS
* Open Sans font files & CSS
* "Custom icons" image files

For the CSS it seems to be common practice to straight up `@import "node_modules/the-module/sass-file"`, so that is OK I guess, though it does seem weird.

The other assets are kinda weird and I'm not sure how to manage the asset pipeline. For example, the `CustomIcon` component currently puts a path to the icon files in the `img src`, but that path is going to depend on where those assets get placed in the build folder. I've made a `static/` folder that mirrors the structure of `static/` on `peerio-desktop`, but is it normal that we would require projects that use `ui-library` to have a specific structure in their build folder? That seems clunky. Can the path be managed by some kind of config?