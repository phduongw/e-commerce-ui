import classNames from "classnames/bind";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

import styles from './Register.module.scss'
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const Register = () => {
    return (
        <div className={cx("container")}>
            <div className={cx("form")}>
                <span className={cx("title")}>MEMBER LOGIN</span>
                <div className={cx("input")}>
                    <i className={cx('wrapper-icon')}>
                        <FontAwesomeIcon icon={faUser} className={cx("icon")}/>
                    </i>
                    <input
                        className={cx("input-element")}
                        type="text"
                        placeholder="Username"
                    />
                </div>

                <div className={cx("input")}>
                    <i className={cx('wrapper-icon')}>
                        <FontAwesomeIcon icon={faLock} className={cx("icon")}/>
                    </i>
                    <input
                        className={cx("input-element")}
                        type="password"
                        placeholder="Password"
                    />
                </div>

                <button className={cx("login-btn", "btn")}>LOGIN</button>
                <p>Forgot Password <a>Click Here</a></p>
                <br />

                <button className={cx("register-btn", "btn")}>REGISTER</button>
            </div>
        </div>
    )
}

export default Register;

