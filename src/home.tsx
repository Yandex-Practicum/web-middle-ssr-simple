import * as React from "react";
import {connect} from "react-redux";
import {State} from "./store/types";

type HomeProps = {
    main: {
        name: string;
    }
}

const Home: React.FC<HomeProps> = ({ main: { name } }) => {
    return <div>
        {name}
    </div>;
};

export default connect((state: State) => ({ main: state.main }), {})(Home)
