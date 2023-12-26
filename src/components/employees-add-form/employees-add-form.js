import { Component } from 'react';

import './employees-add-form.scss';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        };
    }

    onAddAlert = (flag = true) => {
        const error = document.querySelector('.alert');
        const inputs = document.querySelectorAll(".form-control");

        if (flag) {
            inputs.forEach(item => {
                item.classList.remove('red');
            });

            error.classList.add('hide');
        }
        else {
            inputs.forEach(item => {
                item.classList.add('red');
            });
    
            error.classList.remove('hide');    
        }
    }

    onValueChange = (e) => {
        this.onAddAlert();
        this.setState({
            [e.target.name]: e.target.value
        });
    }



    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.name.trim().length >= 3 && +this.state.salary >= 50) {
            this.onAddAlert()
            this.props.onAdd(this.state.name, this.state.salary);
        } else {
            this.onAddAlert(false)
        }

        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        name='name'
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        value={name}
                        onChange={this.onValueChange} />
                    <input type="number"
                        name='salary'
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        value={salary}
                        onChange={this.onValueChange} />
                    <button type="submit"
                        className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
                <p className='alert hide'>Поля заполнены некорректно. Имя - не меньше 3 букв, зарплата - не менее 50$</p>
            </div>
        );
    }
}

export default EmployeesAddForm;