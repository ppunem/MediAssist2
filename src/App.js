import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import ACCA from './components/ACCA'
import WhyChooseUs from './components/WhyChooseUs'
import WhatWeLearn from './components/WhatWeLearn'
import PlacementAssistance from './components/PlacementAssistance'
import PrepJourney from './components/PrepJourney'
import './App.css'

const App = () => (
  <div>
    <Header />
    <div className="intro-form-container">
      <ACCA />
    </div>
    <WhyChooseUs />
    <WhatWeLearn />
    <PlacementAssistance />
    <div className="intro-form-container">
      <PrepJourney/>
    </div>
  </div>
)

export default App
