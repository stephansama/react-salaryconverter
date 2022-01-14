import PayModel from './PayModel'
import {useState} from 'react'

const PayModels = ({configs, taxes}) => {

    const [paymodels, setPaymodels] = useState([{
        title: 'Pre Tax Model', post: 0,
        hwage: 0,day: 0, week: 0, paycheck:0, month: 0, salary: 0
    }, {
        title: 'Post Tax Model', post: 1,
        hwage: 0,day: 0, week: 0, paycheck:0, month: 0, salary: 0
    }])

    const [newHWage, setHWage] = useState([0,0])
    const [newSalary, setSalary] = useState([0,0])

    const submitForm = (e) =>{

        console.log('calculating')
        e.preventDefault()
        let preCopy, postCopy
        if(newHWage[0] || newHWage[1]){
            if(newHWage[0]){
                preCopy = calculateHWage(newHWage[0],0)
                postCopy = calculateSalary(applyTaxes(preCopy.salary), 1)
            } else {
                postCopy = calculateHWage(newHWage[1],1)
                preCopy = calculateSalary(removeTaxes(postCopy.salary), 0)
            }
        } else {
            if(newSalary[0]){
                preCopy = calculateSalary(newSalary[0],0)
                postCopy = calculateSalary(applyTaxes(preCopy.salary), 1)
            } else {
                console.log('here')
                postCopy = calculateSalary(newSalary[1],1)
                console.log(postCopy)
                preCopy = calculateSalary(removeTaxes(postCopy.salary),0)
            }
        }

        console.log(preCopy,postCopy)

        setPaymodels([preCopy,postCopy])
        setSalary([preCopy.salary, postCopy.salary])
        setHWage([preCopy.hwage, postCopy.hwage])
    }

    const calculateHWage = (newHWage, pos) => {

        const model = paymodels[pos]
        model.hwage = (parseFloat(newHWage)).toFixed(2)
        model.day = (model.hwage * configs.hoursperday).toFixed(2)
        model.week = (model.day * configs.daysperweek).toFixed(2)
        model.paycheck = (model.week * configs.weeksperpay).toFixed(2)
        model.month = (model.week * 4).toFixed(2)
        model.salary = (model.week * 52).toFixed(2)

        return model
    }

    const calculateSalary = (newSalary, pos) =>{

        const model = paymodels[pos]
        model.salary = (parseFloat(newSalary)).toFixed(2)
        model.week = (parseFloat(model.salary / 52)).toFixed(2)
        model.month = (model.week * 4 ).toFixed(2)
        model.paycheck = (model.week * configs.weeksperpay).toFixed(2)
        model.day = (parseFloat(model.week / configs.daysperweek)).toFixed(2)
        model.hwage = (parseFloat(model.day / configs.hoursperday)).toFixed(2)

        return model
    }

    const applyTaxes = (preSalary) => {
        let delta = 0
        taxes.forEach(tax => {
            delta += preSalary * (parseInt(tax.percentage) * .01)
        })

        console.log(preSalary - delta)
        return preSalary - delta
    }

    const removeTaxes = (postSalary) => {
        let totalTax = 0
        taxes.forEach(tax => {
            totalTax += tax.percentage
        })
        console.log(postSalary / (1 - (totalTax*.01)))
        return postSalary / (1 - (totalTax*.01))
    }

    const clearModels = () => {
        paymodels.forEach(model => {
            Object.keys(model).forEach(key =>{
                if(key !== 'title' && key !== 'post')
                    model[key] = 0
            })
        })
        setHWage([0,0])
        setSalary([0,0])
    }

    const onFocus = (e) => {
        e.preventDefault()
        clearModels()
    }

    return (
        <div className="row mb-3">
            <form onSubmit={submitForm} className="form-control-sm text-center">
                <div className="row">
                    <PayModel paymodel={paymodels[0]}
                        onFocus={onFocus}   
                        newHWage={newHWage}
                        setHWage={setHWage}
                        newSalary={newSalary}
                        setSalary={setSalary}
                    />
                    <PayModel paymodel={paymodels[1]}
                        onFocus={onFocus}
                        newHWage={newHWage}
                        setHWage={setHWage}
                        newSalary={newSalary}
                        setSalary={setSalary}
                    />
                </div>
            <button type="submit" className="btn btn-primary">CALCULATE</button>
            </form>
        </div>
    )
}

export default PayModels
