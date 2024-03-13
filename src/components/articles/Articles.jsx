import React from 'react';

// graphql
import { useQuery } from '@apollo/client';
import { GET_ARTICLE_INFO } from '../../graphql/queries';

const Articles = () => {
    const {loading,data,error} = useQuery(GET_ARTICLE_INFO);
    console.log({loading,data});
    return (
        <div>
            
        </div>
    );
};

export default Articles;