## Background

The files in this directory are provided just for reference, and are not actually used in the CustomIcon component in PeerUI. These are the original SVG files provided by the Peerio design team.

Directly linking to SVG files via `<img src='./path-to-file' />` requires the consumer project to have those files in the path defined by this library. e.g. if PeerUI links to `/static/img/custom-icons/`, the consumer project needs to have the files copied into a folder with the exact same path/name in its own build directory. This is how the CustomIcon component originally worked and obviously is quite messy to keep updated.

Instead, the `<CustomIcon>` component now inlines the SVGs. Each of the files in this directory is converted to a JSX compatible format and then copied into the object in `/src/components/CustomIconSvg.tsx`. There is no easy way to automate this because SVGs vary widely depending on the application that created them; even different versions or export settings of the same application can create very different SVG output. A starter list of some of the common changes you'll need to make when adding a new custom icon is included in the instructions below.

## Adding a new icon

1. Add the raw SVG file to this directory.
1. Copy the inline SVG into the object in `CustomIconSvg.tsx`.
1. Remove all JSX-incompatible elements. These include:
   - The `<?xml>` tag commonly at the start of the file
   - The `<!-- Generator -->` comment commonly at the start of the file
1. Convert all properties to their JSX-compatible versions. Common conversions you'll need to make:
   - `class` -> `className`
   - `xmlns:` props, e.g. `xmlns:xlink` -> `xmlnsXlink`
1. Add the standard `className` to each, usually `icon-name default` or `icon-name hover`, which will apply the default icon styling for default and hover states, while also allowing individual icons to be targeted with specific colours.
1. In almost all cases, you'll want to remove inline `<style>`s and `fill`s and use classNames instead. This allows icon colours to be changed downstream via CSS. There are some classNames that you can use for default styling:
   - `.fill-white` applies colour `$white`
   - `.half-opacity` applies `opacityi: 0.54`
   - `path`s with no class by default are black with `opacity: 0.54`
   - `path`s with class `.hover-fill` that are children of `.hover` are `$customicon-hover-default`, currently `$peerio-blue`

TODO: make a test page where user can test CustomIcon
