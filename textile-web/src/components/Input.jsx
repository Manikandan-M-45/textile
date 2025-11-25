function Input({type="text",value, handleChange, name, label}) {
    return ( 
        <div>
            <label classname="mr-4">{label}</label>
            <input type={type} value={value} name={name} onChange={handleChange} className="border rounded" />
        </div>
     );
}

export default Input;