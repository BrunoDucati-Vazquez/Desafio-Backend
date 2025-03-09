import pool from "../config/database.js"

class toolRepository {
    static async getAllTools() {
        const result = await pool.query("select * FROM tools")
        return result.rows;
    }
}

export default toolRepository;