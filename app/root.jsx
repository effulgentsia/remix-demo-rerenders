import { json } from "@remix-run/node";
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  useLoaderData,
} from "@remix-run/react";

export const loader = async () => {
  console.log("Executing root.jsx's loader");
  const data = "Some data for App";
  return json({ data });
};

export default function App() {
  console.log("Executing root.jsx's default export")
  const { data } = useLoaderData();
  return (
    <html>
    <head>
      <link
        rel="icon"
        href="data:image/x-icon;base64,AA"
      />
      <Meta />
      <Links />
    </head>
    <body>
    <h1>Hello world!</h1>
    <h2>{data}</h2>
    <ul>
      <li><Link to={'route1'}>Route 1</Link></li>
      <li><Link to={'route2'}>Route 2</Link></li>
    </ul>
    <Outlet />

    <Scripts />
    </body>
    </html>
  );
}