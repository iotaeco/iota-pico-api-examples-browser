"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const nodeClient_1 = require("@iota-pico/api/dist/client/nodeClient");
const errorHelper_1 = require("@iota-pico/core/dist/helpers/errorHelper");
const networkConfig = __importStar(require("../networkConfig"));
/**
 * Example of API addNeighbors.
 */
async function addNeighborsExample(neighbor) {
    const networkEndPoint = networkConfig.getEndPoint();
    const networkClient = networkConfig.getNetworkClient(networkEndPoint);
    const nodeClient = new nodeClient_1.NodeClient(networkClient, "1", networkConfig.getAdditionalHeaders());
    console.log(`==> Performing addNeighbors on ${networkEndPoint.getUri()}`);
    console.log();
    try {
        const response = await nodeClient.addNeighbors({ uris: [neighbor] });
        console.log("<== Success");
        console.log();
        console.log(`\tNeighbours Added: ${response.addedNeighbors}`);
        console.log();
    }
    catch (err) {
        console.error("<== Failed");
        console.error();
        console.error(errorHelper_1.ErrorHelper.format(err, true));
    }
}
exports.addNeighborsExample = addNeighborsExample;
