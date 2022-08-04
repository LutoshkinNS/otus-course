import { ToggleButton } from './ToggleButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Buttons/ToggleButton',
  component: ToggleButton,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
    primary: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof ToggleButton>;

export const Template: ComponentStory<typeof ToggleButton> = (args) => <ToggleButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'ToggleButton',
};
