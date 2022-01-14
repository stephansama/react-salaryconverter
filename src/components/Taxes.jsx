import Tax from './Tax'

const Taxes = ({taxes, onOldClick, onNewClick}) => {
    return (
        <div className="col">
            <h4>Taxes</h4>
            {taxes.map((tax, i) =>(
                <Tax key={i} isNew={false} tax={tax} onClick={onOldClick}/>
            ))}
            <Tax isNew={true} onClick={onNewClick}/>
        </div>
    )
}

export default Taxes
