import User from "../models/user.js";

// Retrieve profile data
export const getProfile = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { username, profilePicture } = req.user;
    res.json({ username, profilePicture });
  } catch (error) {
    console.error("Error retrieving profile:", error);
    res.status(500).json({ error: "Failed to retrieve profile" });
  }
};

// Update profile picture
export const updateProfilePicture = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const filePath = `/uploads/${req.file.filename}`; // Path to the uploaded file
    await User.update({ profilePicture: filePath }, { where: { id: req.user.id } });

    res.json({ message: "Profile picture updated successfully!", profilePicture: filePath });
  } catch (error) {
    console.error("Error updating profile picture:", error);
    res.status(500).json({ error: "Failed to update profile picture" });
  }
};
