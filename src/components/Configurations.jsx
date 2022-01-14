import {useState} from 'react'

const Configurations = ({configs, changeConfig}) => {

    const [currentSettings, changeCurrent] = useState({...configs })

    const submitForm = (e) => {
        e.preventDefault()
        if(currentSettings.hoursperday > 24 || currentSettings.hoursperday < 0) {
            alert('Please enter a number for hours per day that is within 0 and 24')
        } else if(currentSettings.daysperweek > 7 || currentSettings.daysperweek < 0) {
            alert('Please enter a number for days per week that is within 0 and 7')
        } else if(currentSettings.weeksperpay > 4 || currentSettings.weeksperpay < 0) {
            alert('Please enter a number for weeks per paycheck that is within 0 and 4')
        }

        let copy = configs
        if(currentSettings.hoursperday)copy.hoursperday = parseInt(currentSettings.hoursperday)
        if(currentSettings.daysperweek)copy.daysperweek = parseInt(currentSettings.daysperweek)
        if(currentSettings.weeksperpay)copy.weeksperpay = parseInt(currentSettings.weeksperpay)

        changeConfig(copy)
    }

    return (
        <div className="col text-center">
            <h4>Configurations</h4>
            <form onSubmit={submitForm}>
                <div className="mb-3 form-floating">
                    <input type="number" className="form-control text-center" 
                        name="hoursperday" id="hoursperday"
                        aria-describedby="hoursperday"
                        placeholder="Hours per day"
                        value={currentSettings.hoursperday}
                        onChange={(e)=>{e.target.value && changeCurrent({hoursperday: e.target.value})}}
                    />
                    <label htmlFor="hoursperday" className="form-label">Hours per day</label>
                </div>
                <div className="mb-3 form-floating">
                    <input type="number" className="form-control text-center" 
                        name="daysperweek" id="daysperweek"
                        aria-describedby="daysperweek"
                        placeholder="Days per week"
                        value={currentSettings.daysperweek}
                        onChange={(e)=>{e.target.value && changeCurrent({daysperweek: e.target.value})}}
                    />
                    <label htmlFor="daysperweek" className="form-label">Days per week</label>
                </div>
                <div className="mb-3 form-floating">
                    <input type="number" className="form-control text-center" 
                        name="weeksperpaycheck" id="weeksperpaycheck"
                        aria-describedby="weeksperpaycheck"
                        placeholder="Weeks per paycheck"
                        value={currentSettings.weeksperpay}
                        onChange={(e)=>{e.target.value && changeCurrent({weeksperpay: e.target.value})}}
                    />
                    <label htmlFor="weeksperpaycheck" className="form-label">Weeks per paycheck</label>
                </div>
                <button type="submit" className="btn btn-primary">SUBMIT</button>
                {/* <input type="submit" value="SET" /> */}
            </form>
        </div>
    )
}

export default Configurations
