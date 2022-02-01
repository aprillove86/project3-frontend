import { useState } from 'react'

function Sneaker(props) {
    const id = props.match.params.id;
    const sneaker = props.sneakers.find(s => s._id === id);
   
    const [ editSneaker, setEditSneaker ] = useState(sneaker);
    
    const handleChange = (event) => {
        setEditSneaker({
            ...editSneaker,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.updateSneakers(editSneaker, id);
        props.history.push('/');
    }
   
    const handleClick = () => {
        props.deleteSneakers(id);
        props.history.push('/');
    }
    return  (
        <div className='sneaker'>
            <h1>{sneaker.name}</h1>
            <h2>{sneaker.brand}</h2>
            <h2>{sneaker.size}</h2>
            <img src={sneaker.img}
                 alt={sneaker.name} />
            
            <button id='delete' onClick={handleClick}>
                Reward Claimed
            </button>
            <form onSubmit={handleSubmit}>
                <input type='text' name='Name'
                placeholder='name' value={editSneaker.name}
                onChange={handleChange}
                />
                <br />
                               
                <input type='text' name='Image'
                placeholder='ImageUrl' value={editSneaker.img}
                onChange={handleChange}
                />
                <br />
                <input type={'submit'} value='Update Reward' />
               
            </form>
        </div>
    );
}
export default Sneaker;