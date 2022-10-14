# Contributing

Lightspeed Flame is a project that is actively used and maintained to build Lightspeed products internally. It's being treated the same way as any internal development work and follows our product roadmap as with any features built within Lightspeed.

The main purpose of working on it open-source is to be transparent on what we bring to our customers, but also to be able to get valuable feedback and contribution from the community. We believe open-source is vital to software development as most of the libraries we rely on are built in the open space.

As our journey begins in the open-source world, we are accepting [bug reports](https://github.com/lightspeed/flame/issues/new?template=BUG_REPORT.md), [feature requests](https://github.com/lightspeed/flame/issues/new?template=FEATURE_REQUEST.md) and pull requests for improvements. We are not accepting additions or breaking changes until we have a proper process to triage and approve these changes accordingly.

We still encourage anyone to fork and play around Flame for personal usage. Read our [LICENSE](../LICENSE) in the case of commercial use.

Thanks in advance for any contribution made to Flame and we look forward to hear from you!

## Code of conduct

By contributing to Flame, you agree to abide by the [code of conduct](/.github/CODE_OF_CONDUCT.md).

## Development

To get started, clone (internal contributors) or fork (external contributors) the repository:

```sh
git clone git@github.com:lightspeed/flame.git
```

### Generate a new component

To create a brand new component, use the following command that will create a base skeleton ready for development:

```sh
yarn generate
```

You will be given a choice of "Mainline" or "Add-on" component, then have to choose a name for the component.

#### Mainline component

Mainline components will be created under `packages/flame/src/{ComponentName}`, where all other components are located. The base component structure includes a Storybook file, a test file and a component file.

#### Add-on component

Add-on component will be created under the `packages/flame-{component-name}`. It should be used for add-on/experimental components that are not ready to go into the [mainline package](https://github.com/lightspeed/flame/tree/master/packages/flame) or are considered as "extras" and don't fit our component library.

Add-on components are a completely separate package with their own version and have `@lightspeed/flame` and all its required dependencies as `peerDependencies`. They include the same base component structure as a mainline component, but also have a `tsconfig` to output types as well as their own LICENSE and CHANGELOG files.

### Commands

Each commands below must be run at the root of the project.

#### Bootstrap the application

First, install dependencies:

```sh
yarn install
```

Before starting development, you'll need to bootstrap the component library. This phase will generate the necessary files for theming, icons and so on:

```sh
yarn bootstrap
```

The bootstrapping phase is only required when starting on a fresh install, or when working on packages that generate files at build time. This is because this step is usually quite long and only needs to be done once in a while.

#### Launch Storybook for local development

We use [Storybook](https://storybook.js.org/) as developing environment for our components. To begin development, run:

```sh
yarn dev
```

This will install/update dependencies, including `packages/` ones, and launch Storybook on [http://localhost:6006/](http://localhost:6006/).

#### Link a local version of @lightspeed/flame to your project

If you want to test your changes in a local project, you can link your local version of `@lightspeed/flame` using [yarn link](https://classic.yarnpkg.com/en/docs/cli/link/), e.g.

```sh
# Link the react package
cd packages/flame/dist
yarn link
cd /path/to/your/project
yarn link "@lightspeed/flame"
```

Note that in the above example you need to run `yarn link` inside the `dist` folder of a given package. If you're not seeing local changes reflected in your project, you may need to run `yarn build` inside the `packages/flame` folder and then restart your project's web server or [typescript server](https://tinytip.co/tips/vscode-restart-ts).

When you are finished, here's how you can unlink the local version of flame from your project:

```sh
yarn unlink "@lightspeed/flame" # unlink your local flame
yarn install --force # reinstall published flame
```

You may also have to restart your TypeScript server again.

#### Run tests

```sh
yarn test
```

Or in interactive watch mode:

```sh
yarn test --watch
```

#### Run linting

```sh
yarn lint
```

#### Run typechecking

```sh
yarn typecheck
```

## Git workflow

1. Create a feature branch from `master` (or from a fork if from an external contribution) describing the change (`fix-button-space` for example)
2. When done, push your branch to origin and open a Pull Request with the change in the subject (`Fix Button space` for example)
3. Fill in the required information from the Pull Request template
4. Update `CHANGELOG` based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) by adding a `[Unreleased]` section for the changed package(s). This will allow us to know which type of version bump will be needed once the change is merged and we initiate a [release](../RELEASE.md). For example:

```md
## [Unreleased]

### Fixed

- Fix space ([#520](https://github.com/lightspeed/flame/pull/520))
```

Here's a list of group sections we support for categorization:

- **Added** for new features.
- **Changed** for changes in existing functionality.
- **Deprecated** for soon-to-be removed features.
- **Removed** for now removed features.
- **Fixed** for bug fixes.
- **Dependencies** for updated dependencies.
- **Documentation** for docs updates.
- **Breaking** for breaking changes.

## FAQ

### Why does running the dev command throw errors when I just pulled the repo or on switching branches?

There's a good chance that some files were not auto-generated. Try bootstraping before starting development. To do so, run the following command:

```sh
yarn bootstrap
```

You now should be able to run the development environment without any further issues.
