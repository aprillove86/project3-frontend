import { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import Landing from '../pages/Landing';
import Sneaker from '../pages/Sneaker';

function Main(props) {
    const [sneakers, setSneakers] = useState([]);
    //use the heroku url that's linked to the backend
    const URL = 'https://project3-backend-done.herokuapp.com/sneakers/';
    //get all sneakers
    const getSneakers = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log('getSneakers - data', data);
        setSneakers(data);
    };

    const createSneaker = async (sneaker) => {
        await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(sneaker)
        });
        getSneakers();
    };

    const updateSneakers = async (sneaker, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: { "Content-Type": 'Application/json'},
            body: JSON.stringify(sneaker)
        });
        getSneakers();
    };

    const deleteSneaker = async (id) => {
        await fetch(URL + id, {
            method: 'Delete'
        })
        getSneakers();
    };
        useEffect(() => getSneakers(), []);
        console.log(sneakers)
        return (
            <main>
                <Switch>
                    <Route exact path='/about'>
                        <About />
                    </Route>
                    <Route exact path='/sneakers'>
                        <Landing 
                         sneakers={sneakers}
                         createSneaker={createSneaker}
                         deleteSneaker={deleteSneaker}
                        />
                    </Route> 
                    <Route path='/sneakers/:id' render={(props) => (
                         <Sneaker 
                         {...props}                       
                         sneakers={sneakers}
                         />
                    )} />
                             
                </Switch>
            </main>
        )
}

export default Main