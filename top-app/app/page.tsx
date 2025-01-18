import React, { JSX } from "react";
import { Card } from "./components/Card/Card";

export default function Home(): JSX.Element {
  return (
    <>
      <Card likes={4}></Card>
    </>
  );
}
