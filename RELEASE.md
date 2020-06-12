# Release workflow

We follow [semver (Semantic Versioning)](https://semver.org/) for Flame releases. Main releases are handled by Flame maintainers manually when changes merged to `master` are deemed ready for publishing.

We use the `next` (canary) branch as our main working branch. All major change sets should go through `next` as they will be batched for changes. Minor and patches can be fast tracked into master, depending on how big the change is.

## Versioning and publishing the mainline branch

1. Make sure your local `master` branch is up to date including tags
2. Run `yarn release`
3. Choose versions for updated packages (including version bumps for packages with dependencies)
4. Confirm changes, which will automatically update packages, create tags, push to remote `master` and publish packages to npm through [GitHub Actions](https://github.com/lightspeed/flame/tree/master/.github/workflows/)
5. Go to [GitHub releases](https://github.com/lightspeed/flame/releases) and edit the newly created tags. Copy the section of the updated CHANGELOGs in the description (_This is a manual step for now that we'll enventually automate with the [GitHub Releases API](https://developer.github.com/v3/repos/releases/)_)

**Note:** local manual publishing can still be done with `yarn release-and-publish` in case it's needed.

## Pre-releases

We leverage the `next` branch to prepare for release candidates (`x.x.x-rc.x`).

In order to publish `rc` pre-releases on npm with dist-tags, you need to add a [`publishConfig.tag`](https://github.com/lerna/lerna/tree/master/commands/publish#publishconfigtag) inside the packages' `package.json` for Lerna:

```
"publishConfig": {
  "tag": "next"
}
```

This way the package won't be published as `latest` on `npm`. In the example above, a package with the `next` dist tag can be installed with `yarn add @lightspeed/{package-name}@next`.

Read more about [dist-tag and Lerna](https://github.com/lerna/lerna/tree/master/commands/publish#--dist-tag-tag).

## Note on new packages

Start with version `0.1.0` (leave the `package.json` version to `0.0.0`, as Lerna will ask to bump the version when releasing). This is following [Semantic Versioning spec](https://semver.org/#spec-item-4):

> Major version zero (0.y.z) is for initial development. Anything may change at any time. The public API should not be considered stable.

## Dry run

Not a "real" dry-run, but here's how to test versioning (without publishing) for a release:

1. Run `yarn lerna:version`
2. Choose versions for updated packages (including version bumps for packages with dependencies)
3. Confirm changes which will update packages/changelogs and create tags
4. You will then be able to verify the commit
5. You can then revert this by running `yarn lerna:version:revert` which will undo `lerna version` by deleting all tags
   and the "Publish" commit created by Lerna.
