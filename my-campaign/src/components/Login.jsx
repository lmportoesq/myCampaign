import { useState } from "react";
import Swal from "sweetalert2";

function Login() {
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleValidate = () => {
        const { email, password } = data;
        const valido = !email.length || !password.length;
        return valido;
    };

    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    }
    const API_URL = 'http://localhost:8080'
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/auth/local/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const { token, profile, id } = await response.json();
            if (response.status === 401) {
                Swal.fire({
                    icon: 'error',
                    title: 'Algo salió mal',
                    text: 'Usuario o contraseña no válida...',
                });
                return;
            }

            if (response.status === 200) {
                localStorage.setItem('token', token);
                localStorage.setItem('profile', profile);
                localStorage.setItem('id', id);

                Swal.fire(
                    'Login exitoso ',
                    'Usuario autenticado corréctamente...!',
                    'success',
                );
                
                if (profile.role === 'owner') {
                    window.location.href = '/home-owner';
                } else if (profile.role === 'admin') {
                    window.location.href = '/home-admin';
                } else {
                    window.location.href = '/home-user';
                }
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='container mx-auto w-[32rem] h-[34rem]'>
            <form className='shadow-lg shadow-blue-900 border-red-300 w-[30rem] h-[28rem] mx-auto mt-12 grid grid-col-1 gap-3 text-center p-5 rounded-lg' onSubmit={handleSubmit}>
                <h1 className='shadow-md '>Login</h1>
                <input className='border rounded border-black p-1 h-12' name="email" type="email" placeholder="Email" onChange={handleChange} />
                <input className='border rounded border-black p-1 h-12' name="password" type="password" placeholder="Password" onChange={handleChange} />
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" disabled={handleValidate()}>Enviar</button>
            </form>
        </div>
    )
}
export default Login;
