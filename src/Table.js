import Loader from "./Loader";

function Table(props) {
    const { data } = props;

    if (data == null) {
        return <Loader/>
    } 

    const propNames = Object.getOwnPropertyNames(data[0] || {})
        .filter(propName => propName !== 'id');

    return <table>
        <thead>
            <tr>
                { propNames.map(propName =>
                    <th key={propName}>{propName}</th>
                )}
            </tr>
        </thead>
        <tbody>
            { data.map(datum =>
                <tr key={datum.id}>
                    { propNames.map(propName =>
                        <td key={propName}>{datum[propName]}</td>
                    )}
                </tr>
            )}
        </tbody>
    </table>
};

export default Table;
