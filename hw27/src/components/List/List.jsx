import React, {Component, Fragment} from 'react';

class List extends Component {
    render() {
        let {list, actions} = this.props;
        return Array.isArray(list) && list.length ? (<Fragment>
                <div className="segment">
                    <ul>{list.map((item, index) => <li key={index}>{item.title}</li>)}</ul>
                    <div className="segment-btns">{actions.map((item, index) => <button key={index}
                                                                                        onClick={item.action}>{item.text}</button>)}
                    </div>
                </div>
            </Fragment>)
            :
            <div className='segment'></div>;
    }
}

export default List;