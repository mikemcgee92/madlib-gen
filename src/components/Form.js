import React, { useEffect, useState } from 'react';

// replace each word in brackets with an interpolated string
const madLibs = [
  {
    text: `The [adj] brown fox [verb] over the lazy [noun].`,
    blanks: ['adj', 'verb', 'noun'],
  },
  {
    text: `[noun]s love my [adj] sphinx of quartz.`,
    blanks: ['noun', 'adj'],
  },
];

export default function Form() {
  const [madLib, setMadLib] = useState(madLibs[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const randomMadLib = () => {
    // Force a different index than current
    const newIndex = currentIndex === 0 ? 1 : 0;
    console.log('Switching from index', currentIndex, 'to', newIndex);

    setCurrentIndex(newIndex);
    setMadLib(madLibs[newIndex]);
  };

  useEffect(() => {
    console.log('Current madLib:', madLib);
  }, [madLib]);

  return (
    <div>
      <p>Current template: {currentIndex + 1}</p>
      {madLib.blanks.map((blank) => (
        <input key={blank} type="text" placeholder={blank} />
      ))}
      <button type="button" onClick={randomMadLib}>
        New Mad Lib
      </button>
      <button type="submit">Submit</button>
    </div>
  );
}
