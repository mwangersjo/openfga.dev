"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[1489],{6368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),o=(n(67294),n(3905)),r=n(80450);const i={title:"Setup OpenFGA Server",description:"Setup the OpenFGA server",sidebar_position:1,slug:"/getting-started/setup-openfga"},p="Setup OpenFGA Server",l={unversionedId:"content/getting-started/setup-openfga",id:"content/getting-started/setup-openfga",title:"Setup OpenFGA Server",description:"Setup the OpenFGA server",source:"@site/docs/content/getting-started/setup-openfga.mdx",sourceDirName:"content/getting-started",slug:"/getting-started/setup-openfga",permalink:"/docs/getting-started/setup-openfga",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/setup-openfga.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Setup OpenFGA Server",description:"Setup the OpenFGA server",sidebar_position:1,slug:"/getting-started/setup-openfga"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Install SDK Client",permalink:"/docs/getting-started/install-sdk"}},s={},u=[{value:"Step By Step",id:"step-by-step",level:2},{value:"Configuring The Server",id:"configuring-the-server",level:2},{value:"Configuring Data Storage",id:"configuring-data-storage",level:3},{value:"Postgres",id:"postgres",level:4},{value:"Configuring Authentication",id:"configuring-authentication",level:3},{value:"Playground",id:"playground",level:3},{value:"Profiler (pprof)",id:"profiler-pprof",level:3},{value:"Production Recommendations",id:"production-recommendations",level:2}],g={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-openfga-server"},"Setup OpenFGA Server"),(0,o.kt)(r.AH,{mdxType:"DocumentationNotice"}),(0,o.kt)("p",null,"This article explains how to start your own OpenFGA server using Docker, and how to configure it."),(0,o.kt)("h2",{id:"step-by-step"},"Step By Step"),(0,o.kt)("p",null,"If you want to run OpenFGA locally as a Docker container, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Install Docker")," if Docker was not already installed."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"docker pull openfga/openfga")," to get the latest docker image."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"docker run -p 8080:8080 -p 8081:8081 -p 3000:3000 openfga/openfga run"),".")),(0,o.kt)("p",null,"This will start an HTTP server and gRPC server with the default configuration options. Port 8080 is used to serve the HTTP API, 8081 is used to serve the gRPC API, and 3000 is used for the ",(0,o.kt)("a",{parentName:"p",href:"#playground"},"Playground"),"."),(0,o.kt)("h2",{id:"configuring-the-server"},"Configuring The Server"),(0,o.kt)("p",null,"You may configure the OpenFGA server with a ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," file. The ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," can be specified in either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/etc/openfga")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.openfga")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".")," (i.e., the current working directory).")),(0,o.kt)("p",null,"The OpenFGA will server search for the configuration file in the above order."),(0,o.kt)("p",null,"Here is a sample configuration to run OpenFGA with postgres and using a preshared key for authentication:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'datastore:\n  engine: postgres\n  uri: postgres://user:password@localhost:5432/mydatabase\nauthn:\n  method: preshared\n  preshared:\n    keys: ["key1", "key2"]\n')),(0,o.kt)("p",null,"All possible configurations and their default values are defined in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openfga/openfga/blob/main/.config-schema.json"},"config-schema.json"),"."),(0,o.kt)("h3",{id:"configuring-data-storage"},"Configuring Data Storage"),(0,o.kt)("p",null,"OpenFGA supports multiple storage engine options including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"memory")," - The memory storage engine is the default, but it is not persistent (data is lost between server restarts)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"postgres")," - The Postgres storage engine requires a Postgres instance that the OpenFGA server can reach.")),(0,o.kt)("h4",{id:"postgres"},"Postgres"),(0,o.kt)("p",null,"Let's assume you want to run OpenFGA and Postgres in containers. The first thing we should do is create a new network as this will make communication between containers a bit simpler:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker network create openfga\n")),(0,o.kt)("p",null,"Start Postgres in the network you created above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run -d --name postgres --network=openfga -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=password postgres:14\n")),(0,o.kt)("p",null,"You should now have Postgres running in a container in the ",(0,o.kt)("inlineCode",{parentName:"p"},"openfga")," network. However, it will not have the tables required for running OpenFGA. You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"migrate")," command to create the tables. Using the OpenFGA container, this will look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run --rm --network=openfga openfga/openfga migrate \\\n    --datastore-engine postgres \\\n    --datastore-uri 'postgres://postgres:password@postgres:5432/postgres?sslmode=disable'\n")),(0,o.kt)("p",null,"Finally, start OpenFGA:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker run --name openfga --network=openfga -p 3000:3000 -p 8080:8080 -p 8081:8081 openfga/openfga run \\\n    --datastore-engine postgres \\\n    --datastore-uri 'postgres://postgres:password@postgres:5432/postgres?sslmode=disable'\n")),(0,o.kt)("p",null,"OpenFGA should start and you should see ",(0,o.kt)("inlineCode",{parentName:"p"},"using 'postgres' storage engine")," in the logs."),(0,o.kt)("p",null,"Now you can try to ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/create-store"},"Create a Store"),"."),(0,o.kt)("h3",{id:"configuring-authentication"},"Configuring Authentication"),(0,o.kt)("p",null,"You can configure authentication in your OpenFGA server in two ways: no authentication (the default) or pre-shared key authentication."),(0,o.kt)("p",null,"If using ",(0,o.kt)("strong",{parentName:"p"},"Pre-shared key authentication"),", you will configure OpenFGA with a secret key and your application calling OpenFGA will have to set an ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer <YOUR-KEY-HERE>")," header. You can configure multiple keys."),(0,o.kt)("admonition",{title:"Warning",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you are going to use this setup in production, you should enable TLS in your OpenFGA server.")),(0,o.kt)("h3",{id:"playground"},"Playground"),(0,o.kt)("p",null,"The Playground facilitates rapid development by allowing you to visualize and model your application's authorization model(s) and manage relationship tuples with a locally running OpenFGA instance."),(0,o.kt)("p",null,"The Playground is enabled on port 3000 by default. To disable the Playground, please take a look at ",(0,o.kt)("a",{parentName:"p",href:"#configuring-the-server"},"Configuring the Server")," for more information."),(0,o.kt)("h3",{id:"profiler-pprof"},"Profiler (pprof)"),(0,o.kt)("admonition",{title:"Warning",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Continuous pprof profiling can be used in production deployments, but we recommend disabling it unless it is needed to troubleshoot specific performance or memory problems.")),(0,o.kt)("p",null,"Profiling through pprof can be enabled on the OpenFGA server by providing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--profiler-enabled")," flag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -p 8080:8080 -p 8081:8081 -p 3000:3000 -p 3001:3001 openfga/openfga run --profiler-enabled\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Remember to expose the profiler port if you're running OpenFGA via docker. For example ",(0,o.kt)("inlineCode",{parentName:"p"},"docker run -p 8080:8080 -p 8081:8081 -p 3000:3000 -p 3001:3001 openfga/openfga run --profiler-enabled"),".")),(0,o.kt)("p",null,"If you need to serve the profiler on a different address than the default ",(0,o.kt)("inlineCode",{parentName:"p"},":3001"),", you can do so by specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"--profiler-addr")," flag. For example,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -p 8080:8080 -p 8081:8081 -p 3000:3000 -p 3002:3002 openfga/openfga run --profiler-enabled --profiler-addr :3002\n")),(0,o.kt)("h2",{id:"production-recommendations"},"Production Recommendations"),(0,o.kt)("p",null,"If you have tried OpenFGA locally, decided it works as expected, and now want to deploy it to production, we recommend the following preparation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update the configuration as follows:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Configure authentication on the server as explained above."),(0,o.kt)("li",{parentName:"ul"},"Enable TLS on the server."),(0,o.kt)("li",{parentName:"ul"},"Enable production logging by changing the ",(0,o.kt)("inlineCode",{parentName:"li"},"log.format")," in the ",(0,o.kt)("a",{parentName:"li",href:"#configuring-the-server"},"config.yaml")," configuration file to ",(0,o.kt)("inlineCode",{parentName:"li"},"json"),"."),(0,o.kt)("li",{parentName:"ul"},"Disable Playground."))),(0,o.kt)("li",{parentName:"ul"},"Add a rate limiter interceptor (for example, ",(0,o.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/openfga/openfga/server#Config"},"in the server configuration"),") that protects your OpenFGA server against bursts in traffic."),(0,o.kt)("li",{parentName:"ul"},"Add a logger interceptor (for example, ",(0,o.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/openfga/openfga/server#Config"},"in the server configuration"),") that sends logs to your logging platform of choice.")))}d.isMDXComponent=!0}}]);