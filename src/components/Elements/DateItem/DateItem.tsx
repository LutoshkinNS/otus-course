import styled from 'styled-components';

interface DateItemProps {
  date: string;
}

const ListItem = styled.li`
  margin-right: 10px;
`;

export const DateItem = ({ date }: DateItemProps) => {
  return <ListItem data-testid="DateItemTest">{date}</ListItem>;
};
