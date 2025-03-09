import toolService from "../services/toolService.js";

class toolController {
    static async listTools(req, res) {
        try {
            const tag = req.query.tag;  // Access the query parameter `tag`
            let allTools;

            if (tag) {
                // If a tag is provided, filter tools by tag
                allTools = await toolService.listToolsByTag(tag);
            } else {
                // If no tag is provided, return all tools
                allTools = await toolService.listAllTools();
            }

            return res.status(200).json(allTools);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default toolController;  // Make sure to export the controller correctly