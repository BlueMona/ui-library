# Contributing

Any member of the PeerioTechnologies organization can commit directly to this repo. Ideally, though, all changes to the repo are done via branching and pull requests, so that maintainers/contributors can be notified of the changes that are being made.

## Testing

Test your changes on a branch before submitting a pull request! You can test by including and installing a specific branch in your project's `package.json`, like this:

`"peer-ui": "github:PeerioTechnologies/ui-library#your-branch-name"`

## Releases

We follow [semver](https://semver.org/). We have probably made some mistakes on this front in the past, but that hasn't been an issue since PeerUI's release schedule has been defined by `peerio-desktop`'s needs, i.e. PeerUI is only developed when `peerio-desktop` needs something from it, no work is done on it otherwise. As PeerUI becomes more of an independent repo being deployed on other properties, we'll be more strict with this.

Maintainers, follow these steps to release:

1. Version bump in `package.json`
1. `npm install` to version bump `package-lock.json`
1. `npm run test` to make sure tests are passing
1. `npm run build` to run `tsc`, build the `css` files, and build Storybook
1. Create a new release, give it a title and tag, and put a list of changes in the description.
1. Publish!
