function Item({ name, isPacked}) {
    return <li className="item">{name}</li>;
}

export default function PackingList() {
    return (
        <section>
            <h3>Wendy Ride's Packing List</h3>
            <ul>
                <Item 
                    isPacked={true} 
                    name="Space suit" 
                />
            </ul>
        </section>
    )
}