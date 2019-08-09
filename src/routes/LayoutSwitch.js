import React, { Component } from 'react';
import { connect } from 'dva';
import { Switch } from 'dva/router';
import PosLayout from '../layouts/PosLayout';
import AdminLayout from '../layouts/AdminLayout';

class LayoutSwitch extends Component {

    render() {
        const { children, location } = this.props;
        const { pathname } = location;
        
        if (pathname.indexOf('/pos') > -1) {
            return (<PosLayout><Switch>{children}</Switch></PosLayout>)
        } else if (pathname.indexOf('/admin') > -1) {
            return (<AdminLayout><Switch>{children}</Switch></AdminLayout>)
        } else {
            return (<Switch>{children}</Switch>)
        }
    }
}

export default LayoutSwitch;
