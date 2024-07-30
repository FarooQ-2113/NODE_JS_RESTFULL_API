const { findById } = require("../models/productModel");
const { param } = require("../server");

let items = []; // In-memory data store
let nextId = 1; // Simple ID counter

// Create (POST)
exports.createItem = (req, res) => {
    try {
        
        
        //  write logic to add to the array
        const newItem = req.body;
        newItem.id = nextId++;
        items.push(newItem);

        res.status(201).json(newItem);



    } catch (error) {
        res.status(400).json({ message: 'Error creating item', error });
    }
};

// Read/View (GET)
exports.getItems = (req, res) => {
    try {
       

        // write logic to return all item
        res.status(200).json(items);




        
    } catch (error) {
        res.status(500).json({ message: 'Error fetching items', error });
    }
};

// Get by ID (GET)
exports.getItemById = async (req, res) => {
    try {
        // write items to find and return matched item
        // const item = await Items.findById(req.params.id);
        // if(item){
        // res.status(200).json(item);
        // }
        // res.status(404).json({ message: 'Item not found' });
        const item = items.find(item => item.id === parseInt(req.params.id));
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching item', error });
    }
};

// Update (PUT)
exports.updateItem = (req, res) => {
    try {
        

        // write content to update the items based on id
        const index = items.findIndex(item => item.id === parseInt(req.params.id));
        if (index === -1) {
            return res.status(404).json({ message: 'Item not found' });
        }
        items[index] = { ...items[index], ...req.body };
            


        res.status(200).json(items[index]);
    } catch (error) {
        res.status(400).json({ message: 'Error updating item', error });
    }
};

// Delete (DELETE)
exports.deleteItem = (req, res) => {
    try {
        // write content to delete the item
        const index = items.findIndex(item => item.id === parseInt(req.params.id));
        if (index === -1) {
            return res.status(404).json({ message: 'Item not found' });
        }

        items.splice(index, 1);

        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item', error });
    }
};
