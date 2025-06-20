type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends Pick<AllType, 'name' | 'color'>, U extends Pick<AllType, 'position' | 'weight'>>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}


const topObj = { name: 'A', color: 'red' };
const bottomObj = { position: 1, weight: 10 };

const result = compare(topObj, bottomObj);
console.log(result);

export {};