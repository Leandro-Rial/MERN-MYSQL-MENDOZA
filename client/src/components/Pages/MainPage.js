import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './Home/About';
import Wines from './Home/Wines';
import Customers from './Home/Customers';
import NewCustomers from './Products/NewCustomer';
import Contact from './Home/Contact';

const MainPage = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/wines" component={Wines} />
                <Route path="/customers" component={Customers} />
                <Route path="/newcustomers" component={NewCustomers} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    )
}

export default MainPage
