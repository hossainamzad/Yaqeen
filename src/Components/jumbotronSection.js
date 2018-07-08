import React from 'react'
import '../css/jumbotronSection.css'
const JumbotronSection = () => {
  return(
    <div className='jumbotronSection'>
      <div className="photos">
        <ul className='images'>
          <li><img className='firstImage' src="https://1pjhft3ggnei4el40qfi16ch-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/GodandEvil_HeroImage.jpg" alt="image"/></li>
          <li><img className='secondImage' src="https://1pjhft3ggnei4el40qfi16ch-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/IAT_HeroImage.jpg" alt="image" /></li>
          <li><img className='thirdImage' src="https://1pjhft3ggnei4el40qfi16ch-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/HeroImage1910x1000-Women-in-Islamic-Law.jpg" alt="image" /></li>
        </ul>
      </div>
    </div>
  )
}
export default JumbotronSection
