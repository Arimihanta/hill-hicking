import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {HeaderPage} from './HeaderPage'
import { HomePage } from './HomePage'
import { TrailGuidePage } from './TrailGuidePage'
import { TrailGuideDetailsPage } from './TrailGuideDetailsPage'
import {BestPhotoPage} from './BestPhotoPage'
import {ContactPage} from './ContactPage'
export const MainPage=()=>{
    return(
        <Router>
            <HeaderPage/>
            <Switch>
                <Route path="/trail-guide/:id" exact component={() => <TrailGuideDetailsPage />}>
                </Route>
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