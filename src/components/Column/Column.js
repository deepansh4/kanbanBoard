import React from "react";
import './Column.css'
import Card from "../Card/Card";

const Column = (props) => {
    const response = props.data;
    const myValue = props.selectedValue;
    const orderingValue = props.orderingValue;

    const priorityLabels = {
        4: "Urgent",
        3: "High",
        2: "Medium",
        1: "Low",
        0: "No priority",
    };

    const statusValues = new Set(response?.tickets?.map(ticket => ticket.status) || []);
    const priorityValues = new Set(response?.tickets?.map(ticket => ticket.priority) || []);
    const userValues = new Set(response?.users?.map(user => user.name) || []);

    const renderValues = (values) => {
        return (
            <div className="column">
                {Array.from(values).map((value, index) => {
                    const filteredTickets = response.tickets
                        .filter(ticket => {
                            if (myValue === 'status') {
                                return ticket.status === value;
                            } else if (myValue === 'priority') {
                                return ticket.priority === value;
                            } else if (myValue === 'user') {
                                const userId = response.users.find(user => user.name === value)?.id;
                                return ticket.userId === userId;
                            }
                        })
                        .sort((a, b) => {
                            if (orderingValue === 'priority') {
                                return a.priority - b.priority;
                            } else if (orderingValue === 'title') {
                                return a.title.localeCompare(b.title);
                            } else {
                                return 0; 
                            }
                        });

                    const filteredTicketsLength = filteredTickets.length;

                    return (
                        <div key={index} className="column-item">
                            <div className="header-top">
                                <div className="icon1">
                                    <img className="img3" src="https://cdn-icons-png.flaticon.com/128/8369/8369110.png" />
                                </div>
                                <div className="value">
                                {myValue === 'priority' ? `${priorityLabels[value]} : ${filteredTicketsLength}` : `${value} : ${filteredTicketsLength}`}

                                </div>
                                <div className="space"></div>
                                <div className="icon2">
                                    <img className="img1" src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" />
                                    <img className="img2" src="https://cdn-icons-png.flaticon.com/128/8212/8212729.png" />
                                </div>
                            </div>
                            { (
                                filteredTickets.map((ticket, ticketIndex) => (
                                    <Card
                                        key={ticketIndex}
                                        value={value}
                                        id={ticket.id}
                                        title={ticket.title}
                                        feature={ticket.tag[0]}
                                    />
                                ))
                            )}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="columns-container">
            {myValue === 'status' && renderValues(statusValues)}
            {myValue === 'priority' && renderValues(priorityValues)}
            {myValue === 'user' && renderValues(userValues)}
        </div>
    );
}

export default Column;









