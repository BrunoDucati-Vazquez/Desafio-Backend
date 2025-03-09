import toolService from "../services/toolService.js";

class toolController {
    static async listAllTools(req, res) {
        try {
            const allTools = await toolService.listAllTools(req.body);
            return res.status(200).json(allTools);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }

    }
}

export default toolController;