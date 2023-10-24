import {json} from "@remix-run/node";

export const loader = async () => {
  console.log("Executing route2's loader");
  const data = "Some data for route2";
  return json({ data });
};

export default function Route() {
  console.log("Executing route2's default export")
  return <div>Route 2's content</div>
}