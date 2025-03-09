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

    static async createTool(req, res) {
        try {
            const tool = req.body;
            const createdTool = await toolService.createTool(tool); // Correctly await the service method
            return res.status(201).json(createdTool); // Return created tool with 201 status
        } catch (error) {
            res.status(400).json({ error: error.message }); // Send error message if something goes wrong
        }
    }
}

export default toolController;  // Make sure to export the controller correctly