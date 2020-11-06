import React, {Component} from 'react';
import Card from './card';

import Navbar from './navbar';

import Jumbotron from './jumbotron';

class App extends Component{
    //state = {};

    render(){
        return (
            <div>
                <Navbar/>
                <Jumbotron/>
                <div className="container">
                    <div className="row">
                        <div className="col-3 card-spacing">
                            <Card title="Product #1" pic="https://i.vimeocdn.com/video/646683867.webp?mw=1000&mh=563&q=70"/>
                        </div>
                        <div className="col-3 card-spacing">
                            <Card title="Product #2" pic="https://pentestmag.com/wp-content/uploads/2016/02/ettercap-english-1.jpg"/>
                        </div>
                        <div className="col-3 card-spacing">
                            <Card title="Product #3" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNmFFlKa1fmyOc6S5hn0KDP5omIAY3xUigGg&usqp=CAU"/>
                        </div>
                        <div className="col-3 card-spacing">
                            <Card title="Product #4" pic="https://miro.medium.com/max/450/1*e0PvOyJqlUEGd8h3WHWEnA.jpeg"/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;