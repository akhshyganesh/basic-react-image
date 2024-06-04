import data from '../assets/data/data.json';
import Img from '../components/Img';

const Home = () => {
  return (
    <div className='body'>
      {data.map((item, index) => (
        <div key={index}>
          <Img src={item.image} alt={`Image ${index + 1}`} />
          <p>{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
