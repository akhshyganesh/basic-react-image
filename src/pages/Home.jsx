import data from '../data/data.json';
import Img from '../components/Img';

const Home = () => {
  return (
    <div className='body'>
      {data.map((item, index) => (
        <div key={index}>
          <Img key={`img-${index}`} src={item.image} alt={`Image ${index + 1}`} />
          <p key={`p-${index}`} >{item.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
