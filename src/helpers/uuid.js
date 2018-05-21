// Get a universally unique identifier
let count = 0
export default function uuid() {
  return `simple-react-tabs-${count++}`
}

export function reset() {
  count = 0
}
