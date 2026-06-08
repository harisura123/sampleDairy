import './index.css'

function Reg(){
    return (
        <div className='RegMainContainer1'>
            <img src="/regback.png" alt='im' className='RegSmallimageBackground1'/>
            <img src="/brandLogo.jpeg" alt='im' className='RegSmallimageBackground2'/>
            <div className='RegMainContainer2'>
                <img src="/regback.png" alt='im' className='RegimageBackground'/>
                <form className='RegMainContainer3'>
                    <h1 className='RegStartText1'>𝚂𝚝𝚊𝚛𝚝 𝚈𝚘𝚞𝚛<br/> 𝙳𝚊𝚢 𝙵𝚛𝚎𝚜𝚑</h1>
                    <h1 className='RegStartText2'>𝚂𝚝𝚊𝚛𝚝 𝚈𝚘𝚞𝚛 𝙳𝚊𝚢 𝙵𝚛𝚎𝚜𝚑</h1>
                    
                    <input className='RegInput' placeholder='Enter Name'/>
                    <input className='RegInput' placeholder='Enter PhoneNo'/>
                    <input className='RegInput' placeholder='Enter Email'/>
                    <input className='RegInput' placeholder='Enter Password'/>
                    <div className='RegRememberContainer'>
                        <input type='checkbox'/>
                        <p>Remember me</p>
                    </div>
                    <button className='RegBtn'>𝖲𝗂𝗀𝗇𝖴𝗉</button>
                    <p>Already Have An Account? <span>𝖲𝗂𝗀𝗇𝖨𝗇</span></p>
                </form>
            </div>
        </div>
    )
} 

export default Reg
