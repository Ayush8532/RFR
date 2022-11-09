import './contact.css';

export default function Contact() {
    return (
        <>
            <div className='container1'>
                <div className="c-right">
                    <h1>CONTACT US</h1>
                    <div className="underline"></div>
                    <form >
                        <input className='contact-input' type="text" placeholder='Name' name='user_name' />
                        <input className='contact-input' type="text" placeholder='Subject' name='user_subject' />
                        <input className='contact-input' type="text" placeholder='Email' name='user_email' />
                        <textarea name="message" placeholder='Message' rows="5"></textarea>
                        <div className="container2">
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

