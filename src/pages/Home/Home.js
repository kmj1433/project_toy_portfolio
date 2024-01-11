import React from "react"
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
      <div className='box'>
        <div className='boxLeft'>
        <div className='boxText'>
          <p className='name'>MINJI KIM</p>
          <p className='title'>웹 개발자<br/>포트폴리오</p>
        </div>
        <p className='line'></p>
        <div className='explain'>
          안녕하세요!<br/>
          저는 풀스택 웹 개발자입니다.<br/>
          전체부터 디테일한 요소까지 신경쓰며,<br/>
          동료와 커뮤니케이션을 잘하는 것이 저의 장점입니다.<br/>
        </div>
        </div>

        <div className='boxRight'>
          <div>
          <div className='component' style={{marginBottom: 40, marginRight: 40}}>
            <div className='dot' style={{left: 30, top: 27}}/>
            <div className='dot' style={{left: 190, top: 27}}/>
            <div className='dot' style={{left: 30, top: 172}}/>
            <div className='dot' style={{left: 190, top: 172}}/>
            <div className='componentText'>
              ABOUT
            </div>
          </div>

          <div className='component'>
            <div className='dot' style={{left: 30, top: 27}}/>
            <div className='dot' style={{left: 190, top: 27}}/>
            <div className='dot' style={{left: 30, top: 172}}/>
            <div className='dot' style={{left: 190, top: 172}}/>
            <div className='componentText'>
              ARCHIVING 
            </div>
          </div>
          </div>

          <div>
          <div className='component' style={{marginBottom: 40}}>
            <div className='dot' style={{left: 30, top: 27}}/>
            <div className='dot' style={{left: 190, top: 27}}/>
            <div className='dot' style={{left: 30, top: 172}}/>
            <div className='dot' style={{left: 190, top: 172}}/>
            <div className='componentText'>
              PROJECT
            </div>
          </div>

          <div className='component'>
            <div className='dot' style={{left: 30, top: 27}}/>
            <div className='dot' style={{left: 190, top: 27}}/>
            <div className='dot' style={{left: 30, top: 172}}/>
            <div className='dot' style={{left: 190, top: 172}}/>
            <div className='componentText'>
              CONTACT
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home