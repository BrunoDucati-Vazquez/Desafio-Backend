import toolRepository from "../repositories/toolRepository.js";

class toolService {
    static async listAllTools() {
        return await toolRepository.getAllTools();
    }
}

export default toolService;