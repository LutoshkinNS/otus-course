import styled from 'styled-components';

export interface DateItemProps {
  date: string;
}

const ListItem = styled.li`
  margin-right: 10px;
  list-style-type: none;
`;

export const DateItem = ({ date }: DateItemProps) => {
  return <ListItem data-testid="DateItemTest">{date}</ListItem>;
};
