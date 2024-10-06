// pages/api/create.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, bio, social1, social2, social3, slashEnding } = req.body;
        
        // Handle the picture file upload logic here if needed (using FormData or a similar method)
        
        // You can store the data in a database or perform other actions here
        
        return res.status(200).json({ message: 'Form submitted successfully', data: { name, bio, social1, social2, social3, slashEnding } });
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
