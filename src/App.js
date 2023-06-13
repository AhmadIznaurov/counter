import Desktop from "./Desktop/Desktop";
import Section from "./Section/Section";
import Footer from "./Footer/Footer";
import Clock from "./ClockOnline/Clock";
import Tasks from "./TASKS/Tasks";
import BadComponent from "./TASKS/BadComponent";
import SomeBlock from "./TASKS/SomeBlock";
import ParentBlock from "./TASKS/ParentBlock";


function App() {
  return (
    <div>
        <Desktop />
        <Section />
        <Footer />
        <Clock />
        {/*<Tasks />*/}
        {/*<BadComponent />*/}
        {/*<SomeBlock />*/}
        {/*<ParentBlock />*/}
    </div>
  );
}

export default App;
