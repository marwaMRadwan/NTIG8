var express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
var { buildSchema } = require('graphql');

const schema = buildSchema(`
type Query {
    course(id:Int) :Course
    courses(title:String): [Course]
},
type Course{
    id: Int
    title:String
    con:String
}`
)

const data = [
    {id:1, title:"title 1", con:'10'},
    {id:2, title:"title 2", con: "123"},
    {id:3, title:"title 1", con:"23"},
    {id:4, title:"title 4"},
    {id:5, title:"title 5"},
    {id:6, title:"title 1"},
    {id:7, title:"title 7"},
    {id:8, title:"title 8"}
]

getSingleCourse = function(args){
    id = args.id
    return data.find(c=> c.id==id)
    
}

getCoursesByTitle = function(args){
    console.log(args)
    if(args.title){
        return data.filter(c=> c.title == args.title)
    }
    else return data
}

const root = {
    course: getSingleCourse,
    courses: getCoursesByTitle
}
var app = express();

app.use('/graphql', expressGraphQL({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));









