import React, { Component } from 'react';
//import logo from './logo.svg';

import firebase from "firebase";



const config = {
      apiKey: "AIzaSyCbRZwXF2eXe2DpLNeWBDW8N4I8WDOVge8",
      authDomain: "snap-vote-77029.firebaseapp.com",
      databaseURL: "https://snap-vote-77029.firebaseio.com",
      projectId: "snap-vote-77029",
      storageBucket: "snap-vote-77029.appspot.com",
      messagingSenderId: "332977921881"
};



var data = firebase.database();
var num = 0;

class Users extends Component {
 constructor() {
   super();
   this.state = {
     username: localStorage.getItem("userName"),
     curCode: '',
     currentItem: '',
     picture: localStorage.getItem("userSnap"),
     items: []
   }
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleSubmit(e) {
   e.preventDefault();
   const itemsRef = firebase.database().ref('items');
   const item = {
     title: this.state.currentItem,
     user: this.state.username,
     pic: this.state.picture,
     code: this.state.curCode
   }
   itemsRef.push(item);
   this.setState({
     currentItem: '',
     curCode: '',
     username: ''
   });
   itemsRef.on('value', (snapshot) => {
     console.log(snapshot.val());
   });
 }
 handleChange(e) {
   this.setState({
     [e.target.name]: e.target.value
   });
 }

 componentDidMount() {
   const itemsRef = firebase.database().ref('items');
   itemsRef.on('value', (snapshot) => {
     let items = snapshot.val();
     let newState = [];
     var num = 0;
     var length = 0;

     for (let item in items)
     {
      length=length+1;
     }


     if (length > 5)
     {
      var temp = length-5;
    }
    else
    {
      var temp = -1;
    }

    console.log(temp);




     for (let item in items) {
      if (num >= temp)
      {
       newState.push({
         id: item,
         title: items[item].title,
         user: items[item].user,
         pic: items[item].pic,
         code: items[item].code

       });
       
     }
     num = num+1;
     }
     this.setState({
       items: newState
     });
   });
 }
 render() {
   return (

     <div className='app'>
       <header>
           <div className='wrapper'>
             <h1>Snap Poll</h1>
           </div>
       </header>
       <div className='container'>
         <section className="add-item">
         <p>Will the Patriots win the superbowl? [Twitter] </p>
           <form onSubmit={this.handleSubmit}>
             <input type="text" name="currentItem" placeholder="Why? " onChange={this.handleChange} value={this.state.currentItem} />
             <input type="text" name="curCode" placeholder="Snap ID (optional)" onChange={this.handleChange} value={this.state.curCode} />
             
             <button>Post</button>
           </form>
         </section>
         </div>
         <div
      >





         <section className='display-item'>
                    <div

        style={{
          textAlign: "center",
          verticalAlign: "middle",
          display: "inline"
        }}
      >
             <ul >
             

               {this.state.items.map((item) => {
                 return (
                   <li key={item.id} style={{ listStyleType: "none" }}>
                     <h3>{item.title}</h3>
                     <p>
                     <img src ={item.pic} 
    onMouseOver={e => (e.currentTarget.src = "https://feelinsonice-hrd.appspot.com/web/deeplink/snapcode?username=" + item.code + "&type=SVG",  e.currentTarget.height="150", e.currentTarget.width="150")}
    onMouseLeave={e => (e.currentTarget.src = item.pic)}/>


                        <h4>{item.user} </h4></p>

                   </li>
                 )
               })}
             </ul>


           </div>
         </section>
       </div>





     </div>

   );





 }
}




export default Users;





//class Users extends Component {
  /*
  componentDidMount() {
            
            var ref = data.ref("usc").orderByKey();
            ref.once("value")
            .then(function(snapshot){
             
              snapshot.forEach(function(childSnapshot){
                var key = childSnapshot.key;
                var childData = childSnapshot.val();
                
                var src = childData.profile_picture;
                console.log(src);

                var img = document.createElement("img");
                img.src = src;

                document.querySelector('div.x').appendChild(img);
                

                localStorage.setItem(num, src);
                
              });
            });
//   ref.child("snap-vote-77029/usc").once("value").then(function(snapshot) {
//     for (var key in snapshot.val()) {
//         console.log(key);   
// }

// });



/*
 }

  render() {
    const btnStyle = {
      borderWidth: "2px",
      borderColor: "black",
      color: "black"
    };


    return (
      <div class="x"
        style={{
          textAlign: "center",
          verticalAlign: "middle",
          display: "table-cell"
        }}
      >




          
        </div>
      


    );

  }
}

export default Users;
*/
