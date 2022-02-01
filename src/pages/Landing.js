import { Link } from 'react-router-dom';
import { useState} from 'react';

function Landing(props) {
    const [newSneaker, setNewSneaker] = useState({
        name: '',
        brand: '',
        size: '',
        img: '',
    })
    const handleChange = (event) => {
        setNewSneaker({
            ...newSneaker,
            [event.target.name]: event.target.value,
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createSneaker(newSneaker);
        setNewSneaker({
            name: '',
            brand: '',
            size: '',
            img: '',
        });
    
    };
    return (
        <section>
            {

            props.sneakers.map((sneaker) => (
              <div key={sneaker._id} className='sneaker'>
                 <Link to={`/sneakers/${sneaker._id}`}>
                  <h1>{sneaker.name}</h1>
                  <h2>{sneaker.brand}</h2>
                  <h2>{sneaker.size}</h2>
                  <img src={sneaker.img}/>
                 </Link>
              </div>

            ))}

            <form style={{marginTop: '7rem'}} onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={newSneaker.name}
                    name='name'
                    placeholder='name'
                    onChange={handleChange}
                />
                <br />
                <input
                    type='text'
                    value={newSneaker.img}
                    name='image'
                    placeholder='image URL'
                    onChange={handleChange}
                />
                <br />
                <input 
                    type='text'
                    value={newSneaker.brand}
                    name='brand'
                    placeholder='brand'
                    onChange={handleChange}
                />
                <br />
                <input  
                    type='text'
                    value={newSneaker.size}
                    name='size'
                    placeholder='size'
                    onChange={handleChange}
                />
                <br />
                <input type='submit' value='Create Sneaker' />
            </form>
        </section>
    ) 
};
export default Landing;