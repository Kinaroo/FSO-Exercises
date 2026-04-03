import { useState } from "react";
import axios from 'axios'

const App = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value)
  }


  return (
    <div>
        <form onSubmit={addName}>
                <div>
                    find countries <input
                        value={value}
                        onChange={handleChange}
                    />
                </div>
            </form>
    </div>
  )
};

export default App;
