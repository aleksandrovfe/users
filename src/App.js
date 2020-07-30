import React, {useEffect, useState} from 'react';
import './styles/App.scss';
import {getUsers} from "./api/requestData";
import {UsersListComponent} from "./components/usersListComponent/UsersListComponent";
import {Route} from "react-router-dom";
import {Spinner} from './components/Spinner/Spinner'
import {Home} from "./components/Home/Home";
import {Navigation} from "./components/Navigation/Navigation";


export const App = () => {
    const [usersData, setUsersData] = useState([])

    useEffect( () => {
        const fetchData = async () => {
            setUsersData(await getUsers())
        }
        fetchData()
    }, [])

    return (
        <>
            <Navigation />
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/users" render={() => {
                if (usersData && usersData.length) {
                    return <UsersListComponent usersData={usersData}/>
                } else {
                    return <Spinner />
                }
            }} />
        </>
    )
}

