import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

export default function App() {
  console.log("Executing root.jsx's default export")
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