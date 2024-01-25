import MsgInput from './components/MsgInput'
import ConvBox from './components/ConvBox'
import ConvSearch from './components/ConvSearch';

export interface User {
  name:string;
  image:string;
}

export default function Home() {

  let users = [{name:"taha", image:""}, {name:"lmao", image:""}, {name:"lmao", image:""}, {name:"lmao", image:""}, {name:"lmao", image:""}, {name:"lmao", image:""}, {name:"lmao", image:""}]

  return (
    <main className="no-scrollbar flex min-h-screen items-center justify-between p-10 select-none bg-darkdarkin px-10 py-2 gap-6 overflow-scroll">
        <div className='no-scrollbar bg-darkin w-[35%] h-[85vh] rounded-2xl flex flex-col justify-start items-center gap-3 p-5 min-h-[500px]'>
          <ConvSearch />
          <div className='w-full h-[80vh] flex flex-col justify-start gap-3 items-center overflow-y-scroll'>
            {users.map((user) => (<ConvBox user={user} key={user.image}/>))}
          </div>
        </div>
        <div className='w-[65%] h-[85vh] flex flex-col justify-center items-center bg-darkin rounded-2xl gap-5 min-h-[500px]'>
          <div className='bg-whiten rounded-xl w-[95%] h-[80%]'></div>
          <MsgInput />
        </div>
    </main>
  )
}
