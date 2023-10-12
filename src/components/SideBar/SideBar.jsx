import React from "react"
import './SideBar.css'
import {Link} from "react-router-dom";
import {Divider} from "primereact/divider";


const SideBar = () => {

    return (
        <>
            <div className="mt-6 sidebar shadow-4">
                <div id="wrapper" className="mt-5" style={{flex: '1'}}>
                    <div id="sidebar-wrapper">
                        <div className="sidebar-header">
                            <Link to={"/"} style={{textDecoration: 'none'}}>
                                <span className="logo">JAM PROPERTY</span>
                            </Link>
                        </div>
                        <Divider type="solid"/>
                        <ul className="sidebar-nav">
                            <Link to={"/property"} style={{textDecoration: 'none'}}>
                            <li>
                                <a href="#">Property1</a>
                            </li>
                            </Link>
                            <Link to={"/property"} style={{textDecoration: 'none'}}>
                            <li>
                                <a href="#">Property2</a>
                            </li>
                            </Link>
                            <Link to={"/property"} style={{textDecoration: 'none'}}>
                            <li>
                                <a href="#">Property3</a>
                            </li>
                            </Link>
                            <Link to={"/property"} style={{textDecoration: 'none'}}>
                            <li>
                                <a href="#">Property4</a>
                            </li>
                            </Link>
                            <Link to={"/property"} style={{textDecoration: 'none'}}>
                            <li>
                                <a href="#">Property5</a>
                            </li>
                            </Link>
                            <Link to={"/property"} style={{textDecoration: 'none'}}>
                            <li>
                                <a href="#">Property6</a>
                            </li>
                            </Link>
                            <Link to={"/property"} style={{textDecoration: 'none'}}>
                            <li>
                                <a href="#">Property7</a>
                            </li>
                            </Link>
                            <Link to={"/property"} style={{textDecoration: 'none'}}>
                            <li>
                                <a href="#">Property8</a>
                            </li>
                            </Link>
                            <Link to={"/property"} style={{textDecoration: 'none'}}>
                            <li>
                                <a href="#">Property9</a>
                            </li>
                            </Link>
                            <Link to={"/property"} style={{textDecoration: 'none'}}>
                            <li>
                                <a href="#">Property10</a>
                            </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SideBar;