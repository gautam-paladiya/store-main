function Navbar(props){
    return(
        <div className='py-2 px-5 shadow-lg'>
                <div className='row justify-content-between align-items-center mt-2'>
                    <div className='d-flex'>
                        <img src='/assets/images/navbar-logo-1.png' style={{ height: '40px' }}></img>
                        <img src='/assets/images/navbar-logo.png' style={{ height: '40px' }}></img>
                    </div>
                    <div className="dropdown ">
                        <button className="btn dropdown-toggle custom-dropdown border border-white"
                        >
                            <img src='/assets/images/dummy-image.png' height='50px' width='50px'></img>
                            Hello Vishal
                        </button>

                    </div>
                </div>
                <div className='row mt-3'>
                    <button className='btn'>
                        <img src='/assets/images/icon_dashboard.png'className='mr-2'></img>
                        Dashboard
                    </button>
                    <button className='btn pr-5' style={{
                        backgroundColor: '#fd660121',
                        color:'#FD6401'
                    }}>
                        <img src={props.icon}

                            className='mr-2'></img>
                        {props.name}
                    </button>
                </div>

            </div>
    )
}

export default Navbar