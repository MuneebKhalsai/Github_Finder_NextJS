import React from 'react';

const User = async ({ params }) => {
    const { id } = params;

    const response = await fetch(`https://api.github.com/users/${id}`);
    const data = await response.json();

    console.log(data);

    return (
    <div className="bg-[url('https://github.blog/wp-content/uploads/2024/02/AI-DarkMode-3-1.png?fit=1200%2C630')] bg-cover bg-fixed bg-no-repeat flex flex-col items-center justify-center min-h-screen m-0 h-full w-full">
    <>

       <div className=' bg-white h-130 w-300 ml-10 mt-20 border rounded-2xl '>
       
       <div className='flex items-start gap-6'>
        <img className='ml-10 h-50 rounded-full mt-5' src={data.avatar_url} alt="" />
            <h1 className='mt-30 ml-30 text-xl font-extrabold underline underline-offset-4 decoration-4 text-black'>{data.name}</h1>
             
            </div>
           <p className='ml-70 '>Bio:{data.bio}</p>
            
<div className="flex ml-80 mt-10 gap-20 space-x-10">
  <div className='h-25 w-40 border rounded'>
    <h1 className='text-2xl mt-2 ml-6'>Followers</h1>
    <h2 className='mt-2 ml-17 text-3xl'>{data.followers}</h2>
  </div>

  <div className='h-25 w-40 border rounded'>
    <h1 className='text-2xl mt-2 ml-6'>Following</h1>
    <h2 className='mt-2 ml-17 text-3xl'>{data.following}</h2>
  </div>

  <div className='h-25 w-60 border rounded'>
    <h1 className='text-2xl mt-2 ml-6'>Public Repository</h1>
    <h2 className='mt-2 ml-21 text-3xl'>{data.public_repos}</h2>
  </div>
</div>
<div>
    
      <a href={response.html_url} target="_blank">
                            <button className=" hover:bg-blue-500 border decoration-2 rounded-lg w-200 ml-70 mt-10 bg-[#101a43] p-2 text-lg outline-[#8f969c] text-white cursor-pointer" id="next">
                                View Github</button>
                        </a>
</div>
</div>
           
        </>
</div>
    );
};

export default User;
