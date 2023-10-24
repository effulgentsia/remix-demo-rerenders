import {json} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";

export const loader = async () => {
  console.log("Executing route2's loader");
  const data = "Some data for route2";
  return json({ data });
};

export default function Route() {
  console.log("Executing route2's default export")
  const { data } = useLoaderData();
  return <div>Route 2's content: {data}</div>
}