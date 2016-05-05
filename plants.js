var plants = {
  // from algorithmic botany
  // by Lindenmayer and Prusinkiewicz
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
    maxGenerations: 4,
    translateX: 100,
    translateY: null,
  },

  1: {
    name: 'fern',
    axiom: 'F',
    rules: {
      F: 'F[+F]F[-F][F]'
    },
    rotation: 20,
    lengthFactor: 0.5,
    initialLength: 2.5,
    maxGenerations: 5,
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
    maxGenerations: 6,
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
    initialLength: 2.6,
    maxGenerations: 8,
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
    initialLength: 2.8,
    maxGenerations: 8,
    translateX: null,
    translateY: null,
  },

  // plants that I've invented
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
    maxGenerations: 6,
    translateX: null,
    translateY: null,
  },

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
    maxGenerations: 6,
    translateX: -50,
    translateY: -100,
  },

  7: {
    name: 'spidery',
    axiom: 'X',
    rules: {
      X: '+F[--[]-[X]-X]-F[-FX]+X',
      F: 'FF'
    },
    rotation: 20,
    lengthFactor: 0.5,
    initialLength: 3,
    maxGenerations: 6,
    translateX: null,
    translateY: 50,
  },

  8: {
    name: 'lace',
    axiom: 'X',
    rules: {
      X: 'F[-F-X][+X]FX',
      F: 'FF'
    },
    rotation: 25.7,
    lengthFactor: 0.5,
    initialLength: 2.6,
    maxGenerations: 8,
    translateX: null,
    translateY: null,
  },
}
