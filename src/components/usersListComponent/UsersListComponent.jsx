import React from 'react'
import {UsersList} from "./usersList/UsersList";

export const UsersListComponent = ({ usersData }) => {
    const getDob = (dob) => ({
        day: (new Date(dob)).getDate(),
        month: (new Date(dob)).getMonth(),
        year: (new Date(dob)).getFullYear(),
    })

    const stylesForDate = (dob) => ({
        "list-users__item": true,
        "list-users__dob": true,
        "list-users__dob--gray": getDob(dob).month >= 0 && getDob(dob).month <= 2,
        "list-users__dob--blue": getDob(dob).month >= 3 && getDob(dob).month <= 6,
        "list-users__dob--green": getDob(dob).month >= 7 && getDob(dob).month <= 10,
        "list-users__dob--red": getDob(dob).month >= 11,
    })

    const showUsersWithSameDob = (dob) => {
        const filtredUsers = usersData
            .filter(el => getDob(el.dob).month === getDob(dob).month)
            .map(el => `${el.firstName} ${el.lastName}`)
            .join(', ')
        return `Users with the same birth month - ${filtredUsers}`
    }

    return (
        <UsersList
            getDob={getDob}
            usersData={usersData}
            stylesForDate={stylesForDate}
            showUsersWithSameDob={showUsersWithSameDob}
        />
    )
}