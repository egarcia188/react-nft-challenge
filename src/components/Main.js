import React, { useState, useEffect } from 'react';
import instagramLogo from '../assets/instagram.png'
import twitterLogo from '../assets/twitter.png'
import moreIcon from '../assets/more.png'
import './Main.css'


const Main = ({ selectedRwbee, rwbeeListData }) => {
    const [activeRwbee, setActiveRwbee] = useState(rwbeeListData[0])

    useEffect(() => {
        setActiveRwbee(rwbeeListData[selectedRwbee])
    }, [rwbeeListData, selectedRwbee])

    return (
      <div className='main'>
          <div className='mainContent'>
              <div className='rwbeeHighlight'>
                  <div className='rwbeeContainer'>
                      <img className='selectedRwbee' src={activeRwbee.image_url} alt="" />
                  </div>
              </div>
                <div className='rwbeeDetails' style={ { color: '#fff'}}>
                    <div className='title'>
                        {activeRwbee.name}
                    </div>
                    <span className='itemNumber'>.#{activeRwbee.token_id}</span>
                </div>
                <div className='owner'>
                    <div className='ownerImageContainer'>
                        <img src={activeRwbee.owner.profile_img_url} alt="" />
                    </div>
                    <div className='ownerDetails'>
                        <div className='ownerNameAndHandle'>
                            <div>{activeRwbee.owner.address}</div>
                            <div className='ownerHandle'>@ericgarcia188</div>
                        </div>
                        <div className='ownerLink'>
                            <img src={instagramLogo} alt="" />
                        </div>
                        <div className='ownerLink'>
                            <img src={twitterLogo} alt="" />
                        </div>
                        <div className='ownerLink'>
                            <img src={moreIcon} alt="" />
                        </div>
                    </div>
                </div>
          </div>
      </div>
       
    )
}

export default Main
