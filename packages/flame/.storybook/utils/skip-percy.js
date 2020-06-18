export function skipPercy(storyComponent) {
  if (!storyComponent.parameters) {
    // eslint-disable-next-line no-param-reassign
    storyComponent.parameters = {};
  }

  // eslint-disable-next-line no-param-reassign
  storyComponent.parameters.percy = { skip: true };
}
