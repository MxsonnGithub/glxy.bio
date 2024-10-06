export default async function handler(req, res) {
    const { name, bio, social1, social2, social3, slashEnding } = req.body;

    // Save form data, potentially to a database
    const pageData = { name, bio, social1, social2, social3 };

    // Redirect to the newly created page with the custom path
    res.redirect(`/${slashEnding}`);
}
