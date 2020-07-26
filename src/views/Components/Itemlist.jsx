import React from 'react';

function Itemlist(props) {
    return (<>
        <th scope="row">{props.item.id}</th>
        <td>{props.item.nombr}</td>
        <td>{props.item.desc}</td>
        <td></td>
    </>

    )
}
export default Itemlist;