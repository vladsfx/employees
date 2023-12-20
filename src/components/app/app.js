import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { name: 'Jhon Smith', salary: 1000, increase: false, rise: true, id: 1 },
                { name: 'Alex Bradly', salary: 800, increase: true, rise: false, id: 2 },
                { name: 'Ann Thomson', salary: 900, increase: false, rise: false, id: 3 },
                { name: 'Stive Jackson', salary: 1200, increase: false, rise: false, id: 4 },
            ]
        };
        this.index = this.state.data.length;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => ({
            data: data.filter(item => item.id !== id)
        }));
    };

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: ++this.index
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            };
        });
    };

    onToggleProp = (id, prop) => {
        // this.setState(({ data }) => {
        //     const index = data.findIndex(item => item.id === id);
        //     const oldItem = data[index];
        //     const newItem = { ...oldItem, increase: !oldItem.increase };

        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        //     return {
        //         data: newArr
        //     }
        // });

        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }));
    };

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased} />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDeleted={this.deleteItem}
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;