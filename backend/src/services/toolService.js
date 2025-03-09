import toolRepository from "../repositories/toolRepository.js";

class toolService {
    static async listAllTools() {
        return await toolRepository.getAllTools();
    }

    static async listToolsByTag(tag) {
        return await toolRepository.getToolsByTag(tag);
    }

    static async createTool(data) {
        return await toolRepository.createTool(data);
    }

    static async deleteTool(id) {
        return await toolRepository.deleteTool(id);  
    }
}

export default toolService;