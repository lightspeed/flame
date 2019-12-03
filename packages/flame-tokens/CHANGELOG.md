# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Refer to the [CONTRIBUTING guide](https://github.com/lightspeed/flame/blob/master/.github/CONTRIBUTING.md) for more info.

## [Unreleased]

### Added

- Created css and sass dist folders that contains a better namespaced location for css/sass tokens
- Generate the new tokens into their appropriate utility files
- Added the new `fl-` namespace for token utility files
- Root level partials will also include the new namespaces

### DEPRECATION WARNING

- Root level css and sass files will be removed, prefer going through the appropriate namespaced folder to get your utility files
- The `cr-` namespace will be removed in favour of the `fl-` namespace

## 1.0.0 - 2019-10-08

- Flame tokens is now considered stable :tada:

## 0.1.0 - 2019-09-11

### Added

- Flame tokens is now open source!
