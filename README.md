# ui-library

Styles and PeerUI React component library for Peerio desktop application and web properties. Please note that this entire repo is a WIP; it is designed to function within Peerio properties (see `peerio-desktop` and `peerio-cms`). It *can* work independently, but requires the consumer to follow some specific instructions, outlined below.

### File Paths

#### Styles
You may directly import the SASS file `node_modules/peer-ui/src/style.scss`, or the compiled CSS file `node_modules/peer-ui/dist/style.css`. Peerio Desktop requires inserting extra styles in a whitelabeling step, so the individual SASS files are imported directly so that the whitelabel Sass files can be added where they're needed.

#### Images

The `<CustomIcon>` component assumes that you have placed the icons in a folder `/static/custom-icons/`, wherever your build directory is located. The files themselves are located in `dist/static`

#### Fonts 

It was too tricky to try to integrate fonts into this repo that could be reliably passed to the consumer. So this repo is font agnostic and relies on the consumer's font stack.

### DOM structure

#### Portals

`<Dialog>` and `<Menu>` both use ReactDOM's `createPortal` function which lets us render the component to an arbitrary place in the document, allowing the component to escape its parent hierarchy. Currently they target the element with the id `root`, which obviously means that something `#root` needs to exist in the document.