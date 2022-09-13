
import { HeartIcon,MinusCircleIcon,
    RewindIcon,
    FastForwardIcon,

} from '@heroicons/react/outline'

import { PlayIcon } from '@heroicons/react/solid'
function Footer() {
  return (
    <div className="w-full bg-gray-600 absolute bottom-0 z-50 h-20 items-center flex justify-between p-2">
        <div className="flex">
            <img src="https://i.ytimg.com/vi/Vl-VFHtkE6w/maxresdefault.jpg"
            className='w-20 h-18'
            alt="" />

            <div className="flex-col ml-3">
                <h2 className='text-slate-300 font-bold'>Toofan</h2>
                <h2 className='text-slate-300 text-sm'>KGF Chapter 2</h2>
            </div>
            <HeartIcon className='w-6 ml-2 text-slate-400 cursor-pointer hover:text-slate-100'/>
            <MinusCircleIcon className='w-6 ml-2 text-slate-400 cursor-pointer hover:text-slate-100'/>
        </div>
        <div className="flex">
            <div className="flex justify-around w-48">
                        <RewindIcon className='w-10 text-white cursor-pointer'/>
                        <PlayIcon className='w-10 text-white cursor-pointer'/>
                        <FastForwardIcon className='w-10 text-white cursor-pointer'/>
            </div>
        </div>
        <div className="flex"> volume control</div>
        </div>
  )
}

export default Footer