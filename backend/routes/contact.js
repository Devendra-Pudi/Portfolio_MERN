const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Submit contact form
router.post('/', async (req, res) => {
  try {
    console.log('Received contact form submission:', req.body);
    const { name, email, subject, message } = req.body;
    
    // Validation
    if (!name || !email || !subject || !message) {
      console.log('Validation failed:', { name, email, subject, message });
      return res.status(400).json({ 
        message: 'All fields are required',
        missingFields: {
          name: !name,
          email: !email,
          subject: !subject,
          message: !message
        }
      });
    }
    
    const contact = new Contact({
      name,
      email,
      subject,
      message
    });
    
    console.log('Attempting to save contact:', contact);
    const savedContact = await contact.save();
    console.log('Contact saved successfully:', savedContact);
    
    res.status(201).json({
      message: 'Message sent successfully!',
      contact: savedContact
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      message: 'Failed to save contact message',
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

// Get all contacts (Admin only)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ 
      message: 'Failed to fetch contacts',
      error: error.message 
    });
  }
});

// Update contact status (Admin only)
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    
    res.json(contact);
  } catch (error) {
    console.error('Error updating contact status:', error);
    res.status(500).json({ 
      message: 'Failed to update contact status',
      error: error.message 
    });
  }
});

module.exports = router;
