"use client";
const Main =() => {
  return(
    <>
    <div class="bg-[url('https://github.blog/wp-content/uploads/2024/02/AI-DarkMode-3-1.png?fit=1200%2C630')] bg-cover bg-fixed bg-no-repeat flex flex-col items-center justify-center min-h-screen m-0 h-full w-full">
    <div className="border rounded w-150 h-100 ml-10 mt-0 bg-white/20 " >
    <h1 className="display: flex justify-center p-2 mt-20   text-xl font-extrabold underline underline-offset-4 decoration-4 text-white">Github Profile Viewer</h1>
    <br />
<div className="display: flex justify-center">
    <form>
      <input className="w-120 h-15 border rounded px-2 bg-white text-black" type="text" placeholder="                                  Enter a Username" />
      <br />
      <button className=" w-30 border rounded     px-2 h-15 mt-5 ml-40 bg-blue-500 hover:bg-blue-700 transform text-white  ">View</button>
    </form>
</div>

</div>

</div>
    </>
  )
}
export default Main