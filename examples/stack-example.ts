import { TbStack } from "../index.js";

const s = new TbStack<number>();
s.push(1);
s.push(2, 3);
console.log("top:", s.top());
console.log("size:", s.size());
console.log("empty:", s.isEmpty());
s.pop();
console.log("after pop top:", s.top());
s.clear();
console.log("after clear size:", s.size(), "empty:", s.isEmpty());