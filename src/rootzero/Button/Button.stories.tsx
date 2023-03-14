import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "rootzero/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => (
  <Button>Button</Button>
);

export const Theme: ComponentStory<typeof Button> = () => {
  return (
    <div>
      <Button theme="primary">Primary</Button>
      <Button theme="secondary">Secondary</Button>
      <Button theme="ghost">Ghost</Button>
      <Button theme="outlined">Outlined</Button>
    </div>
  );
};
