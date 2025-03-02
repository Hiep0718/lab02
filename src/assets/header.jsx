export function Header() {
    return(
        <>
        <div class="header" id="header">
            <div id="div_logo">
            <img src="./src/image/chefify.png" alt="#"></img>
            <input type="text" placeholder="cakecaska"></input>
        </div>
        <ul id="menu">
        <li><a href="#">What to cook</a></li>
        <li><a href="#">Recipes</a></li>
        <li><a href="#">Ingrestients</a></li>
        <li><a href="#">Occasions</a></li>
        <li><a href="#">AboutUS</a></li>
        </ul>
        <div id="div_setting">
            <div id="setting">
                <img src="./src/image/check.png" alt=""></img>
                <p>Your Recipe Box</p>
            </div>
            <img src="./src/image/avatar.png" alt="#"></img>
        </div>
  </div>  
        </>
    );
}