import React from 'react'
import '../css/latestNewsAndEvents.css'
const LatestNewsAndEvents = () => {
  return(
    <div className='container'>
    <h3 className='headingLatest'>Latest News and Events</h3>
      <div className="photos">
        <ul className='images'>
          <div>
           <li><img  src="https://1pjhft3ggnei4el40qfi16ch-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/IAT_HeroImage.jpg" alt="image" /></li>
           <p>Some texts here</p>
          </div>
          <div>
            <li><img src="https://1pjhft3ggnei4el40qfi16ch-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/HeroImage1910x1000-Women-in-Islamic-Law.jpg" alt="image" /></li>
          </div>
        </ul>
      </div>
    </div>
  )
}
export default LatestNewsAndEvents
