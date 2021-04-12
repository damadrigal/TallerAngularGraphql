import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import{buildSchema} from 'type-graphql'
import { ProductResolver } from './resolvers/Product/ProductResolver';

export async function startServer(){

    const app = express();

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers:[ProductResolver]
        })
    })
    
    server.applyMiddleware({app,path:'/graphql'});

    return app;
}
