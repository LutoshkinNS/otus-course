import { Button } from './Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Button/Button',
  component: Button,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};
