import  Counter from './components/Counter'
import BaseButton from './components/Buttons/BaseButton'
import PrettyButton from './components/Buttons/PrettyButton'
import FunctionalButton from './components/Buttons/FunctionalButton'

const counter = new Counter(document.getElementById("counter"));

//const baseBtn = new BaseButton('footer', 'base');
//baseBtn.render();

const prettyBtn = new PrettyButton('footer', 'pretty', 'pretty-btn');
prettyBtn.render();


const functionalBtn = new FunctionalButton('footer', 'func', 'pretty-btn', () => { alert('click') });
functionalBtn.render();

//counter.timerStart();