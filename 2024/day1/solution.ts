import fs from "fs";

interface SplitData {
  leftElement: number;
  rightElement: number;
}

let totalDistance: number = 0;

const data = fs.readFileSync("./test-data.txt", "utf8");

const splitData: SplitData[] = data.split("\n").map((element) => {
  const [leftElement, rightElement] = element.split("   ");
  return {
    leftElement: parseInt(leftElement),
    rightElement: parseInt(rightElement),
  };
});

const left = splitData.map((item) => item.leftElement).sort((a, b) => a - b);
const right = splitData.map((item) => item.rightElement).sort((a, b) => a - b);

for (let i = 0; i < left.length; i++) {
  totalDistance += Math.abs(left[i] - right[i]);
}

console.log({ totalDistance });
