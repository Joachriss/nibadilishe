import pics from '../assets/images/hero.jpg'

export const EventCardManager = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between p-2 my-2 bg-white rounded-lg'>
        <div className="flex flex-row space-x-5 items-center">
            <img src={pics} className="rounded-lg w-20" alt="event image" />
            <h1 className='text-xl font-bold'>Event Name</h1>
        </div>
        <div className="flex ms-auto flex-row text-white align-end items-center space-x-2">
            <div className='w-fit h-fit p-2 font-bold border-2 rounded-lg bg-green-500 hover:bg-green-600'>view</div>
            <div className='w-fit h-fit p-2 font-bold border-2 rounded-lg bg-yellow-400 hover:bg-yellow-600'>edit</div>
            <div className='w-fit h-fit p-2 font-bold border-2 rounded-lg bg-red-400 hover:bg-red-600'>delete</div>
        </div>
    </div>
  )
}
