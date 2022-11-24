import { iSkill } from "../../types/index";
import NodeJs from "../../components/svg/nodejs";
import NextJs from "../../components/svg/nextjs";
import ReactJs from "../../components/svg/reactjs";
import TypeScript from "../../components/svg/typescript";
import Javascript from "../../components/svg/javascript";
import HTML from "../../components/svg/html";
import CSS from "../../components/svg/css";
import Sass from "../../components/svg/sass";
import ExpressJs from "../../components/svg/expressjs";
import FastifyJs from "../../components/svg/fastifyJs";
import SequelizeJs from "../../components/svg/sequelize";
import TypeOrm from "../../components/svg/typeOrm";
import Postgress from "../../components/svg/postgress";
import MySql from "../../components/svg/mySql";
import GraphQl from "../../components/svg/graphql";
import Redux from "../../components/svg/redux";

export const SKILLS: iSkill[] = [
  {
    icon: NodeJs,
    title: "NodeJs",
    description:
      "Node.js is an open-source server environment and is cross-platform. Node.js is a back-end JavaScript runtime environment. Node.js runs on the V8 JavaScript Engine and executes JavaScript code outside a web browser.",
  },
  {
    icon: Javascript,
    title: "Javascript",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",
  },

  {
    icon: TypeScript,
    title: "Typescript",
    description:
      "TypeScript is a free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.",
  },
  {
    icon: ReactJs,
    title: "React",
    description:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
  },
  {
    icon: Redux,
    title: "Redux",
    description:
      "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.",
  },

  {
    icon: NextJs,
    title: "NextJs",
    description:
      "Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.",
  },
  {
    icon: ExpressJs,
    title: "Express",
    description:
      "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.",
  },
  {
    icon: FastifyJs,
    title: "Fastify",
    description:
      "Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture, inspired by Hapi and Express. As far as we know, it is one of the fastest web frameworks in town.",
  },
  {
    icon: GraphQl,
    title: "GraphQL",
    description:
      "GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.",
  },
  {
    icon: Postgress,
    title: "PostgreSQL",
    description:
      "PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads",
  },
  {
    icon: MySql,
    title: "MySql",
    description:
      "MySQL, the most popular Open Source SQL database management system, is developed, distributed, and supported by Oracle Corporation.",
  },
  {
    icon: SequelizeJs,
    title: "Sequelize",
    description:
      "Sequelize is a Node. js-based Object Relational Mapper that makes it easy to work with MySQL, MariaDB, SQLite, PostgreSQL databases, and more. An Object Relational Mapper performs functions like handling database records by representing the data as objects.",
  },
  {
    icon: TypeOrm,
    title: "TypeORM",
    description:
      "TypeORM is a TypeScript ORM (object-relational mapper) library that makes it easy to link your TypeScript application up to a relational database. TypeORM supports MySQL, SQlite, Postgres, MS SQL Server, and a host of other traditional options.",
  },
  {
    icon: HTML,
    title: "HTML",
    description:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
  },
  {
    icon: CSS,
    title: "CSS",
    description:
      "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
  },
  {
    icon: Sass,
    title: "SASS",
    description:
      "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, called 'the indented syntax,' uses a syntax similar to Haml.",
  },
];
