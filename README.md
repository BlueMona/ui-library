# peerio-desktop-ui-library

Styles and PeerUI React component library for peerio-desktop

## Documenting some ongoing problems/questions

### Managing static assets

Right now we have the following static assets which are used in `ui-library` and need to then be passed to `peerio-desktop` and whatever else ends up using `ui-library`:

* Material Icons font files & CSS
* Open Sans font files & CSS
* "Custom icons" image files

For the CSS it seems to be common practice to straight up `@import "node_modules/the-module/sass-file"`, so that is OK I guess, though it does seem weird.

The other assets are kinda weird and I'm not sure how to manage the asset pipeline. For example, the `<CustomIcon>` component currently puts a path to the icon files in the `img src`, but that path is going to depend on where those assets get placed in the build folder. I've made a `static/` folder that mirrors the structure of `static/` on `peerio-desktop`, but is it normal that we would require projects that use `ui-library` to have a specific structure in their build folder? That seems clunky. Can the path be managed by some kind of config?

### Helper functions from desktop

`ui-library` uses several "helper" functions that are also used on `peerio-desktop`. For now I've just copied them but I'm wondering what the best way is to share them between the two. Practically the easiest thing would be to treat them the way we've done the Sass variables -- keep them in `ui-library` and then pull them into `peerio-desktop`. This is another case where that is simple as a workflow, but feels strange in terms of organization of concerns.

### Portals

`<Dialog>` and `<Menu>` both use ReactDOM's `createPortal` function which lets us render the component to an arbitrary place in the document, allowing the component to escape its parent hierarchy. Currently they target the element with the id `root`, which obviously means that something `#root` needs to exist in the document. This is a similar thing to above; the functioning of these components assumes a certain HTML structure from the project that is using them.

### Weirdness with types

Have not yet figured out how to properly type events. Right now all events (click, escape key, tab key) are `any` type.

### Conditional interface options

e.g. in `<Chip>`, making `onDeleteClick` necessary only if `deletable` is true.