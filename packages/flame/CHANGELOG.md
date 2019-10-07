# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Refer to the [CONTRIBUTING guide](https://github.com/lightspeed/flame/blob/master/.github/CONTRIBUTING.md) for more info.

## [Unreleased]

### Fixed

- Removed component extension from Badge, as there seems to be a bug with the outputted types ([#21](https://github.com/lightspeed/flame/pull/21))

## 0.3.0 - 2019-10-07

### Breaking

- Alert: Remove exposed `AlertState` type ([#15](https://github.com/lightspeed/flame/pull/15))

### Added

- Alert: Added the ability to pass `icon` ([#15](https://github.com/lightspeed/flame/pull/15))
- Card: Enable `space` Styled System props ([#12](https://github.com/lightspeed/flame/pull/12))

### Fixed

- Adjust added Partial within the Flex color props to prevent wonky type gen on opacity prop ([#19](https://github.com/lightspeed/flame/pull/19))

## 0.2.0 - 2019-10-01

### Changed

- SVGs will now be copied into their respective folder instead of being hosted on the global namespace ([#9](https://github.com/lightspeed/flame/pull/9))

## 0.1.1 - 2019-09-18

### Fixed

- Refactor and improve `useEventListener` hook ([#4](https://github.com/lightspeed/flame/pull/4))

## 0.1.0 - 2019-09-11

### Added

- Flame is now open source!
