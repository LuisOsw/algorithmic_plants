var plants = {
  0: {
    name: 'bush',
    axiom: 'F',
    rules: {
      F: 'FF-[-F+F+F]+[+F-F-F]'
    },
    rotation: 22.5,
    lengthFactor: 0.5,
    // initial length gets divided by height
    initialLength: 4.5,
    maxClicks: 4,
    translateX: 100,
    translateY: null,
  },

  1: {
    name: 'kelpy',
    axiom: 'F',
    rules: {
      F: 'F[+F]F[-F][F]'
    },
    rotation: 20,
    lengthFactor: 0.5,
    initialLength: 3,
    maxClicks: 5,
    translateX: null,
    translateY: null,
  },

  2: {
    name: 'feathery',
    axiom: 'X',
    rules: {
      X: 'F-[[X]+X]+F[+FX]-X',
      F: 'FF'
    },
    rotation: 20,
    lengthFactor: 0.5,
    initialLength: 3.5,
    maxClicks: 6,
    translateX: null,
    translateY: null,
  },

  3: {
    name: 'spades',
    axiom: 'X',
    rules: {
      X: 'F[+X][-X]FX',
      F: 'FF'
    },
    rotation: 25.7,
    lengthFactor: 0.5,
    initialLength: 3,
    maxClicks: 8,
    translateX: null,
    translateY: null,
  },

  4: {
    name: 'hay fever',
    axiom: 'X',
    rules: {
      X: 'F[+X]F[-X]+X',
      F: 'FF'
    },
    rotation: 20,
    lengthFactor: 0.5,
    initialLength: 3,
    maxClicks: 8,
    translateX: null,
    translateY: null,
  },

  // my own pattern - japanese waves-esque
  5: {
    name: 'woodblock waves',
    axiom: 'X',
    rules: {
      X: 'FFF-[+F+[F]+F[X]+X]+F[+FX]-X',
      F: 'FF'
    },
    rotation: 22.5,
    lengthFactor: 0.5,
    initialLength: 6,
    maxClicks: 6,
    translateX: null,
    translateY: null,
  },

  // spiral fan
  6: {
    name: 'spiral fan',
    axiom: 'X',
    rules: {
      X: '-[++[]+[X]+X]+F[+FX]-X',
      F: 'FF'
    },
    rotation: 20,
    lengthFactor: 0.5,
    initialLength: 2.5,
    maxClicks: 6,
    translateX: -50,
    translateY: -100,
  }
}
