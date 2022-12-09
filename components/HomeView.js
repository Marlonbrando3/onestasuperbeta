import Image from "next/image";

function HomeView({searchShow, setSearchShow}) {
  return (
      <div className={searchShow ?
      'h-10 w-screen m-0 overflow-hidden transition duraration-700'
      :
      'h-full transition-all mt-24 duration-700 bg-veretical sm:bg-horizontal sm:-mt-20 md:bg-none bg-[url("../components/images/main_bg1.jpg")]'
      }>
        <div className="absolute bg-gray-500/[0.1] mt-10 md:w-full md:h-full"></div>
        <iframe className="-mt-20 mx-auto md:visible lg:visible invisible" width="2000" height="1142"src="https://www.youtube.com/embed/YGAsG6_JgAI?controls=0&start=1900&autoplay=1&mute=1" title="YouTube video player" frameBorder allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox">
        </iframe>
       </div>   
  )
}
export default HomeView