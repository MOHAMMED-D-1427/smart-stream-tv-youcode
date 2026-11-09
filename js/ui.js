
const channels = JSON.parse(localStorage.getItem("channels"));

const chansContainer = document.querySelector("#channels");


function showChannels(){
    channels.forEach(ch =>{
        chansContainer.innerHTML += `
        <tr class="border-b border-gray-900 px-1 chan-hover" data-id="${ch.id}">
            <td>&nbsp; ${ch.channelNumber}</td><td><img src="${ch.logo}" alt="Channel Logo" class="w-12.75"></td><td>${ch.name}</td>
        </tr>
        `
    })
}


export {showChannels}