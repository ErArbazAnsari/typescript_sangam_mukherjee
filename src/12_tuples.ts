// types => fixled lenght and fixed types
// (string|number)[]
// optional tuple

const information: [string, number] = ["arbaz", 121];

// optional tuple
type responseType = [number, string?];

const data2: responseType = [200, "ok"];
const data3: responseType = [200];

// readonly tuple
type personalInfo = readonly [string, number];
const userInformation: personalInfo = ["arbaz", 121];
