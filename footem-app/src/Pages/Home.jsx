import HeroImg from '../assets/Heroimg.jpg';
const Home= ()=>{
    return (
        <div className='h-screen w-screen'>
          <div className='relative h-full w-full'>
            <img
            src={HeroImg}
            alt="HEROIMAGE"
            className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black/20 w-full h-full'></div>
          </div>
        </div>
    )
}

export default Home