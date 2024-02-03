import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState,useEffect,useRef}  from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import PeerJs from 'peerjs'
import {v4 as uuid} from 'uuid'

import Home from './components/Home/home'
import Room from './components/room'
import Thanks from './components/end-page/thanks'
import Chat from './components/Adapt-feature-chat/chat'
import ParticularRoom from './components/Adapt-feature-chat/room';
import './App.css'

function App() {

  const peerInstance=useRef(null)
  const [currentUserId,setCurrentUserId]=useState('');
  const [theme,setTheme]=useState(false)


  useEffect(()=>{
    const userId=uuid()

    const peer=new PeerJs(userId);
    peerInstance.current=peer;

    peerInstance.current.on('open',(id)=>{
      setCurrentUserId(id);
    })

  },[]);

  //console.log('APP is running')
  
  return (
   <div>
      <BrowserRouter>

        <Route exact path="/" component={(props)=> <Home
            {...props}
            theme={theme} setTheme={()=>setTheme(!theme)}
            currentUserId={currentUserId}
          />
        }>
        </Route>
        <Route exact path="/rooms/:roomId" component={(props) => <Room
            {...props}
            currentUserId={currentUserId}
            theme={theme} setTheme={()=>setTheme(!theme)}
            peerInstance={peerInstance.current}
          />
        }>
        </Route>
        <Route exact path="/thanks" component={Thanks}></Route>
        <Route path="/chat">
          <Chat currentUserId={currentUserId} peerInstance={peerInstance.current} theme={theme} setTheme={()=>setTheme(!theme)}></Chat>
        </Route>
        <Route path="/chat/:roomId" render={(props)=><ParticularRoom  {...props} key={props.location.key}></ParticularRoom>}>
    
        </Route>
      
    </BrowserRouter>
   </div>
  );
}

export default App;

