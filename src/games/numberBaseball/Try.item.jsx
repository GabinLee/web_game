import { memo } from "react"

const Try = memo(({tryInfo}) => {
  return (
    <li>
      <p>{tryInfo.try}</p>
      <p>{tryInfo.result}</p>
    </li>
  )
});

Try.displayName = "Try";

export default Try;

// export default function Try({tryInfo}) {
//   return (
//     <li>
//       <p>{tryInfo.try}</p>
//       <p>{tryInfo.result}</p>
//     </li>
//   )
// }