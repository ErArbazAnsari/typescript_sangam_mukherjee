// interface
// - object shapes that you expect  to extend
// - supports declaration merging

// types
// - more general => objects, unions, intersections, functions
// - cannot be open again -> we can merge them

interface Box {
    width: number;
}
interface Box {
    // here we opened again the created Box interface and we can add mored things here too.
    height: number;
}

const boxDemo: Box = {
    width: 10,
    height: 20,
};

function calculateArea(measurements: Box): number {
    return measurements.height * measurements.width;
}
console.log(calculateArea(boxDemo));

// ===========In Types==========
// type Bag = {
//     color: string;
// };
// type Bag = {
//     size: string;
// };
