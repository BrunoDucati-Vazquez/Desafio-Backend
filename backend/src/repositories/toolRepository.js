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
}

export default toolRepository;