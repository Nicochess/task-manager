import React from "react"
import CreateRoomPage  from "./CreateRoomPage"
import RoomJoinPage  from "./RoomJoinPage";
import { BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
    Link
    } from "react-router-dom" 

const HomePage = () => {
    return (
    <Router>
        <Switch>
            <Route exact path="/"><p>This is the home page</p></Route>
            <Route path="/join" component={RoomJoinPage} />
            <Route path="/create" component={CreateRoomPage} />
        </Switch>
    </Router>
    )
}

export default HomePage