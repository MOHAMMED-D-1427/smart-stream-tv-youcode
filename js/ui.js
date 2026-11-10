
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

// Category	Channels
// SPORT	21
// CINEMA	17
// INFO	14
// DIVERTISSEMENT	13
// DOCUMENTAIRE	11
// ENFANTS	9
// SERIES	9
// CULTURE	5
// RELIGION	1

export {showChannels}