import React, { useState } from 'react';

function App() {
  const [data, setData] = useState("");
  const [image, setImage] = useState(false);

  const handleSubmit = () => {
    setImage(true); 
    setTimeout(() => {
      setData("https://img.freepik.com/free-photo/welcome-phrase-available-launch-open_53876-124476.jpg?semt=ais_hybrid");
      setImage(false);
    }, 2000);
    
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <button className='bg-black text-white px-3 py-2 rounded ' onClick={handleSubmit}>
        Click Here
      </button>
      {image ? (
        <div className="flex items-center justify-center mt-4">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        data && <img src={data} alt="Loaded" className="mt-4" />
      )}
    </div>
  );
}

export default App;
