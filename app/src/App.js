import React from "react";
import "./App.css";
import Topbar from "./Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="ContentContainer">
        <div className="Content">
          <div className="Intro">
            <p>
              Hey...这是 will，welcome to "myspace" 👏. 欢迎通过右上角的微信或者
              LinkedIn 联系我.
            </p>
          </div>
          <div className="Course">
            <b>课程</b>
            <p>
              如果你对 fullstack developer
              有兴趣的话，也许你会对下面的课程感兴趣：
            </p>
            <p>- Javascript 入门与进阶</p>
            <p>- React 入门</p>
            <p>- React 高级进阶</p>
            <p>- Leetcode 算法课</p>
            <p>- System Design 实践课</p>
            <p>皆为小班授课，满4人即开课...欢迎WeChat咨询我呀</p>
          </div>
          <div className="ReadingList">
            <b>Books and Papers I've found very useful</b>
            <ul>
              <li>
                <a href="https://www.amazon.com/Philosophy-Software-Design-John-Ousterhout/dp/1732102201">
                  A Philosophy of Software Design
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/ref=pd_lpo_sbs_14_t_1?_encoding=UTF8&psc=1&refRID=TNXRDP0T1N5VW395VTKK">
                  Designing Data-Intensive Applications: The Big Ideas Behind
                  Reliable, Scalable, and Maintainable Systems
                </a>
              </li>
              <li>
                <a href="https://ai.google/research/pubs/pub27898">
                  Bigtable: A Distributed Storage System for Structured Data
                </a>
              </li>
              <li>
                <a href="https://www.amazon.com/Effective-Java-Joshua-Bloch/dp/0134685997">
                  Effective Java
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
