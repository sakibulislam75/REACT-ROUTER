
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const info=useLoaderData();
    return (
      <div className=' border border-amber-400 text-xl p-2 rounded-lg'>
            <h1>Name: {info.name}</h1>
            <h2>Website: {info.website}</h2>
        </div>
    );
};

export default Details;