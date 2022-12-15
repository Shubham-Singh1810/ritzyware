import React from 'react'

function Footer() {
  return (
    <>
    <footer>
        <div>
            <h6>About Us</h6><hr />
            <p>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Consequatur incidunt <br />
             facere quo aliquid ipsam dolores autem <br /> esse iste tempore distinctio.</p>
        </div>
        <div>
            <h6>Contact Us</h6><hr />
            <p><b>Address</b> : 53/A, 16th C MainRd,4th Block Koramangala,Bengaluru, Karnataka,560034</p>
            <p><b>Contact No.</b>9876543210</p>
            <p><b>Email</b> : abc@gmail.com</p>
        </div>
        <div>
            <h6>Important Links</h6><hr />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Porfolio</li>
                <li>Services</li>
            </ul>
        </div>
    </footer>
    <p style={{background:"black", color:"white", padding:"10px", textAlign:"center" }}>© 2022 All Rights Reserved.</p>
    </>
  )
}

export default Footer