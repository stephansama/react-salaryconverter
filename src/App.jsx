import Configurations from './components/Configurations'
import PayModels from './components/PayModels'
import Header from './components/Header'
import Footer from './components/Footer'
import Taxes from './components/Taxes'

import {useState} from 'react'

const App = () => {
  const [configs, setConfigs] = useState({
    hoursperday: 8,
    daysperweek: 5,
    weeksperpay: 2
  })

  const [taxes, setTaxes] = useState([{
      name: 'Federal',
      percentage: 14,
      id:0
  }, {
      name: 'State',
      percentage: 4,
      id:1
  }, {
      name: 'Social Security',
      percentage: 7,
      id:2
  }])

  // configuration click functions
  const configUpdate = ({hoursperday, daysperweek, weeksperpay}) => {
    setConfigs({hoursperday, daysperweek, weeksperpay})
  }

  // Tax Click functions
  const onOldTaxClick = (id) =>{
    console.log(id)
    setTaxes(taxes.filter(tax => tax.id !== id))
  }
  
  const onNewTaxClick = ({name, percentage}) =>{
    console.log(taxes[taxes.length-1].id+1)
    setTaxes([...taxes, {name, percentage: parseInt(percentage), id: taxes[taxes.length-1].id+1}])
  }

  return (
    <div className="container">
      <Header />
      <PayModels
        configs={configs}
        taxes={taxes}
      />
      <div className="d-flex row">
        <Configurations 
          configs={configs} 
          changeConfig={configUpdate}
        />
        <Taxes 
          taxes={taxes} 
          onOldClick={onOldTaxClick} 
          onNewClick={onNewTaxClick}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
