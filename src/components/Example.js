import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('kyk');
  const [arr, setArr] = useState({ exam: 'test' });

  return (
    <div>
      <p>You name {name} times</p>
      <button onClick={() => setName(name + 'a')}>Click me</button>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked {arr['exam']} times</p>
      <button onClick={() => setArr({ exam: 'ttttttttttttt' })}>
        Click me
      </button>
    </div>
  );
}

export default Example;
