import './app-filter.scss';

const AppFilter = (props) => {

    const buttonsData = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'rise', label: 'На повышение' },
        { name: 'more', label: 'З/П больше 1000$' }
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;

        const classActive = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button type="button"
                className={`btn ${classActive}`}
                key={name}
                onClick={() => props.onUpdateFilter(name)}>
                {label}
            </button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;