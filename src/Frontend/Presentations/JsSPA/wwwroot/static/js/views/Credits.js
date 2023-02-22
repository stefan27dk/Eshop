// Imports -----------------------------------------------------
import * as Common from "./Common.js"



// VIEW HTML ---------------------------------------------------
export async function getHtmlAsync() {
    return `  
             <p class="subTitleView"> Credits to:</p>
<p>For icons:</p>
<a href="https://www.iconarchive.com"  target="_blank">1. Icoarchive.com</a>
</br>
<a href="https://www.flaticon.com"  target="_blank">2. Flaticon.com</a>

<p>Site Developer </p>
                  `;
}




// View Script -------------------------------------------------
export async function executeViewScriptAsync() {
    Common.setTitle("CREDITS");
}



