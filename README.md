Launch [Storybook](https://peeriotechnologies.github.io/ui-library/) to demo components in your browser!

# PeerUI

This repo contains styles and the PeerUI React component library, used on the Peerio desktop application and (eventually) other Peerio web properties.

Please note that this entire repo is a WIP; it is still fairly closely coupled with `peerio-desktop`. It *can* work independently, but requires the consumer to follow some specific instructions; scroll to **Important Notes** near the bottom for more information.

## Usage

1. Include PeerUI as a node_module via GitHub. (PeerUI is not currently published in npm or anywhere else.) In package.json, include this dependency:

```"peer-ui": "github:PeerioTechnologies/ui-library#v4.0.3"```

(It's recommended that you link directly to a specific release. This repo changes frequently and API breakages are not uncommon.)

2. In your component files, `import`/`require` the PeerUI components you need from `peer-ui`, e.g.

```import { Button, Divider } from 'peer-ui'```

3. These can now be used as JSX/TSX components! e.g.

```
render() {
  return(
    <div className="my-neat-component">
      <Button onClick={this.anEvent} icon="star_outline" tooltip="An event" />
      <Divider />
    </div>
  );
}
```

## Important Notes

PeerUI still has vestiges of having been extracted from the `peerio-desktop` repo. As a result, there are some very specific instructions that need to be followed in order for PeerUI to work in your consumer.

### File Paths

#### Styles
You may directly import the SASS file `node_modules/peer-ui/src/style.scss`, or the compiled CSS file `node_modules/peer-ui/dist/style.css`. (`peerio-desktop` requires inserting extra styles in a whitelabeling step, so the individual SASS files are imported directly so that the whitelabel Sass files can be added where they're needed.)

#### Images

The `<CustomIcon>` component, as its name implies, uses a custom set of images for its icons, rather than the Material Icons font. The component assumes that you have placed the icons in a folder `/static/custom-icons/`, wherever your build directory is located. In this repo, you can find the files themselves in `dist/static` and copy them to your build directory.

#### Fonts 

The PeerUI brand uses Open Sans and Source Serif Pro, both available for free from Google Fonts and other foundries. The font stacks are defined with the Sass variables `$font-stack` and `$font-serif`, but it is very tricky to try to send the font files themselves downstream to the consumer. As a result, the consumer is responsible for managing the import of the fonts themselves.

### DOM structure

#### Portals

`<Dialog>` and `<Menu>` both use ReactDOM's `createPortal` function which lets us render the component to an arbitrary place in the document, allowing the component to escape its parent hierarchy. Currently they target the element with the id `root`, which obviously means that something `#root` needs to exist in the document.

## Contributing

Contribution guidelines are available (here)[https://github.com/PeerioTechnologies/ui-library/blob/master/contribute.md].
