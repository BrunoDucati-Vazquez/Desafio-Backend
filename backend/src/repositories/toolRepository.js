import pool from "../config/database.js"

class toolRepository {
    static async getAllTools() {
        const result = await pool.query("select * FROM tools")
        return result.rows;
    }

    static async getToolsByTag(paramTag) {
        
        const result = await pool.query("SELECT * FROM tools WHERE $1 = ANY(tags)", [paramTag]);
        return result.rows;
    }

    static async createTool({ title, link, description, tags }) {
        // Correct query syntax with placeholders $1, $2, $3, $4
        const result = await pool.query(
            "INSERT INTO tools (title, link, description, tags) VALUES ($1, $2, $3, $4) RETURNING *", 
            [title, link, description, tags]
        );
        return result.rows[0]; // Return the created tool
    }
}

export default toolRepository;