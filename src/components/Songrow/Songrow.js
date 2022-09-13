
  import { PlayIcon } from '@heroicons/react/solid'

function Songrow() {
  return (
    <div className="flex justify-between items-center p-4 h-17 cursor-pointer hover:bg-gray-900">

<div className="flex">

      <PlayIcon color='#fff'width={25}/>

      <div className="data flex h-full">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/869d6274284099.5c2a29444e565.png" alt=""
          className='object-cover w-10 h-full ml-2'
          />
<div className="flex-col flex-strin ml-2">

        <div className="names flex-col">
          <span className='text-md text-slate-200'>

          Ariyathe Ishttami Annumuthal
          </span>
        </div>
        <div className="artist">
          <span className='text-sm text-slate-400'>P Jayachandran, K.S Chitra</span>
        </div>
      </div>
          </div>
</div>

      <span className='text-sm text-slate-300'>Latest hits of P Jayachandran</span>

      <span className='text-sm text-slate-300'>12 Dec 2022</span>

      <span className='mr-1 text-sm text-slate-300'>4:44</span>
        

    </div>
  )
}

export default Songrow