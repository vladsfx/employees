import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            all: true,
            rise: false,
            more: false
        }
    }

    setFilter = (e) => {
        let all, rise, more = false
        const btns = document.querySelectorAll('.btn-group .btn');

        btns.forEach(btn => {
            btn.classList.remove("btn-light");
            btn.classList.add('btn-outline-light');
        });

        e.currentTarget.classList.remove('btn-outline-light');
        e.currentTarget.classList.add('btn-light');

        const res = e.target.getAttribute('data-filter');

        switch (res) {
            default: all = true;
                break;
            case 'rise':
                rise = true;
                break;
            case 'more':
                more = true;
                break;
        }
        this.setState({ all, rise, more });
        this.props.onUpdateFilter(all, rise, more);
    }

    render() {
        return (
            <div className="btn-group">
                <button
                    className="btn btn-light"
                    type="button"
                    data-filter="all"
                    onClick={this.setFilter}>
                    Все сотрудники
                </button>
                <button
                    className="btn btn-outline-light"
                    type="button"
                    data-filter="rise"
                    onClick={this.setFilter}>
                    На повышение
                </button>
                <button
                    className="btn btn-outline-light"
                    type="button"
                    data-filter="more"
                    onClick={this.setFilter}>
                    З/П больше 1000$
                </button>
            </div>
        );
    }
}

export default AppFilter;