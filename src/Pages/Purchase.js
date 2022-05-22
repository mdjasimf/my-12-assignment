import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [tool, setTool] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/tools/${id}`
        fetch(url)
            .then(response => response.json())
            .then(data => setTool(data));
    }, [id])
    return (
        <div>
            <h1>{tool.name}</h1>
        </div>
    );
};

export default Purchase;