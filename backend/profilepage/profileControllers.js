import { User } from '../models/user.js';
export const getUserController = async (req, res) => { 
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);

        if (user) {
            const { username, email } = user;
            return res.json({ username, email });
        }
        
        return res.status(201).json('Successfully found user!')
    }
        catch (err) {
        console.error('Error adding goal', err);
      return res.status(400).json((400, "Failed to add goal"));
    }
  }

  