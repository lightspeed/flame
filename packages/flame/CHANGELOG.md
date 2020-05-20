# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Refer to the [CONTRIBUTING guide](https://github.com/lightspeed/flame/blob/master/.github/CONTRIBUTING.md) for more info.

## 1.5.0 - 2020-05-13

### Updated

- `small-arrow-up`, `small-arrow-up-right`, `small-arrow-right`, `small-arrow-down-right`, `small-arrow-down`, `small-arrow-down-left`, `small-arrow-left`, `small-arrow-up-left`, and `external-link` icons ([#83](https://github.com/lightspeed/flame/pull/83))

## 1.4.0 - 2020-05-04

### Added

- `note`, `receipt-printer`, `hardware`, `usb-plug`, `wifi`, `apple` and `windows` icons ([#81](https://github.com/lightspeed/flame/pull/81))

## 1.3.0 - 2020-04-20

### Added

- `slice` and `money-sent` icons ([#80](https://github.com/lightspeed/flame/pull/80))

## 1.2.12 - 2020-02-17

### Fixed

- Pin versions for `styled-system` and `@types/styled-system` ([#76](https://github.com/lightspeed/flame/pull/76))

## 1.2.11 - 2020-01-23

### Fixed

- Add in indeterminate state at the DOM level for Checkbox component ([#73](https://github.com/lightspeed/flame/pull/73))

## 1.2.10 - 2019-12-17

### Fixed

- Add esm builds and their associated esm types to final dist output ([#67](https://github.com/lightspeed/flame/pull/67))

## 1.2.9 - 2019-12-12

### Fixed

- Merge more styled system props via the docgen script ([#67](https://github.com/lightspeed/flame/pull/67))
- Leverage inlined named exports instead of an named export object to help the ts doc parser ([#67](https://github.com/lightspeed/flame/pull/67))

## 1.2.8 - 2019-12-11

### Fixed

- Destructure `css` and `className` to the wrapper component for Checkbox and Radio ([#55](https://github.com/lightspeed/flame/pull/55))

## 1.2.7 - 2019-12-10

### Dependencies

- Revert @types/react package update, use locked version ([#64](https://github.com/lightspeed/flame/pull/64))

## 1.2.6 - 2019-12-10

### Fixed

- Force update to trigger new github action workflow ([#62](https://github.com/lightspeed/flame/pull/62))

## 1.2.5 - 2019-12-10

### Fixed

- Docgen from components will be outputted to the final build. This is to properly sync the propsTable with the design system documentation website ([#58](https://github.com/lightspeed/flame/pull/58))

## 1.2.4 - 2019-11-22

### Deprecated

- FlameFonts component will be removed from the next major version of Flame, use [link](https://github.com/lightspeed/flame#link-fonts) instead ([#50](https://github.com/lightspeed/flame/pull/50))

## 1.2.3 - 2019-11-22

### Fixed

- Removed excessive `console.warn` from Group and Input ([#47](https://github.com/lightspeed/flame/pull/47))

## 1.2.2 - 2019-11-21

### Fixed

- Input will no longer crash when status is set to null ([#46](https://github.com/lightspeed/flame/pull/46))

## 1.2.1 - 2019-11-15

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
