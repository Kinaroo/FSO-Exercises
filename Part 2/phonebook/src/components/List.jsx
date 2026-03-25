const List = ({personToShow, deleteName}) => {
    return (
        <ul>
            {personToShow.map((x) => <li key={x.id}>{x.name}: {x.number}<button onClick={() => deleteName(x.id, x.name)}>Delete</button></li>)}
        </ul>
    )
}

export default List