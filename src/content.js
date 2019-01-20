import * as Screens from './Screens';

export default function Content(state){
    return html`
<div id="content">
        <div class="container">
           ${Screens[state.active]()} 
        </div>
    </div>

`;
}