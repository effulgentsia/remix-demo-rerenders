import {json} from "@remix-run/node";

export const loader = async () => {
  console.log("Executing route1's loader");
  const data = "Some data for route1";
  return json({ data });
};

export default function Route() {
  console.log("Executing route1's default export")
  return <div>Route 1's content</div>
}
