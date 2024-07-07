import Logo from "@/assets/logo.png"



const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo} />
                <p className="my-5">
                Choose to learn one-on-one with an expert instructor to receive guidance and feedback. Whether you work on your own or with help, you can go as deep into a topic as you want and start and stop anytime.
                </p>
                <p>© Evogym All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Have a look at some of our favorite courses</p>
                <p className="my-5">Start Your Free 3-Week Trial</p>
                <p></p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Image Use Policy</p>
                <p>(333)430-5309</p>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer