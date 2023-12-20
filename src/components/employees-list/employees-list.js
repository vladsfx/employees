import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({ data, onDeleted, onToggleIncrease, onToggleRise }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <EmployeesListItem
                key={id}
                onDeleted={() => (onDeleted(id))}
                onToggleIncrease={()=>(onToggleIncrease(id))}
                onToggleRise={()=>(onToggleRise(id))}
                {...itemProps} />
        );
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeesList;