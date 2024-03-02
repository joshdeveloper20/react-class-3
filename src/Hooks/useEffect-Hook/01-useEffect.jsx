import { useEffect, useState } from "react";

function UseEffectBasic() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const sayHello = () => {
      console.log("Say hello");
    };

    sayHello(); // This will be called when the component is first  rendered
  }, []);

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button type="button" className="btn" onClick={() => setCount(count + 1)}>
        click
      </button>
    </div>
  );
}

export default UseEffectBasic;
