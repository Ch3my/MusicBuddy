export const Scales = [
    {
        name: 'C',
        major: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
        minor: ['C', 'D', 'E♭', 'F', 'G', 'A♭', 'B♭'],
        dorian: ["C", "D", "E♭", "F", "G", "A", "B♭"],
        frigio: ["C", "D♭", "E♭", "F", "G", "A♭", "B♭"],
        lidio: ["C", "D", "E", "F#", "G", "A", "B"],
        mixolidio: ["C", "D", "E", "F", "G", "A", "B♭"],
        locrio: ["C", "D♭", "E♭", "F", "G♭", "A♭", "B♭"],
        relativaMenor: "Am"
    },
    {
        name: 'C#',
        major: ['C#', 'E♭', 'F', 'G♭', 'A♭', 'B♭', 'C'],
        minor: ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'],
        dorian: ['C#', 'D#', 'E', 'F#', 'G#', 'A#', 'B'],
        frigio: ['C#', 'D', 'E', 'F#', 'G#', 'A', 'B'],
        lidio: ['C#', 'D#', 'F', 'G', 'G#', 'A#', 'C'],
        mixolidio: ['C#', 'D#', 'F', 'F#', 'G#', 'A#', 'B'],
        locrio: ['C#', 'D', 'E', 'F#', 'G', 'A', 'B'],
        relativaMenor: 'A#m'
    },
    {
        name: 'D',
        major: ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
        minor: ['D', 'E', 'F', 'G', 'A', 'A#', 'C'],
        dorian: ['D', 'E', 'F', 'G', 'A', 'B', 'C'],
        frigio: ['D', 'E♭', 'F', 'G', 'A', 'B♭', 'C'],
        lidio: ['D', 'E', 'F#', 'G#', 'A', 'B', 'C#'],
        mixolidio: ['D', 'E', 'F#', 'G', 'A', 'B', 'C'],
        locrio: ['D', 'D#', 'F', 'G', 'G#', 'A#', 'C'],
        relativaMenor: "Bm"
    },
    {
        name: 'D#',
        major: ['D#', 'F', 'G', 'G#', 'A#', 'C', 'D'],
        minor: ['D#', 'F', 'F#', 'G#', 'A#', 'B', 'C#'],
        dorian: ['D#', 'F', 'F#', 'G#', 'A#', 'C', 'C#'],
        frigio: ['D#', 'E', 'F#', 'G#', 'A#', 'B', 'C#'],
        lidio: ['D#', 'F', 'G', 'A', 'A#', 'C', 'D'],
        mixolidio: ['D#', 'F', 'G', 'G#', 'A#', 'C', 'C#'],
        locrio: ['D#', 'E', 'F#', 'G', 'A', 'B', 'C#'],
        relativaMenor: "Cm"
    },
    {
        name: 'E',
        major: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
        minor: ['E', 'F#', 'G', 'A', 'B', 'C', 'D'],
        dorian: ['E', 'F#', 'G', 'A', 'B', 'C#', 'D'],
        frigio: ['E', 'F', 'G', 'A', 'B', 'C', 'D'],
        lidio: ['E', 'F#', 'G#', 'A#', 'B', 'C#', 'D#'],
        mixolidio: ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D'],
        locrio: ['E', 'F', 'G', 'A', 'B♭', 'C', 'D'],
        relativaMenor: "C#m"
    },
    {
        name: 'F',
        major: ['F', 'G', 'A', 'B♭', 'C', 'D', 'E'],
        minor: ['F', 'G', 'A♭', 'B♭', 'C', 'D♭', 'E♭'],
        dorian: ['F', 'G', 'G#', 'A#', 'C', 'D', 'D#'],
        frigio: ['F', 'F#', 'G#', 'A#', 'C', 'C#', 'D#'],
        lidio: ['F', 'G', 'A', 'B', 'C', 'D', 'E'],
        mixolidio: ['F', 'G', 'A', 'A#', 'C', 'D', 'D#'],
        locrio: ['F', 'F#', 'G#', 'A', 'A#', 'C#', 'D#'],
        relativaMenor: "Dm"
    },
    {
        name: 'F#',
        major: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'F'],
        minor: ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E'],
        dorian: ['F#', 'G#', 'A', 'B', 'C#', 'D#', 'E'],
        frigio: ['F#', 'G', 'A', 'B', 'C#', 'D', 'E'],
        lidio: ['F#', 'G#', 'A#', 'C', 'C#', 'D#', 'F'],
        mixolidio: ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E'],
        locrio: ['F#', 'G', 'A', 'B', 'C', 'D', 'E'],
        relativaMenor: "D#m"
    },
    {
        name: 'G',
        major: ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
        minor: ['G', 'A', 'B♭', 'C', 'D', 'E♭', 'F'],
        dorian: ['G', 'A', 'A#', 'C', 'D', 'E', 'F'],
        frigio: ['G', 'G#', 'A#', 'C', 'D', 'D#', 'F'],
        lidio: ['G', 'A', 'B', 'C#', 'D', 'E', 'F#'],
        mixolidio: ['G', 'A', 'B', 'C', 'D', 'E', 'F'],
        locrio: ['G', 'G#', 'A#', 'C', 'C#', 'D#', 'F'],
        relativaMenor: "Em"
    },
    {
        name: 'G#',
        major: ['G#', 'A#', 'C', 'C#', 'D#', 'F', 'G'],
        minor: ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#'],
        dorian: ['G#', 'A#', 'B', 'C#', 'D#', 'F', 'F#'],
        frigio: ['G#', 'A', 'B', 'C#', 'D#', 'E', 'F#'],
        lidio: ['G#', 'A#', 'C', 'D', 'D#', 'F', 'G'],
        mixolidio: ['G#', 'A#', 'C', 'C#', 'D#', 'F', 'F#'],
        locrio: ['G#', 'A', 'B', 'C', 'C#', 'D#', 'F#'],
        relativaMenor: "Fm"
    },
    {
        name: 'A',
        major: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
        minor: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        dorian: ['A', 'B', 'C', 'D', 'E', 'F#', 'G'],
        frigio: ['A', 'A#', 'C', 'D', 'E', 'F', 'G'],
        lidio: ['A', 'B', 'C#', 'D#', 'E', 'F#', 'G#'],
        mixolidio: ['A', 'B', 'C#', 'D', 'E', 'F#', 'G'],
        locrio: ['A', 'A#', 'C', 'D', 'D#', 'F', 'G'],
        relativaMenor: "F#m"
    },
    {
        name: 'A#',
        major: ['A#', 'C', 'D', 'D#', 'F', 'G', 'A'],
        minor: ['A#', 'C', 'C#', 'D#', 'F', 'F#', 'G#'],
        dorian: ['A#', 'C', 'C#', 'D#', 'F', 'G', 'G#'],
        frigio: ['A#', 'B', 'C#', 'D#', 'F', 'F#', 'G#'],
        lidio: ['A#', 'C', 'D', 'E', 'F', 'G', 'A'],
        mixolidio: ['A#', 'C', 'D', 'D#', 'F', 'G', 'G#'],
        locrio: ['A#', 'B', 'C#', 'D', 'D#', 'F#', 'G#'],
        relativaMenor: "Gm"
    },
    {
        name: 'B',
        major: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
        minor: ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'],
        dorian: ['B', 'C#', 'D', 'E', 'F#', 'G#', 'A'],
        frigio: ['B', 'C', 'D', 'E', 'F#', 'G', 'A'],
        lidio: ['B', 'C#', 'D#', 'F', 'F#', 'G#', 'A#'],
        mixolidio: ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A'],
        locrio: ['B', 'C', 'D', 'E', 'F', 'G', 'A'],
        relativaMenor: "G#m"
    },
];

export const Harmonization = {
    major: ["","m","m","","","m","dim"],
    minor: ["m","dim","","m","m","",""],
    dorian: ["m","m","","","m","dim",""],
    frigio: ["m","dim","","m","m","","dim"],
    lidio: ["maj7","m7","m7","dim","maj7","m7","7♭5"],
    mixolidio: ["7♭5","m","m","","7♭5","m",""],
    locrio: ["7♭5","m7","m7","7♭5","maj7","7","m7b5"],
}
