import React from 'react';

const Blogs = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Difference between SQL and NoSQL
                </div>
                <div className="collapse-content">
                    <p>


                        The use of SQL programming to insert, search, update, and delete database records is effective.
                        That does not imply that SQL is limited to those tasks. It is capable of many things, including, but not limited to, database management and optimization.
                        SQL is a language used by relational databases like MySQL, Oracle, MS SQL Server, Sybase, etc.
                        NoSQL is a non-relational DMS that is simple to grow, does not require a set schema, and avoids joins. Distributed data stores with enormous data storage requirements employ NoSQL databases. Big data and real-time web applications employ NoSQL. For instance, businesses like Twitter, Facebook, and Google daily acquire gigabytes of consumer data.
                        NoSQL stands for "Not Only SQL" or "Not SQL" in a database. Although NoREL NoSQL caught on would be a better description. The NoSQL idea was first proposed by Carl Strozz in 1998.
                        Traditional RDBMS store and retrieve data for further analysis using SQL syntax. An alternative is a NoSQL database system, which combines a number of different database systems and may hold data that is polymorphic, semi-structured, structured, and unstructured.
                        NoSQL is a Non-relational or Distributed Database, whereas SQL, pronounced "S-Q-L" or "See-Quel," is more often known as an RDBMS or Relational Database System.
                        In contrast to NoSQL databases, which can also be document-based, key-value pair-based, or graph-based, SQL databases are table-based.While NoSQL databases scale horizontally, SQL databases scale vertically.
                        While NoSQL databases use a dynamic schema for unstructured data, SQL databases have a preset schema.
                        When comparing the performance of SQL vs NoSQL, SQL requires specialized database hardware while NoSQL uses standard hardware.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p>
                        JWT, or JSON Web Token, is an open standard that allows a client and a server to exchange security-related data. Every JWT has a set of encoded JSON objects, including claims. To ensure that the claims cannot be changed after the token is issued, JWTs are signed using a cryptographic technique.
                        JSON, which stands for JavaScript Object Notation in the language of beginning developers, is a text-based method for transferring data across web applications. Both computers and developers can easily access the information it contains. Any computer language can utilize it as a data format, and it is gradually overtaking XML as the preferred syntax for APIs.
                        How Do Tokens Work?After learning about JSON as a data text format, you might be curious about How do tokens work? A token, to put it simply, is a string of data that stands in for another item, like an identity. A non-JWT based token for authentication is a string of characters that enables the recipient to confirm the sender's identity. The key distinction in this case is the characters' absence of internal meaning.
                        JWTs are unique among web tokens in that they include a list of claims. Information is sent between two parties through claims. The specific use case will determine what these assertions are.A claim might specify, for instance, who issued the token, how long it is valid, or what authorizations the client has received.
                        Three sections of a string called a JWT are separated by dots (.) and serialized with base64. The JWT appears something like this in compact serialization, the most used serialization format: xxxxx.yyyyy.zzzzz.
                        The type of token, in this example a JWT, and the signing technique are both contained in the JOSE (JSON Object Signing and Encryption) header.
                        The assertions are in the payload. To keep the JWT small, this is shown as a JSON string that typically only has a dozen fields. The typical usage of this data by theserver to confirm that the user is authorized to carry out the action they are asking for.
                        For a JWT, there are no required claims, although any overlaying standards may require claims. For instance, iss, sub, aud, and exp are required when utilizing JWT as the bearer access token in OAuth2.0. Others are more typical than others.
                        The token can't have been changed, thanks to the signature. With a secret that is known to both the issuer and the receiver, or with a private key that is known only to the sender, the party that creates the JWT signs the header and payload. The receiving party checks that the header and payload match the signature before using the token.
                        JWTs are frequently used as OAuth bearer tokens.In this illustration, a client requests that an authorization server issue a JWT, and the server signs it to prevent outside interference. This JWT will then be included in the request that the client sends to a REST API. The JWT's validity will be determined by the REST API by comparing the signature to the payload and header. After the JWT has been validated, the REST API can use the claims to approve or reject the client's request.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p>

                        1. NodeJS: NodeJS is a free, open-source Javascript runtime environment that enables server-side execution of Javascript. Javascript code can execute outside of a browser thanks to Node.js. Node.js has a large number of modules and is primarily used for web development.
                        2. JavaScript: A scripting language, JavaScript. The most common abbreviation is JS. One may say that Javascript is the ECMA script that has been updated. Although it is built on prototype inheritance, Javascript is a high-level programming language that makes use of the Oops idea.
                        JavaScript is a computer language that is used to create scripts for websites. It differs from Node.js in this regard.With the aid of NodeJS, Javascript may be executed outside of the browser.
                        3.Essentially, it is utilized client-side.
                        The server side is where it is primarily employed.
                        4.Javascript is competent enough to interact with the DOM and add HTML.
                        There is no way to add HTML tags using Node.js.
                        5. Any browser engine, such as JS core in Safari and Spidermonkey in Firefox, may run Javascript.
                        The Javascript engine of node.js called V8 parses and executes Javascript.
                        6. Front-end development employs Javascript.
                        In server-side development, Nodejs is utilized.
                        7. RamdaJS, TypedJS, and other javascript frameworks are a few examples.
                        Lodash, express, and other Node.js modules are a few. Importing these modules from npm is required.
                        8.The improved version.It employs the C++-written V8 engine from Chrome, which is an updated version of ECMA script. Javascript, C, and C++ are used to create Node.js.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p>
                        NodeJS applications are single-threaded, as we all know. The fact that NodeJS event loops are exclusively single-threaded does not imply that a request that arrives after request A must wait 10 seconds before processing can begin, for example. NodeJS's architecture as a whole is not single-threaded.
                        How does NodeJS deal with numerous client requests?
                        Numerous client requests are received by NodeJS, which adds them to EventQueue. The event-driven architecture approach was used in the construction of NodeJS. The EventLoop in NodeJS is an infinite loop that accepts and processes requests. The EventQueue's listener is the EventLoop.
                        The event loop would execute the request itself and deliver the response back to the client if NodeJS can do so without I/O blocking.itself. However, you can handle numerous requests concurrently by utilizing the worker threads or NodeJS cluster modules.
                        Node.js runs in a single thread with a single instance. You can use each core if your computer has several cores. To utilize the multi-core system, developers may want to start a cluster of NodeJS processes.
                        Child processes can be easily created using the cluster module and they can all use the same server ports.
                        Explanation: Eight CPUs will result in the creation of eight NodeJS instances, each with a separate independent event loop. NodeJS can now handle all requests in parallel.
                        All of them share the same port (PORT 3000), but not the same state. The master process receives new connections, listens on a port, and distributesWith some built-in intelligence to prevent overtaxing a worker process, they are distributed across the workers in a round-robin method.
                        GEEKSFORGEEKS
                        How can I use Node.js to run multiple HTTP requests in parallel?
                        NodeJS applications are single-threaded, as we all know. The fact that NodeJS event loops are exclusively single-threaded does not imply that a request that arrives after request A must wait 10 seconds before processing can begin, for example. NodeJS's architecture as a whole is not single-threaded.
                        Numerous client requests are received by NodeJS, which adds them to EventQueue. The event-driven architecture approach was used in the construction of NodeJS. The EventLoop in NodeJS is an infinite loop that accepts and processes requests. The listener for the event loop isEventQueue.
                        The event loop would handle the request itself and send the response back to the client by itself if NodeJS can process the request without I/O blocking. However, you can handle numerous requests concurrently by utilizing the worker threads or NodeJS cluster modules.
                        Node.js runs in a single thread with a single instance. You can use each core if your computer has several cores. To utilize the multi-core system, developers may want to start a cluster of NodeJS processes.
                        Child processes can be easily created using the cluster module and they can all use the same server ports.
                        Create a NodeJS application in the first step, then add the necessary Express.js module.
                        cd and mkdir Projectnpm init -y npm I express for the project
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;