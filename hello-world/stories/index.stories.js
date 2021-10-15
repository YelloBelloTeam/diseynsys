import App from '../src/App.svelte';

export const storyUnarmed = () => App;

export const storyNamed = () => ({
  Component: App,
  props: {
    name: 'John Doe',
  },
});
