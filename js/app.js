import { getChannels } from "../services/api.js";
import { filterChannels } from "./filter.js";
import { searchChannels } from "./search.js";
import { showChannelInfo, showChannels, someClickEvents } from "./ui.js";

// const channels = await getChannels();

// console.log(channels)

getChannels();

showChannels(await getChannels());

searchChannels();

filterChannels();

showChannelInfo(await getChannels());

someClickEvents();