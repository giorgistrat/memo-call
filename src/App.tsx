import React, { useState } from 'react';
import './App.css';

// type ChildComponentTypes = {
//   onClick: MouseEventHandler<HTMLButtonElement>;
// };

// const ChildComponent: React.FC<ChildComponentTypes> = ({ onClick }) => {
//   console.log('ChildComponent rendered');
//   return <button onClick={onClick}>Click Me</button>;
// };

// const sleep = (milliseconds: number): void => {
//   let start = new Date().getTime();
//   for (var i = 0; i < 1e7; i++) {
//     if (new Date().getTime() - start > milliseconds) {
//       console.log('bla');
//       break;
//     }
//   }
// };

// function App() {
//   const [count, setCount] = useState(0);

//   const hundredCount = () => {
//     console.log('start');
//     sleep(2000);
//     console.log('end');
//     return 100 + count;
//   };

//   const val = hundredCount();

//   return (
//     <>
//       {val}
//       <p
//         style={{ color: 'white', textTransform: 'uppercase' }}
//         onClick={() => setCount(count + 1)}
//       >
//         Click Me!
//       </p>

//       <button onClick={() => setCheck((prevState) => !prevState)}>Test Sleep and Memo</button>
//     </>
//   );
// }

type ChildProps = {
  text: string;
};

type ChildProps2 = {
  text: Function;
};

const Child = React.memo(function ({ text }: ChildProps) {
  console.log('Child.js');
  return <div>{text}</div>;
});

const Child2 = React.memo(function ({ text }: ChildProps2) {
  console.log('Child2.js');
  return <div>{text.name}</div>;
});

function App() {
  const [text, setText] = useState('');
  console.log('App.js');

  return (
    <div>
      <button onClick={() => setText((prev) => (prev += 'a'))}>Click me</button>
      Hello World
      <Child text={text} />
      <Child2 text={React.useCallback(() => {}, [])} />
    </div>
  );
}

export default App;

// App.js
// Child.js
// Child2.js
// * end initial render
// App.js
// Child.js
