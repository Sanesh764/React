import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()?><=:|}{}";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length); // fixed: floor + no +1
      pass += str.charAt(index); // fixed: += not =
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Auto-regenerate whenever settings change
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 text-orange-500 bg-gray-700">
      <h1 className="text-center text-white text-xl font-bold mb-4">Password Generator</h1>

      {/* Password Display + Copy */}
      <div className="flex rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          ref={passwordRef}
          readOnly
          placeholder="Password"
          className="outline-none w-full py-2 px-3 bg-white text-gray-800"
        />
        <button
          onClick={copyToClipboard}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 shrink-0"
        >
          Copy
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-3 text-sm">

        {/* Length Slider */}
        <div className="flex items-center gap-3">
          <label className="text-white w-24">Length: {length}</label>
          <input
            type="range"
            min={6}
            max={32}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full cursor-pointer"
          />
        </div>

        {/* Numbers Toggle */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="numbers"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(prev => !prev)}
            className="cursor-pointer"
          />
          <label htmlFor="numbers" className="text-white cursor-pointer">Include Numbers</label>
        </div>

        {/* Special Characters Toggle */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="chars"
            checked={charAllowed}
            onChange={() => setCharAllowed(prev => !prev)}
            className="cursor-pointer"
          />
          <label htmlFor="chars" className="text-white cursor-pointer">Include Special Characters</label>
        </div>

        {/* Regenerate Button */}
        <button
          onClick={passwordGenerator}
          className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold"
        >
          Regenerate
        </button>
      </div>
    </div>
  )
}

export default App;