import React, {  ReactElement, classNames} from "react"
import React from 'react';
import ReactDOM from 'react-dom';

// "use strict";
const SPY_INTERVAL = 100;
class Scrollspy extends React.Component {
    constructor(props) {
        super(props);
        this.isInView = (element) => {
            if (!element) {
                return false;
            }
            const { offset } = this.props;
            const rect = element.getBoundingClientRect();
            return rect.top >= 0 - offset && rect.bottom <= window.innerHeight + offset;
        };
        this.state = {
            items: []
        };
    }
    spy() {
        const items = this.props.ids
            .map(id => {
            const element = document.getElementById(id);
            if (element) {
                return {
                    inView: this.isInView(element),
                    element
                };
            }
            else {
                return;
            }
        })
            .filter(item => item);
        const firstTrueItem = items.find(item => !!item && item.inView);
        if (!firstTrueItem) {
            return; // dont update state
        }
        else {
            const update = items.map(item => {
                return Object.assign(Object.assign({}, item), { inView: item === firstTrueItem });
            });
            this.setState({ items: update });
        }
    }
    componentDidMount() {
        this.timer = window.setInterval(() => this.spy(), SPY_INTERVAL);
    }
    componentWillUnmount() {
        window.clearInterval(this.timer);
    }
    scrollTo(element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }
    spy() {
        const items = this.props.ids
            .map(id => {
            const element = document.getElementById(id);
            if (element) {
                return {
                    inView: this.isInView(element),
                    element
                };
            }
            else {
                return;
            }
        })
            .filter(item => item);
        const firstTrueItem = items.find(item => !!item && item.inView);
        if (!firstTrueItem) {
            return; // dont update state
        }
        else {
            const update = items.map(item => {
                return Object.assign(Object.assign({}, item), { inView: item === firstTrueItem });
            });
            this.setState({ items: update });
        }
    }
    render() {
        const { itemContainerClassName, activeItemClassName, itemClassName } = this.props;
        return (React.createElement("ul", { className: classNames(itemContainerClassName) }, this.state.items.map((item, k) => {
            return (React.createElement("li", { className: classNames(itemClassName, item.inView ? activeItemClassName : null), key: k, onClick: () => {
                    this.scrollTo(item.element);
                } }, item.element.innerText));
        })));
    }
}
Scrollspy.defaultProps = {
    offset: 2
};

ReactDOM.render(React.createElement(Scrollspy, { ids: ["oktatas", "about", "tanuloink", "contact"], itemContainerClassName: "scrollSpyContainer", activeItemClassName: "active", itemClassName: "spyItemClass" }), document.getElementById('scrollspy'));
