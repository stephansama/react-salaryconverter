const PayModel = ({
    paymodel, onFocus,
    setHWage, newHWage,
    setSalary, newSalary}) => {

        const changeHWage = (e) => {
            let newInt = parseInt(e.target.value)
            if(!Number.isInteger(newInt)) return false
            paymodel.post ? 
                setHWage(prevHWage => [prevHWage[0], newInt]) :
                setHWage([newInt, newHWage[1]])
            return true
        }

        const changeSalary = (e) => {
            console.log(e.target.value)
            console.log(newSalary)
            let newInt = parseInt(e.target.value)
            if(!Number.isInteger(newInt)) return false
            paymodel.post ?
                setSalary([newSalary[0], newInt]) : 
                setSalary([newInt, newSalary[1]])
        }
        
    return (
    <div className="col">
        <h4 className="text-center">{paymodel.title}</h4>
        <div className="mb-3 form-floating">
            <input type="number" className="form-control" 
                name="hwage" id="hwage"
                aria-describedby="hwage"
                placeholder="Hourly Wage"
                onClick={onFocus}
                value={newHWage[paymodel.post]}
                onChange={changeHWage}
            />
            <label htmlFor="hwage">Hourly Wage</label>
        </div>
        <div className="mb-3 form-floating">
            <input type="number" className="form-control" 
                name="day" id="day"
                aria-describedby="day"
                placeholder="Pay per day"
                readOnly tabIndex="-1"
                value={paymodel.day}
                />
            <label htmlFor="day" className="form-label">Pay per day</label>
        </div>
        <div className="mb-3 form-floating">
            <input type="number" className="form-control" 
                name="week" id="week"
                aria-describedby="week"
                placeholder="Pay per week"
                readOnly tabIndex="-1"
                value={paymodel.week}
                />
            <label htmlFor="week" className="form-label">Pay per week</label>
        </div>
        <div className="mb-3 form-floating">
            <input type="number" className="form-control" 
                name="month" id="month"
                aria-describedby="month"
                placeholder="Pay per month"
                readOnly tabIndex="-1"
                value={paymodel.month}
                />
            <label htmlFor="month" className="form-label">Pay per month</label>
        </div>
        <div className="mb-3 form-floating">
            <input type="number" className="form-control" 
                name="paycheck" id="paycheck"
                aria-describedby="paycheck"
                placeholder="Pay per paycheck"
                readOnly tabIndex="-1"
                value={paymodel.paycheck}
                />
            <label htmlFor="paycheck" className="form-label">Pay per paycheck</label>
        </div>
        <div className="mb-3 form-floating">
            <input type="number" className="form-control" 
                name="salary" id="salary"
                aria-describedby="salary"
                placeholder="Salary"
                onClick={onFocus}
                value={newSalary[paymodel.post]}
                onChange={changeSalary}
                />
            <label htmlFor="salary" className="form-label">Salary</label>
        </div>
        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        {/* <div className="mb-3 form-floating form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}
        {/* <button type="submit" className="btn btn-primary">Submit</button> */}
    </div>
    )
}

export default PayModel