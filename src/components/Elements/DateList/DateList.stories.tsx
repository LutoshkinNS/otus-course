import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DateList } from './DateList';
import { DateItem } from '../DateItem';

export default {
  title: 'date-list-components/DateList',
  component: DateList,
} as ComponentMeta<typeof DateList>;

export const Primary: ComponentStory<typeof DateList> = () => (
  <DateList>
    <DateItem date={'Jul 9'} />
    <DateItem date={'Jul 10'} />
  </DateList>
);
