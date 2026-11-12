
async function getChannels(){
    try{
        const res = await fetch("https://6af5eb63f6270fa08d68de84.mockapi.io/api/channels/");
        // const res = await fetch("../data/channels.json");
        if(!res) throw new Error("Error!!!");
        const data = await res.json();
        // console.log(data);
        let channels = JSON.parse(localStorage.getItem("channels"));
        if(!channels){
            localStorage.setItem("channels", JSON.stringify(data));
            // console.log("Data stored");
        }
    }catch(err){
        console.log("Fetch Error: ", err.message)
    }
}

export {getChannels};


