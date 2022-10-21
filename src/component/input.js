function Input(props) {

    const { label, OnChange, disabled, required, min, max, type , value} = props
    return <input placeholder={label} onChange={OnChange} type={type} value={value}  />

}

function Button(props) {
    const { label, onClick , ClassName} = props
    return (
    <div>
        <button className={`btn ${ClassName}`} onClick={onClick}>{label}</button>
    </div>)

}

export {Input,Button};