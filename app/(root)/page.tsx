import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log("hello");
  return (
    <>
    <h1 className="text-3xl">Welcome</h1>
    <Hello />
    </>
  );
}
