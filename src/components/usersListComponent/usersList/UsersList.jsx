import React from "react";
import classnames from 'classnames'

export const UsersList = ({ getDob, stylesForDate, showUsersWithSameDob, usersData }) => (
    <div className="list-users">
        <img className="background" src="./assets/img2.jpg" alt="background"/>
        {usersData.map(el => (
            <div key={el.id} className="list-users__wrapper">
                <p className="list-users__item">{el.firstName}</p>
                <p className="list-users__item">{el.lastName}</p>
                <p title={showUsersWithSameDob(el.dob)} className={classnames(stylesForDate(el.dob))}>
                    {`${getDob(el.dob).day}-${getDob(el.dob).month}-${getDob(el.dob).year}`}
                </p>
            </div>
        ))}
    </div>
)