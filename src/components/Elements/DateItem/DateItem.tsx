interface DateItemProps {
  date: string;
}

export const DateItem = ({ date }: DateItemProps) => {
  return <div data-testid="DateItemTest">{date}</div>;
};
