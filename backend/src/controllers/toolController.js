import toolService from "../services/toolService.js";

class toolController {

    /**
     * @swagger
     * /tools:
     *   get:
     *     summary: List all tools or filter by tag
     *     parameters:
     *       - in: query
     *         name: tag
     *         schema:
     *           type: string
     *         description: Filter tools by tag
     *     responses:
     *       200:
     *         description: A list of tools
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: "#/components/schemas/Tool"
     *       500:
     *         description: Server error
     */
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
    /**
     * @swagger
     * /tools:
     *   post:
     *     summary: Create a new tool
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: "#/components/schemas/Tool"
     *     responses:
     *       201:
     *         description: Tool created successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: "#/components/schemas/Tool"
     *       400:
     *         description: Bad request (missing fields)
     *       500:
     *         description: Server error
     */
    static async createTool(req, res) {
        try {
            const tool = req.body;
            const createdTool = await toolService.createTool(tool); // Correctly await the service method
            return res.status(201).json(createdTool); // Return created tool with 201 status
        } catch (error) {
            res.status(400).json({ error: error.message }); // Send error message if something goes wrong
        }
    }

    static async deleteTool(req, res) {
        try {
            const { id } = req.params;
            const deletedTool = await toolService.deleteTool(id);
            if (!deletedTool) {
                return res.status(404).json({ error: "Tool not found" });
            }
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: "Failed to delete tool", details: error.message });
        }
    }

    static async deleteTool(req, res) {
        const { id } = req.params;  // Extract `id` from the URL

        try {
            const deletedTool = await toolService.deleteTool(id);
            if (deletedTool) {
                return res.status(200).json({});
            } else {
                return res.status(404).json({ message: 'Tool not found' });
            }
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}

export default toolController;