import './App.css'
import SliderExample from './components/SliderExample'
import DeleteButton from './components/DeleteButton'
import TextFields from './components/TextFields'
import Count from './components/Count'
import EventExample01 from './components/EventExample01'
import EventExample02 from './components/EventExample02'
import EventExample03 from './components/EventExample03'
import EventExample04 from './components/EventExample04'
import EventExample05 from './components/EventExample05'
import PackingList from './components/PackingList'

function App() {
  return (
    <>
      <SliderExample />
      <DeleteButton />
      <TextFields />
      <hr />
      <Count />
      <hr />
      <EventExample01 />
      <EventExample02 />
      <EventExample03 />
      <EventExample04 />
      <EventExample05 />
      <hr />
      <PackingList />
    </>
  )
}

export default App