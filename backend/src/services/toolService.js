import toolRepository from "../repositories/toolRepository.js";

class toolService {
    static async listAllTools() {
        return await toolRepository.getAllTools();
    }

    static async listToolsByTag(tag) {
        return await toolRepository.getToolsByTag(tag);
    }
}

export default toolService;