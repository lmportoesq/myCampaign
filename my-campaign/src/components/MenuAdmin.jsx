function MenuAdmin() {
    function handleClick(){
        window.location.href = '/create-campaign';
    }
    function handleClickLeader(){
        window.location.href = '/create-user'
    }
    function handleClickListLeaders(){
        window.location.href = '/query-leader'
    }
    function handleClickListFollowers(){
        window.location.href = '/query-followers'
    }
    function handleClickLogout(){
        localStorage.removeItem('token');
        window.location.href = '/';
    }
    return (
        <div className="bg-gray-200 text-right mx-auto">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClick} >Datos de la campaña</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClickLeader}>Ingresar líderes</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit">Poblaciones</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClickListLeaders}>Listar líderes</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClickListFollowers}>Listar seguidores</button>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded p-2 m-2" type="submit" onClick={handleClickLogout}>Salir</button>
        </div>
    )
}
export default MenuAdmin;
