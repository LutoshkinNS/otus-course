import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DateItem } from './DateItem';

export default {
  title: 'date-list-components/DateItem',
  component: DateItem,
} as ComponentMeta<typeof DateItem>;

export const Primary: ComponentStory<typeof DateItem> = () => <DateItem date="Jul 20" />;
