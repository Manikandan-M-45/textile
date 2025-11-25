export default function Button({value="Submit"}){
    return(
        <button type="submit" className="px-5 py-2 border-0 rounded bg-blue-700 text-white cursor hover:bg-red-800">{value}</button>
    )
}