import User from '../model/userModel.js';

export const create = async (req, res) => {
    try {
        const userData = new User(req.body);
        const { email } = userData;
        const userExits = await User.findOne({ email })

        if (userExits) {
            return res.status(404).json({ msg: "User already registered" });
        }

        if (!userData) {
            res.status(404).json({ msg: "User not exist" });
        }
        const saveData = await userData.save();
        res.status(202).json(saveData);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const getAll = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData) {
            res.status(404).json({ msg: "User not found" })
        }
        res.status(202).json(userData);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const userExits = await User.findById(id);
        if (!userExits) {
            res.status(404).json({ msg: "User not exits" });
        }
        res.status(202).json(userExits);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExits = await User.findById(id);
        if (!userExits) {
            res.status(404).json({ msg: "User not exits" });
        }
        const updateUserData = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(202).json(updateUserData);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        const userExits = await User.findById(id);
        if (!userExits) {
            res.status(404).json({ msg: "User not exits" });
        }
        await User.findByIdAndDelete(id);
        res.status(202).json({ msg: "user Deleted" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
} 