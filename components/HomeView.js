import Image from "next/image";

function HomeView({searchShow, setSearchShow}) {
  return (
      <div className={searchShow ? 
      'h-10 w-screen m-0 overflow-hidden transition duraration-700'
      :
      'h-full transition-all duration-700 mt-10 bg-bottom bg-150 sm:bg-none bg-[url("../components/images/main_bg1.jpeg")]'
      }>
        <iframe className="-mt-20 mx-auto md:visible lg:visible invisible" width="2000" height="1142"src="https://www.youtube.com/embed/YGAsG6_JgAI?controls=0&start=1829&autoplay=1&mute=1" title="YouTube video player" frameBorder allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"></iframe>
       </div>   
  )
}
export default HomeView