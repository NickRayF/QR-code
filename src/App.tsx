// import { useState } from 'react'
import { Maintext } from "./components/Maintext";
function App() {
  return (
    <>
      <div className="bg-[#D5E1EF] w-full h-screen flex">
        <div className="max-w-[320px] w-full m-auto content-center bg-white rounded-2xl box-border p-4 space-y-6">
          <img className="w-full rounded-2xl" src="/image-qr-code.png" alt="" />
          <Maintext />
        </div>
      </div>
    </>
  );
}

export default App;
