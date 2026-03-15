  const Find = ({value, onChange}) => {
    return (
        <div>
            <form >
                <div>
                    filter shown with <input
                        value={value}
                        onChange={onChange}
                    />
                </div>
            </form>
        </div>
    )
}



export default Find