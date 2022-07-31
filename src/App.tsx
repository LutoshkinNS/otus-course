import { DateItem, DateList } from './components/Elements';
import { getDateMonth } from './utils/Date';
import { ToggleButton } from './components/Elements';
import { useState } from 'react';

function App() {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <>
      {isShow && (
        <DateList>
          {getDateMonth(2022, 7).map((item) => (
            <DateItem key={item} date={item} />
          ))}
        </DateList>
      )}
      <ToggleButton
        onClick={() => {
          setIsShow(true);
        }}
      >
        {isShow ? 'hide' : 'show'}
      </ToggleButton>
    </>
  );
}

export default App;
