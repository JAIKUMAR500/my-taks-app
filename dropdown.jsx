import React, { useState, useRef, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NestedDropdown = () => {
    const [showSecondDropdown, setShowSecondDropdown] = useState(false);
    const [showThirdDropdown, setShowThirdDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowSecondDropdown(false);
            setShowThirdDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div className="position-relative d-inline-block p-3" ref={dropdownRef}>
            <DropdownButton title="Disposition" variant="warning">
                <Dropdown drop="end" show={showSecondDropdown}>
                    <Dropdown.Toggle
                        as={Dropdown.Item}
                        className={`d-flex justify-content-between align-items-center ${showSecondDropdown ? 'bg-warning text-dark' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowSecondDropdown(!showSecondDropdown);
                            setShowThirdDropdown(false);
                        }}
                    >
                        Interested
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Project 1</Dropdown.Item>
                        <Dropdown.Item>Project 2</Dropdown.Item>
                        <Dropdown.Item>Project 3</Dropdown.Item>
                        
                        <Dropdown drop="end" show={showThirdDropdown}>
                            <Dropdown.Toggle
                                as={Dropdown.Item}
                                className={`d-flex justify-content-between align-items-center ${showThirdDropdown ? 'bg-warning text-dark' : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowThirdDropdown(!showThirdDropdown);
                                }}
                            >
                                Executive
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Executive 1</Dropdown.Item>
                                <Dropdown.Item>Executive 2</Dropdown.Item>
                                <Dropdown.Item>Executive 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown.Item>Not interested</Dropdown.Item>
                <Dropdown.Item>Call back</Dropdown.Item>
                <Dropdown.Item>Follow up</Dropdown.Item>
                <Dropdown.Item>Call not response</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default NestedDropdown;