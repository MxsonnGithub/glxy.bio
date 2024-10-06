import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, bio, social1, social2, social3, slashEnding } = req.body;

        // Build the path to the bio.json file
        const filePath = path.join(process.cwd(), 'data', `${slashEnding}.json`);
        
        // Create the bio data
        const bioData = { name, bio, social1, social2, social3 };

        // Write the bio data to a JSON file with the slashEnding as the filename
        fs.writeFileSync(filePath, JSON.stringify(bioData));

        // Redirect to the newly created bio page
        return res.redirect(302, `/${slashEnding}`);
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
