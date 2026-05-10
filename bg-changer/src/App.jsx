import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-screen h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      {/* Bottom Button Panel */}
      <div className="fixed bottom-10 inset-x-0 flex justify-center">
        <div className="flex gap-3 bg-white px-4 py-2 rounded-full shadow-lg">
          
          <button
            onClick={() => setColor("red")}
            className="px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
  onClick={() => setColor("yellow")}
  className="px-4 py-1 rounded-full text-black"
  style={{ backgroundColor: "yellow" }}
>
  Yellow
</button>

<button
  onClick={() => setColor("purple")}
  className="px-4 py-1 rounded-full text-white"
  style={{ backgroundColor: "purple" }}
>
  Purple
</button>

<button
  onClick={() => setColor("pink")}
  className="px-4 py-1 rounded-full text-white"
  style={{ backgroundColor: "pink" }}
>
  Pink
</button>

<button
  onClick={() => setColor("orange")}
  className="px-4 py-1 rounded-full text-white"
  style={{ backgroundColor: "orange" }}
>
  Orange
</button>

<button
  onClick={() => setColor("black")}
  className="px-4 py-1 rounded-full text-white"
  style={{ backgroundColor: "black" }}
>
  Black
</button>

<button
  onClick={() => setColor("gray")}
  className="px-4 py-1 rounded-full text-white"
  style={{ backgroundColor: "gray" }}
>
  Gray
</button>

        </div>
      </div>
      <h1 className="text-3xl font-bold underline " style={{textAlign:"center"}}>color change style </h1>
    </div>
  );
}

export default App;