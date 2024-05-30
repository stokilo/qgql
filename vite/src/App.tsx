import {Button, Calendar, CalendarCell, CalendarGrid, CalendarStateContext, Heading} from 'react-aria-components';
import {ButtonGroup} from "./components/ButtonGroupAPI";
import {useContext} from "react";


function CalendarValue() {
    let state = useContext(CalendarStateContext)!;
    let date = state.value?.toString();
    let formatted = date;
    return <small>Selected date: {formatted!}</small>;
}

function App() {
    return (
        <>
            <Calendar aria-label="Appointment date">
                <header>
                    <Button slot="previous">◀</Button>
                    <Heading />
                    <Button slot="next">▶</Button>
                </header>
                <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
                <CalendarValue />
            </Calendar>
        </>
    );
}
export default App;
