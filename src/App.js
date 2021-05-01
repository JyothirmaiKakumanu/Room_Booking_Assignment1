import './App.css';
import React from 'react';
import { useState } from 'react';
import { People, Hotel, Person, ChildCare, RemoveCircle, AddCircle } from '@material-ui/icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [kids, setKids] = useState(0);
  const [adults, setAdults] = useState(0);
  const [rooms, setRooms] = useState(0);

  const decRoomCount = () => {
    if (rooms >= adults) {
      setAdults(rooms - 1);
    }
    if (rooms > 0) {
      setRooms(rooms - 1);
    }

  }

  const incRoomCount = () => {
    if (rooms >= adults) {
      setAdults(rooms + 1);
    }
    if (rooms < 5)
      setRooms(rooms + 1);
  }


  const decAdultCount = () => {
    if (adults > 0) {
      setAdults(adults - 1);
    }

  }

  const incAdultCount = () => {
    if ((adults + kids) % 4 === 0) {
      incRoomCount();
    }
    if (adults + kids < 20)
      setAdults(adults + 1);
  }


  const decKidCount = () => {
    if (kids > 0) {
      setKids(kids - 1);
    }

  }

  const incKidCount = () => {
    if ((adults + kids) % 4 === 0) {
      incRoomCount();
    }
    if (adults > 1 && adults + kids < 20) {
      setKids(kids + 1);
    }

  }



  return (
    <div className="App">
      <div className="heading">
        <span><People></People></span>
        <span>Choose Number of <b>People</b></span>
      </div>

      <div className="roomDetails">
        <div className="list-row">
          <span><Hotel></Hotel></span>
          <span id="rooms" className="item">Rooms</span>
          <span className="roomCount">
            <button className="minus" onClick={decRoomCount} disabled={rooms === 0 ? true : false}><RemoveCircle></RemoveCircle></button>
            <p className="number">
              {rooms}
            </p>
            <button  className="plus" onClick={incRoomCount} disabled={rooms === 5 ? true : false}><AddCircle></AddCircle></button>
          </span>
        </div>
        <div className="list-row">
          <span><Person></Person></span>
          <span id="adults" className="item">Adults</span>
          <span className="roomCount">
            <button className="minus" onClick={decAdultCount} disabled={adults === 0 ? true : false}><RemoveCircle></RemoveCircle></button>
            <p className="number">
              {adults}
            </p>
            <button className="plus" onClick={incAdultCount} disabled={(adults + kids) === (rooms * 4) ? true : false}><AddCircle></AddCircle></button>
          </span>
        </div>
        <div className="list-row">
          <span><ChildCare></ChildCare></span>
          <span id="children" className="item">Children</span>
          <span className="roomCount">
            <button className="minus" onClick={decKidCount} disabled={kids === 0 ? true : false}><RemoveCircle></RemoveCircle></button>
            <p className="number">
              {kids}
            </p>
            <button className="plus" onClick={incKidCount} disabled={((adults === 0) || ((adults + kids) === (rooms * 4))) ? true : false}><AddCircle></AddCircle></button>
          </span>
        </div>
      </div>

    </div>
  );
}

export default App;
