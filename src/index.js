import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//Създаваме масив с цветовете
// const colors = [

//   '#FF6B6B',
//   '#4D96FF',
//   '#6BCB77',
//   '#FFD93D',
//   '#FF9F1C',
//   '#845EC2',
//   '#F72585',
// ];

//Създаваме масив с умения
// const skills = [
//   {
//     name: 'HTML',
//     emoji: '🧩',
//   },

//    {
//     name: 'CSS',
//     emoji: '🎨',
//   },

//    {
//     name: 'JavaScript',
//     emoji: '⚡',
//   },

//    {
//     name: 'TypeScript',
//     emoji: '🧠',
//   },

//    {
//     name: 'Angular',
//     emoji: '🅰️',
//   },

//    {
//     name: 'React',
//     emoji: '⚛️',
//   },

// ]

function App() {
  return (
    //Това ни е рамката на картичката
    <div className="card">
      {/*React компоненти се извикват като HTML елементи, но започват с главна буква.*/}
      <Avatar />
      <div className="data">
        <Intro />
        {}
        <SkilList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="irina.png" alt="Irina Draganova" />;
}

function Intro() {
  return (
    <div>
      <h1>Irina Draganova</h1>
      <p>
        Junior Front-End Developer — a chaos of technologies in my head, but the
        code still works ✔️
      </p>
    </div>
  );
}

function SkilList(){
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="⚛️" color="#845EC2" />
      <Skill skill="Angular" emoji="🅰️" color="#6BCB77" />
      <Skill skill="HTML" emoji="🧩" color="#FF6B6B" />
      <Skill skill="CSS" emoji="🎨" color="#F72585" />
      <Skill skill="JavaScript" emoji="⚡" color="#4D96FF" />
      <Skill skill="TypeScript" emoji="🧠" color="#FF9F1C" />
    </div>
  )
}

function Skill(props){
  return(
    <div className="skill" style={{backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
