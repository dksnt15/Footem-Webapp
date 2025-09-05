import HeroImg from '../assets/Heroimg.jpg';
const Home= ()=>{
    return (
        <div>
          <div className='relative h-screen w-full'>
            <img
            src={HeroImg}
            alt="HEROIMAGE"
            className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black/20'></div>
          </div>
        </div>
    )
}

export default Home