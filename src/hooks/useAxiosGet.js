import axios from 'axios';
import { useEffect, useState } from 'react';

const useAxiosGet = (url) => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(url);

                setProjects(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoaded(true);
            }
        })();
    }, [url]);

    return { projects, error, loaded };
};

export default useAxiosGet;
