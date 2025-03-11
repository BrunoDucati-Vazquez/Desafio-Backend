import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class authController {
    static generateToken(req, res) {
        try {
          // You can add whatever user data you want to encode into the token.
          const payload = { role: 'admin' };  // Example, you can add user data like { id, role, username }
    
          // Generate token with the payload and JWT secret from .env
          const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    
          // Return the token with Bearer prefix
          return res.status(200).json({ token: `Bearer ${token}` });
        } catch (error) {
          return res.status(500).json({ error: 'Internal server error' });
        }
      }
}

export default authController;
