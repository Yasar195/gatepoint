import { FaUserAlt } from 'react-icons/fa';
import axios from 'axios';
import { useEffect } from 'react/cjs/react.production.min';

const Login = () => {

    const login = () => {
        axios({
            method: 'post',
            url: 'http://localhost:8000/users/login/',
            data: {
                'username': document.getElementById('name').textContent,
                'password': document.getElementById('psd').textContent
            }
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }


    return (
        <div className="outer">
            <div className="login">
                <div id="avatar">
                    <FaUserAlt size="2rem" color="#002F87" />
                </div>
                <form onSubmit={() => login()}>
                    <div className="input-field">
                        <input id="name" type="text" className="name" required />
                        <label htmlFor="name">Your name</label>
                    </div>
                    <div className="input-field">
                        <input id="psd" type="password" className="name" required />
                        <label htmlFor="name">Your password</label>
                    </div>
                    <div className="input-field">
                        <input id="input" type="submit" />
                    </div>
                </form>
                <p>New to gate point? You can sign up <span>here</span></p>
            </div>
            <style jsx>{`
                span{
                    color: blue;
                    font-size: 0.9rem;
                }

                #avatar{
                    width: 100%;
                    heigth: 10%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                form{
                    width: 100%;
                    height: 80%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                }

                .input-field {
                    position: relative;
                }
                  
                label {
                    position: absolute;
                    top: 0.8rem;
                    left: 0;
                    width: 100%;
                    color: #d3d3d3;
                    transition: 0.2s all;
                    cursor: text;
                    font-size: 0.8rem;
                }
                  
                .name {
                    width: 100%;
                    border: 0;
                    outline: 0;
                    padding: 0.5rem 0;
                    border-bottom: 2px solid #d3d3d3;
                    box-shadow: none;
                    color: white;
                  }

                .name:invalid {
                    outline: 0;
                }
                  
                .name:focus,
                .name:valid {
                    border-color: #002F87;
                }
                  
                .name:focus~label,
                .name:valid~label {
                    font-size: 0.4rem;
                    top: -0.3rem;
                    color: #002F87;
                }

                #input{
                    padding: 2%;
                    border-radius: 1rem;
                    color: white;
                    outline: none;
                    background-color: #002F87;
                    border: none;
                    font-size: 0.8rem;
                }

                p{
                    font-size: 0.6rem;
                }
                  
                .outer{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .login{
                    padding: 4%;
                    width: 80%;
                    height: 80%;
                    border-radius: 0.2rem;
                    color: white;
                    box-shadow: 3px 3px 30px black;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    border-radius: 0.5rem;j
                }
            `}</style>
        </div>
    )
}

export default Login;