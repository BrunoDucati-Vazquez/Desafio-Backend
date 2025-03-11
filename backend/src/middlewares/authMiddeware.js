import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const verifyToken = (req, res, next) => {
    // Extract and clean up the Authorization header
    const authorizationHeader = req.headers['authorization']?.trim();
    console.log('Authorization Header:', authorizationHeader); // Log header to check it

    // Check if the header starts with 'Bearer' followed by a token
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        return res.status(403).json({ error: 'No token provided or invalid token format' });
    }

    // Extract token from 'Bearer <token>' format
    const token = authorizationHeader.split(' ')[1]; 
    console.log('Extracted Token:', token);  // Log the extracted token

    if (!token) {
        return res.status(403).json({ error: 'No token provided' });
    }

    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid or expired token' });
        }

        // Add decoded user info to request object
        req.user = decoded;

        next();  // Proceed to the next middleware or route handler
    });
};

export default verifyToken;

