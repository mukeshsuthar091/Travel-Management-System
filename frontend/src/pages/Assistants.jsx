import React from "react";
import { Col, Row } from "reactstrap";
import "../styles/assistance.css"
const AssistanceData = [
    {
        name: "Ravi Josi",
        imgUrl: "",
        mobile: "+91-8462519472",
        email: "ravi@gmail.com",
    },
    {
        name: "Asim Sharma",
        imgUrl: "",
        mobile: "+91-6481679351",
        email: "asim002@gmail.com",
    },
    {
        name: "Manish Jain",
        imgUrl: "",
        mobile: "+91-8462359710",
        email: "manish1008@gmail.com",
    },
    {
        name: "Kundan Shah",
        imgUrl: "",
        mobile: "+91-7824931158",
        email: "kundan03@gmail.com",
    },
];

const Assistants = () => {
    return (
        <>
        <h1 className="al-margin ">Assistants List</h1>
            <Row>
                {AssistanceData.map((item, index) => (
                    <Col lg="3" md="6" sm="12" className="alc-margin mb-4" key={index}>
                        <div className="service__item">
                            <div className="service__img">
                                <img src={item.imgUrl} alt="" />
                            </div>
                            <h5>{item.name}</h5>
                            <p>Phone: {item.mobile}</p>
                            <p>Email: <a href="#">{item.email}</a></p>
                        </div>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Assistants;
