import React from 'react';

import PageHeader from './PageHeader.jsx';
import MainContainer from './MainContainer.jsx';

class App extends React.Component {

    render() {
        return (
            <div>
                <MainContainer {...this.props} />
                <p className="fizbone-word-footer">
                    &ldquo; คืนธรรมชาติให้สุนัขของคุณ &rdquo;
                </p>
                <p className="fizbone-disclaimer-footer">
                    &#169; 2016 Hello Monday Co., Ltd. ALL RIGHTS RESERVED
                </p>
            </div>
        );
    }
}
export default App;
