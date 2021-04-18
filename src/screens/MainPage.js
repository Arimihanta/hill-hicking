import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {HeaderPage} from './HeaderPage'
import {HomePage} from './HomePage'
import {TrailGuidePage} from './TrailGuidePage'
import {BestPhotoPage} from './BestPhotoPage'
import {ContactPage} from './ContactPage'
export const MainPage=()=>{
    return(
        <Router>
            <HeaderPage/>
            <Switch>
                <Route path="/trail-guide">
                    <TrailGuidePage/>
                </Route>
                <Route path="/photos">
                    <BestPhotoPage/>
                </Route>
                <Route path="/contact">
                    <ContactPage/>
                </Route>
                <Route path="/">
                    <HomePage/>
                </Route>
            </Switch>
        </Router>
    )
}