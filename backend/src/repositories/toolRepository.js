import pool from "../config/database.js"

class toolRepository {
    static async getAllTools() {
        const result = await pool.query("select * from tools;");
        return result.rows; // Return the rows directly
    }

    static async getToolsByTag(paramTag) {
        
        const result = await pool.query("SELECT * FROM tools WHERE $1 = ANY(tags)", [paramTag]);
        return result.rows;
    }

    static async createTool({ title, link, description, tags }) {

        const result = await pool.query(
            "INSERT INTO tools (title, link, description, tags) VALUES ($1, $2, $3, $4) RETURNING *", 
            [title, link, description, tags]
        );
        return result.rows[0]; // Return the created tool
    }

    static async deleteTool(id) {
        const result = await pool.query(
            "DELETE FROM tools WHERE id = $1 RETURNING *", [id]
        );
        
        return result.rows[0];  // Returning the deleted tool data
    }
}

export default toolRepository;