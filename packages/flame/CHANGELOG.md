# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Refer to the [CONTRIBUTING guide](https://github.com/lightspeed/flame/blob/master/.github/CONTRIBUTING.md) for more info.

## [Unreleased]

### Fixed

- InputGroup will now properly manage null children, instead of throwing errors ([#43](https://github.com/lightspeed/flame/pull/43))

## 1.2.0 - 2019-11-14

### Added

- Dropdown menu position can now be further customized. You can simply pass the the appropriate PopperJS placement to the `placement` prop and the menu will be adjusted accordingly ([#37](https://github.com/lightspeed/flame/pull/37))

### Fixed

- Dropdown toggle when clicked will not be overwritten if we override the `onClick` prop ([#41](https://github.com/lightspeed/flame/pull/41))
- InputGroup is now typed properly using the `Flex` props ([#41](https://github.com/lightspeed/flame/pull/41))
- Made Input status and message optional in typings ([#41](https://github.com/lightspeed/flame/pull/41))
- Pass back in space props to the InputGroupAddon ([#41](https://github.com/lightspeed/flame/pull/41))

## 1.1.0 - 2019-10-25

### Added

- Add Interac icon ([#33](https://github.com/lightspeed/flame/pull/33))
- Add InputGroup and FormField (Label + FormHelper) components ([#2](https://github.com/lightspeed/flame/pull/2))
- Expose Input, Radio and Checkbox base components ([#2](https://github.com/lightspeed/flame/pull/2))
- Enable `zIndex` Styled System props for Button, BaseInput and InputGroupAddon components ([#2](https://github.com/lightspeed/flame/pull/2))

### Changed

- Input no longer uses objects to represent status and status message ([#2](https://github.com/lightspeed/flame/pull/2))

### Deprecated

- Group component will be removed from the next major version of Flame ([#2](https://github.com/lightspeed/flame/pull/2))

## 1.0.0 - 2019-10-08

- Flame is now considered stable :tada:

## 0.3.1 - 2019-10-08

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
