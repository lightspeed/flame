export function skipDocs(storyComponent) {
  if (!storyComponent.parameters) {
    // eslint-disable-next-line no-param-reassign
    storyComponent.parameters = {};
  }

  // eslint-disable-next-line no-param-reassign
  storyComponent.parameters.docs = {
    page: null,
  };
}
