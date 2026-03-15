const List = ({personToShow}) => {
    return (
        <ul>
            {personToShow.map((x) => <li key={x.id}>{x.name}: {x.number}</li>)}
        </ul>
    )
}

export default List