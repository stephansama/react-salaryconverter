import {useState} from 'react'

const Tax = ({isNew, onClick, tax}) => {

    const [name, setName] = useState('')
    const [percentage, setPercentage] = useState('')

    const submitTax = (e) => {
        e.preventDefault()
        if(!isNew){
            onClick(tax.id)
        } else {
            if(!Number.isInteger(parseInt(percentage))){
                alert('Must insert a number for tax percentage')
                return false
            } else if (!name){
                alert('Must insert a tax name')
                return false
            }
            setName('')
            setPercentage('')
            onClick({name, percentage})
        }
        return true
    }

    return (
        <div className="col">
            <form className="row align-items-center mb-3">
                <div className="col form-floating">
                    <input type="text" className="form-control" 
                        name="name" id="name"
                        aria-describedby="name"
                        placeholder="Tax Name"
                        value={!isNew ? tax.name : name}
                        onChange={(e) => setName(e.target.value)}
                        readOnly={!isNew}
                        tabIndex={!isNew ? '-1' : ''}
                    />
                    <label htmlFor="name" className="form-label">Name</label>
                </div>
                <div className="col form-floating">
                    <input type="number" className="form-control" 
                        name="percentage" id="percentage"
                        aria-describedby="percentage"
                        placeholder="Tax Percentage"
                        value={!isNew ? tax.percentage : percentage}
                        onChange={(e) => setPercentage(e.target.value)}
                        readOnly={!isNew}
                        tabIndex={!isNew ? '-1' : ''}
                    />
                    <label htmlFor="percentage" className="form-label">Percentage</label>
                </div>
                {/* Name Field */}
                {/* <input type="text" name="name"
                placeholder="Tax Name" id="name"
                value={!isNew ? tax.name : name}
                tabIndex={!isNew ? '-1' : ''}
                onChange={(e) => setName(e.target.value)}
                /> */}
                {/* Percentage Field */}
                {/* %<input type="number" name="percentage"
                placeholder="Tax Percentage" id="percentage"
                value={!isNew ? tax.percentage : percentage}
                tabIndex={!isNew ? '-1' : ''}
                onChange={(e) => setPercentage(e.target.value)}
                /> */}
                {/* DEL/ADD Button */}
                <button className="col-1 h-50 btn btn-primary btn-sm d-flex align-items-center justify-content-center" onClick={submitTax} id={isNew ? 'add' : 'del'}>
                    {isNew ? '+' : 'x'}
                </button>
            </form>
        </div>
    )
}

export default Tax
