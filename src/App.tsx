import { DateItem, DateList } from './components/Elements';
import { getDateMonth } from './utils/Date';
import { Button } from './components/Elements/Button';

function App() {
  return (
    <>
      <DateList>
        {getDateMonth(2022, 7).map((item) => (
          <DateItem key={item} date={item} />
        ))}
      </DateList>
      <Button>show</Button>
    </>
  );
}

export default App;
