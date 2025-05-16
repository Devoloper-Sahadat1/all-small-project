//this file for header section

function Header(){

    return(
        <div>
            {/* nave start  */}
            <div>
            <ul className="customNav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Servies</a></li>
                <li><a href="#">Contact me</a></li>
            </ul>
            </div>
            {/* nav end */}
           {/* home section strat */}
           <section className="homesection">
            <div>
                <h1>
                Hi! I am Sahadat Hossen.
                </h1>
                <h3>I am a profetional web devoloper both in frontend and backened </h3>
            </div>
            <div>
                <img src="Sahadat.jpg"></img>
            </div>
           </section>
        </div>
    )
}
export default Header