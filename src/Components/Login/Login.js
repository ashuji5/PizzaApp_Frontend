import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import '../Login/Login.css';
import {Link, useHistory} from 'react-router-dom';
import {signin} from '../../redux/Shopping/authaction';

const Login = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const inState = {name : "", email : "", password: ""};
    const[formData, setformData] = useState(inState);

    const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signin(formData, history));

    
    }

    const handleChange = (e) => {
        setformData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <>
            <div className="register">
                <div className="card col-12 col-lg-4 login-card mt-2 hv-center container login-box">
                    <form className ="login-form" onSubmit = {handleSubmit}>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputPassword1">Name</label>
                            <input type="text"
                                name = "name"
                                onChange = {handleChange}
                                className="form-control"
                                id="name"
                                placeholder="Enter Name"
                            />
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputEmail1">E mail</label>
                            <input type="email"
                                name = "email"
                                onChange = {handleChange}
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter E-mail"
                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password"
                                name = "password"
                                onChange = {handleChange}
                                className="form-control"
                                id="password"
                                placeholder="********"
                            />
                        </div>
                       
                        <div className="register-btn">
                            <button
                                type="submit"
                                className="btn btn-get-started"
                            >
                                Login
                </button>
                <Link  style={{ textDecoration: 'none' }} to ="/register">
                            <p>Don't have an account ?</p>
                            </Link>
                        </div>
                    </form>
                    <p className="rights">@2021 Ashu Corp. All rights reserved.</p>
                </div>
                

            </div>

        </>
    )
}

export default Login;