import DomWorker from './DomWorker';
import ListComponent from './components/ListComponent';
import TitleComponent from './components/TitleComponent';
import CenterComponent from './components/CenterComponent';

const names = ['Harry', 'Rohn', 'Jimy', 'Germiona'];

DomWorker.mount(
    new TitleComponent('Pro'), 
    document.getElementById('title')
);

DomWorker.mount(
    new ListComponent(names), 
    document.getElementById('list')
);

DomWorker.mount(
    new CenterComponent(
        new ListComponent(names)
    ), 
    document.getElementById('center')
);

const btn = document.createElement('button');
btn.innerText = 'click';

DomWorker.mount(
    new CenterComponent(btn),
    document.getElementById('center_second')
)

const brush = {
  color: '',
  createComponent: () => { console.log('Я создатель') },
  render: function(canvas) {
    canvas.style.width = '400px';
    canvas.style.height = '250px';
    canvas.style.backgroundColor = color;
  },
  setColor: function(color) {
      this.color = color;
      return this;
  }  
};

DomWorker.mount(
    brush.setColor('red'),
    document.getElementById('other')
)

// import  Counter from './components/Counter'
// import { BaseButton, PrettyButton, FunctionalButton } from './components/Buttons'

// const counter = new Counter(document.getElementById("counter"));

// const baseBtn = new BaseButton('footer', 'base');
// baseBtn.render();

// const prettyBtn = new PrettyButton('footer', 'pretty', 'pretty-btn');
// prettyBtn.render();


// const functionalBtn = new FunctionalButton('footer', 'func', 'pretty-btn', () => { alert('click') });
// functionalBtn.render();

//counter.timerStart();