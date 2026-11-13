
let channels = null

const errMsg = document.getElementById("http-error")

async function getChannels(){
    if(channels != null){
        return channels;
    }
    try{
        const res = await fetch("https://6af5eb63f6270fa08d68de84.mockapi.io/api/channels");
        // const res = await fetch("../data/channels.json");

        if(res.status >= 500){
            errMsg.innerHTML = `<span><i class="fas fa-exclamation-triangle text-[#ff0000f5]"></i> Something went wrong on our end. Please try again </span><i class="fa-solid fa-rotate-right bg-[#ff000052] p-1.5 border-2 border-red-700 rounded cursor-pointer hover:opacity-85"></i>`;
            errMsg.classList.remove("hidden")
            errMsg.classList.add("flex")
            setTimeout(()=>{
                errMsg.classList.add("hidden");
                errMsg.classList.remove("flex")

            }, 10000)
        }
        if(res.status == 404){
            errMsg.innerHTML = `<i class="fas fa-exclamation-triangle text-[#ff0000f5]"></i> Channels are not available currently. You can come back after 24 hours`;
            errMsg.classList.remove("hidden")
            setTimeout(()=>{
                errMsg.classList.add("hidden");
                errMsg.classList.remove("flex")

            }, 4000)

        }
        if(!res) throw new Error("Error!!!");
        const data = await res.json();
        channels = data;

        return channels
    }catch(err){
        if(err instanceof TypeError){
            errMsg.innerHTML = `<span><i class="fas fa-exclamation-triangle text-[#ff0000f5]"></i> Network error: check your internet connection and try again </span><i class="fa-solid fa-rotate-right bg-[#ff000052] p-1.5 border-2 border-red-700 rounded cursor-pointer hover:opacity-85"></i>`;
            errMsg.classList.remove("hidden")
            errMsg.classList.add("flex")

        }else{
            console.log("Fetch Error: ", err.message)
        }
    }
}

export {getChannels};


