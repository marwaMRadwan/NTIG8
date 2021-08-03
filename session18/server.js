// const express = require('express');
// const expressGraphQL = require('express-graphql').graphqlHTTP;
// const { buildSchema } = require('graphql');

// GraphQL Schema
// const schema = buildSchema(` type Query { message: String } `);

// Root resolver
// const root = { message: () => 'hello from graphql' };

// const app = express();

// app.use('/test', expressGraphQL({
//     schema: schema,
//     rootValue: root,
//     graphiql: true
// }));


// app.listen(3000, ()=>{console.log('test');});


// var { graphql, buildSchema } = require('graphql');

// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// var root = { hello: () => 'Hello world!' };

// graphql(schema, '{ hello }', root).then((response) => {
//   console.log(response);
// });



// var express = require('express');
// var { graphqlHTTP } = require('express-graphql');
// var { buildSchema } = require('graphql');

// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// var root = { hello: () => 'Hello world!' };

// var app = express();
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));
// app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));



