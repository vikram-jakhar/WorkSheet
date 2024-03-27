import React, { useEffect, useState } from 'react'
import img from '../assets/img/248labs.png'
import Counter from '../assets/img/counter.png'
import FT_plan from '../assets/img/ft_plan.png'
import Design from '../assets/img/desgin.png'
import Lemon from '../assets/img/Lemon.png'
import Game from '../assets/img/game.png'
import Dino from '../assets/img/Dino.png'
import JSimg from '../assets/img/jsimg.png'
import Nexai from '../assets/img/nexai.png'
import Cloop from '../assets/img/Cloop.png'
import Labs from '../assets/img/Labs.png'
import Worksheet from '../assets/img/workSheet.png'


const WorkSheet = () => {
  const [first, setfirst] = useState(0)
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [])
  function tabchange(tabs) {
    setfirst(tabs)
  }
  const workData = [
    {
      jan: [
        { id: 1, title: "DompKong", gitHubLink: "https://github.com/vikram-jakhar/DomPKong.git", liveLink: "https://dom-p-kong.vercel.app/", image: (img), date: "03-01 2024", },
        { id: 2, title: "Reset Counter", gitHubLink: "https://github.com/vikram-jakhar/counter-page-reset.git", liveLink: "https://counterpagerestboutton.netlify.app", image: (Counter), date: "15-09-2023" },
        { id: 3, title: "Aviation Landing", gitHubLink: "https://github.com/vikram-jakhar/Aviation_Landing.git", liveLink: "https://aviation-landing.vercel.app/", image: (FT_plan), date: "10-01-2024" },
        { id: 4, title: "Design", gitHubLink: "https://github.com/vikram-jakhar/Design.git", liveLink: "https://design-seven-mu.vercel.app/", image: (Design), date: "20-01-2024" },
        { id: 5, title: "Lamon Wares", gitHubLink: "https://github.com/vikram-jakhar/Lemon.git", liveLink: "https://lemon-five.vercel.app/", image: (Lemon), date: "27-01-2024" },
      ]
    },
    {
      feb: [
        { id: 1, title: " Exclusive Game", gitHubLink: "https://github.com/vikram-jakhar/DINOLFG.git", liveLink: "https://exclusive-game-five.vercel.app/", image: (Game), date: "05-02-2024", },
        { id: 2, title: "DinoLFG", gitHubLink: "https://github.com/vikram-jakhar/counter-page-reset.git", liveLink: "https://dinolfg-zeta.vercel.app/", image: (Dino), date: "13-02-2024" },
        { id: 3, title: " JS Task", gitHubLink: "https://github.com/vikram-jakhar/JS-Practice.git", liveLink: "", image: (JSimg), date: "7-02-2024" },
        { id: 4, title: "NexAi", gitHubLink: "https://github.com/vikram-jakhar/nexai.git", liveLink: "https://nexai-beige.vercel.app/", image: (Nexai), date: "22-02-2024" },
      ]
    },
    {
      march: [
        { id: 1, title: " Cloop", gitHubLink: "https://github.com/vikram-jakhar/cloop.git", liveLink: "https://cloop-one.vercel.app/", image: (Cloop), date: "07-03-2024", },
        { id: 2, title: "248 Labs", gitHubLink: "https://github.com/vikram-jakhar/248Labs.git", liveLink: "https://248-labs-six.vercel.app/", image: (Labs), date: "21-03-2024" },
        { id: 3, title: "Work-Sheet", gitHubLink: "", liveLink: "https://aviation-landing.vercel.app/", image: (Worksheet), date: "10-01-2024" },
      ]
    },
  ]
  return (
    <>
      <div className=' min-h-screen'>

        <div className="container-xl ">
          <div className='grid grid-cols-10 bg-white p-4 flex-col min-h-screen shadow '>
            <div className="col-span-3 max-w-[450px] bg-white border rounded-lg">
              <h1 className='text-black mt-6 text-center  font-mono font-medium text-[34px] text-nowrap'>
                MY WorkSheet
              </h1>
              <div className='flex flex-col gap-5  justify-center items-center pt-12  '>
                <button onClick={() => tabchange(0)} className={`${first === 0 && "text-white bg-[green]"} max-w-[122px] text-[20px] font-serif font-normal cursor-pointer bg-transparent border-[3px] p-[4px_45px] rounded-[50px] hover:bg-[green] hover:text-[white] inline-block  border-solid border-[green]`}>Jan</button>
                <button onClick={() => tabchange(1)} className={` ${first === 1 && "text-white bg-[green]"}  max-w-[122px] text-[20px] font-serif font-normal cursor-pointer bg-transparent border-[3px] p-[4px_45px] rounded-[50px] hover:bg-[green] hover:text-[white] inline-block  border-solid border-[green]`}>Feb</button>
                <button onClick={() => tabchange(2)} className={` ${first === 2 && "text-white  bg-[green]"} max-w-[122px] text-[20px] font-serif font-normal cursor-pointer bg-transparent border-[3px] p-[4px_45px] rounded-[50px] hover:bg-[green] hover:text-[white] inline-block  border-solid border-[green]`}>Mar</button>
              </div>
            </div>
            <div className=' col-span-7 h-[810px] shadow p-28 rounded-[10%]  overflow-hidden overflow-y-scroll'>
              {
                first === 0 && <div className="p-4 bg-transparent  shadow-xl rounded-2xl">
                  {isLoading ? "" : (<h2 className="text-[20px] font-serif font-normal text-black opacity-90">January Topics :-</h2>)}
                  <div className="flex flex-col gap-5 ">
                    {workData[0].jan.map((data, index) => (
                      <div className="flex gap-3 pt-5 items-center " key={index}>
                        {isLoading ? "" : (<span className=" flex items-center  justify-center text-[20px] border px-1 w-[35px] h-[35px] text-white bg-[green] rounded-full">{data.id}</span>)}
                        {isLoading ? "" : (<img src={data.image} alt={data.title} className=" rounded-xl max-w-[200px] w-full" width={200} height={118} />)}
                        <div className="flex flex-col max-w-[470px] w-full gap-2">
                          {isLoading ? "" : (<h3 className="text-xl font-bold capitalize">{data.title}<span className="ml-5 text-sm font-light opacity-90">Date of submisson:- {data.date}</span></h3>)}
                          {isLoading ? "" : (<a target="_blank" href={data.gitHubLink} className="text-gray-600">GitHub link:- <span className="text-blue-500 ">{data.gitHubLink}</span></a>)}
                          {isLoading ? "" : (<a target="_blank" href={data.liveLink} className="text-gray-600">Live link:- <span className="text-blue-500">{data.liveLink}</span></a>)}
                        </div>
                      </div>
                    ))
                    }
                  </div>
                </div>
              }
              {
                first === 1 && <div className="p-4 bg-transparent shadow-xl rounded-2xl">
                  {isLoading ? "" : (<h2 className="text-[20px] font-serif font-normal text-black opacity-90">Feb Topics :-</h2>)}
                  <div className="flex flex-col gap-5 ">
                    {workData[1].feb.map((data, index) => (
                      <div className="flex gap-3 items-center pt-5 " key={index}>
                        {isLoading ? "" : (<span className=" flex items-center  justify-center text-[20px] border px-1 w-[35px] h-[35px] text-white bg-[green] rounded-full">{data.id}</span>)}
                        {isLoading ? "" : (<img src={data.image} alt={data.title} className=" rounded-xl max-w-[200px] w-full" width={200} height={118} />)}
                        <div className="flex flex-col max-w-[470px] w-full gap-2">
                          {isLoading ? "" : (<h3 className="text-xl font-bold capitalize">{data.title}<span className="ml-5 text-sm font-light opacity-90">Date of submisson:- {data.date}</span></h3>)}
                          {isLoading ? "" : (<a target="_blank" href={data.gitHubLink} className="text-gray-600">GitHub link:- <span className="text-blue-500 ">{data.gitHubLink}</span></a>)}
                          {isLoading ? "" : (<a target="_blank" href={data.liveLink} className="text-gray-600">Live link:- <span className="text-blue-500">{data.liveLink}</span></a>)}
                        </div>
                      </div>
                    ))
                    }
                  </div>
                </div>
              }
              {
                first === 2 && <div className="p-4 bg-transparent shadow-xl rounded-2xl">
                  {isLoading ? "" : (<h2 className="text-[20px] font-serif font-normal text-black opacity-90">March Topics :-</h2>)}
                  <div className="flex flex-col gap-5 ">
                    {workData[2].march.map((data, index) => (
                      <div className="flex gap-3 pt-5 items-center  " key={index}>
                        {isLoading ? "" : (<span className=" flex items-center  justify-center text-[20px] border px-1 w-[35px] h-[35px] text-white bg-[green] rounded-full">{data.id}</span>)}
                        {isLoading ? "" : (<img src={data.image} alt={data.title} className=" rounded-xl max-w-[200px] w-full" width={200} height={118} />)}
                        <div className="flex flex-col max-w-[470px] w-full gap-2">
                          {isLoading ? "" : (<h3 className="text-xl font-bold capitalize">{data.title}<span className="ml-5 text-sm font-light opacity-90">Date of submisson:- {data.date}</span></h3>)}
                          {isLoading ? "" : (<a target="_blank" href={data.gitHubLink} className="text-gray-600">GitHub link:- <span className="text-blue-500 ">{data.gitHubLink}</span></a>)}
                          {isLoading ? "" : (<a target="_blank" href={data.liveLink} className="text-gray-600">Live link:- <span className="text-blue-500">{data.liveLink}</span></a>)}
                        </div>
                      </div>
                    ))
                    }
                  </div>
                </div>
              }

            </div>
          </div>
        </div>
      </div >

    </>
  )
}

export default WorkSheet
