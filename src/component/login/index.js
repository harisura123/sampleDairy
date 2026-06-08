import './index.css'

function login(){
    return (
        <div className='LoginMainContainer1'>
            <img src="/brandLogo.jpeg" alt='im' className='LoginSmallimageBackground'/>
            <div className='LoginMainContainer2'>
                <form className='LoginMainContainer3'>
                    <h1>𝚂𝚝𝚊𝚛𝚝 𝚈𝚘𝚞𝚛<br/> 𝙳𝚊𝚢 𝙵𝚛𝚎𝚜𝚑</h1>
                    <input className='LoginInput' placeholder='Enter Name'/>
                    <input className='LoginInput' placeholder='Enter Password'/>
                    <div className='LoginRememberContainer'>
                        <input type='checkbox'/>
                        <p>Remember me</p>
                    </div>
                    <button className='LoginBtn'>𝚂𝚒𝚐𝚗𝙸𝚗</button>
                    <p>Don't Have An Account? <span>SignUp</span></p>
                </form>
                <img src="/regback.png" alt='im' className='LoginimageBackground'/>
            </div>
        </div>
    )
} 

export default login