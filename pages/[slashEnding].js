import fs from 'fs';
import path from 'path';

export default function BioPage({ bioData }) {
    if (!bioData) {
        return <h1>Bio not found</h1>;
    }

    return (
        <div style={{ color: 'white', backgroundColor: 'black', padding: '20px' }}>
            <h1>{bioData.name}'s Bio</h1>
            <p>{bioData.bio}</p>
            <h3>Social Links:</h3>
            <ul>
                {bioData.social1 && <li><a href={bioData.social1} target="_blank">{bioData.social1}</a></li>}
                {bioData.social2 && <li><a href={bioData.social2} target="_blank">{bioData.social2}</a></li>}
                {bioData.social3 && <li><a href={bioData.social3} target="_blank">{bioData.social3}</a></li>}
            </ul>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { slashEnding } = context.params;
    
    const filePath = path.join(process.cwd(), 'data', `${slashEnding}.json`);
    
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const bioData = JSON.parse(fileContents);
        return { props: { bioData } };
    } catch (err) {
        // If the file is not found, return bioData as null
        return { props: { bioData: null } };
    }
}
