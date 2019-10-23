# Contributing

By contributing to Flame, you agree to abide by the [code of conduct](/.github/CODE_OF_CONDUCT.md).

## Development

To get started, clone (internal contributors) or fork (external contributors) the repository:

```sh
git clone git@github.com:lightspeed/flame.git
```

### Generate a new component

To create a brand new component, use the following command that will create a base skeleton ready for development:

```sh
yarn generate Component
```

Where `Component` is the name of the component you want to create. This will create the base component structure and story for development/documentation in `packages/flame-{component-name}`, which are considered [add-ons / experimental](https://github.com/lightspeed/flame#add-ons-and-experimental-components) until being deemed ready to go into the [mainline package](https://github.com/lightspeed/flame/tree/master/packages/flame).

### Commands

Each commands below must be run at the root of the project.

#### Handling package dependencies

All commands that affect packages will need to be handled using `yarn workspace <pkg name> <command>` command, example:

```sh
yarn workspace @lightspeed/flame-<package> add left-pad
```

#### Bootstrap the application

Before starting development, you'll need to bootstrap the component library. This phase will generate the needed files for themes, icons and so on.

To bootstrap, run the following command:

```sh
yarn bootstrap # Make sure you've ran `yarn install` first to have up-to-date dependencies
```

The bootstrapping phase is only required when starting on a fresh development, or when working on packages that generate files at build time. This is because this step is usually quite long and only needs to be done once in a while.

#### Launch Storybook for local development

We use [Storybook](https://storybook.js.org/) as developing environment for our components.
To begin development, run:

```sh
yarn dev
```

This will install dependencies, including `packages/` ones, and launch Storybook on [http://localhost:6006/](http://localhost:6006/).

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

1. Create a feature branch from `master` describing the change (`fix-button-space` for example)
2. When done, push your branch to origin and open a Pull Request with the change in the subject (`Fix Button space` for example)
3. Fill in the required information from the Pull Request template
4. Update `CHANGELOG` based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) by adding a `[Unreleased]` section for the changed package(s), for example:

```md
## [Unreleased]

### Fixed

- Fix space ([#520](https://github.com/lightspeed/flame/pull/520))
```

Here's a list of type of changes (for the `###` titles):

- **Added** for new features.
- **Changed** for changes in existing functionality.
- **Deprecated** for soon-to-be removed features.
- **Removed** for now removed features.
- **Fixed** for any bug fixes.
- **Breaking** for any breaking changes.

## FAQ

### Why does running the dev command throw errors when I just pulled the repo or on switching branches?

There's a good chance that some files were not auto-generated. Try bootstraping before starting development.

To do so, run the following command:

```sh
yarn bootstrap
```

You now should be able to run the development environment without any further issues.
