import { DateItem, DateList } from './components/Elements';
import { getDateMonth } from './utils/Date';

function App() {
  return (
    <DateList>
      {getDateMonth(2022, 7).map((item) => (
        <DateItem key={item} date={item} />
      ))}
    </DateList>
  );
}

export default App;
