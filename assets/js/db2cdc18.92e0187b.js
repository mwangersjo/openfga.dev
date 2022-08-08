"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[8242],{53346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>p,metadata:()=>g,toc:()=>d});var a=n(87462),o=(n(67294),n(3905)),r=n(80450),i=n(65488),s=n(85162);const p={title:"Create a Store",description:"How to create a store",slug:"/getting-started/create-store"},l="Create a Store",g={unversionedId:"content/getting-started/create-store",id:"content/getting-started/create-store",title:"Create a Store",description:"How to create a store",source:"@site/docs/content/getting-started/create-store.mdx",sourceDirName:"content/getting-started",slug:"/getting-started/create-store",permalink:"/docs/getting-started/create-store",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/getting-started/create-store.mdx",tags:[],version:"current",frontMatter:{title:"Create a Store",description:"How to create a store",slug:"/getting-started/create-store"},sidebar:"docs",previous:{title:"Install SDK Client",permalink:"/docs/getting-started/install-sdk"},next:{title:"Setup SDK Client for Store",permalink:"/docs/getting-started/setup-sdk-client"}},c={},d=[{value:"Step By Step",id:"step-by-step",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-store"},"Create a Store"),(0,o.kt)(r.AH,{mdxType:"DocumentationNotice"}),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts#what-is-a-store"},"store")," is a OpenFGA entity that contains your authorization data. You will need to create a store in OpenFGA before adding an ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts#what-is-an-authorization-model"},"authorization model")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts#what-is-a-relationship-tuple"},"relationship tuples")," to it."),(0,o.kt)("p",null,"This article explains how to setup an OpenFGA store."),(0,o.kt)("h2",{id:"step-by-step"},"Step By Step"),(0,o.kt)(i.Z,{groupId:"languages",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:r.eU.JS_SDK,label:r.UB.get(r.eU.JS_SDK),mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { OpenFgaApi } = require('@openfga/sdk'); // OR import { OpenFgaApi } from '@openfga/sdk';\n\nconst openFga = new OpenFgaApi({\n    apiScheme: process.env.FGA_API_SCHEME, // optional, defaults to \"https\"\n    apiHost: process.env.FGA_API_HOST // required, define without the scheme (e.g. api.openfga.example instead of https://api.openfga.example)\n});\n\nconst { id: storeId } = await openFga.createStore({\n    name: \"FGA Demo Store\",\n});\n"))),(0,o.kt)(s.Z,{value:r.eU.GO_SDK,label:r.UB.get(r.eU.GO_SDK),mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    openfga "github.com/openfga/go-sdk"\n    "os"\n)\n\nfunc main() {\n    configuration, err := openfga.NewConfiguration(openfga.Configuration{\n        ApiScheme:      os.Getenv("FGA_API_SCHEME"), // optional, defaults to "https"\n        ApiHost:        os.Getenv("FGA_API_HOST"), // required, define without the scheme (e.g. api.openfga.example instead of https://api.openfga.example)\n    })\n\n    if err != nil {\n        // .. Handle error\n    }\n\n    apiClient := openfga.NewAPIClient(configuration)\n\n    resp, _, err := apiClient.OpenFgaApi.CreateStore(context.Background()).Body(openfga.CreateStoreRequest{\n        Name: openfga.PtrString("FGA Demo Store"),\n    }).Execute()\n    if err != nil {\n        // .. Handle error\n    }\n}\n'))),(0,o.kt)(s.Z,{value:r.eU.DOTNET_SDK,label:r.UB.get(r.eU.DOTNET_SDK),mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dotnet"},'using OpenFga.Sdk.Api;\nusing OpenFga.Sdk.Configuration;\nusing Environment = System.Environment;\n\nnamespace ExampleApp;\n\nclass MyProgram {\n    static async Task Main() {\n        var configuration = new Configuration() {\n            ApiScheme = Environment.GetEnvironmentVariable("FGA_API_SCHEME"), // optional, defaults to "https"\n            ApiHost = Environment.GetEnvironmentVariable("FGA_API_HOST") // required, define without the scheme (e.g. api.openfga.example instead of https://api.openfga.example)\n        };\n        var fgaClient = new OpenFgaApi(configuration);\n\n        var store = await fgaClient.CreateStore(new OpenFga.Sdk.Model.CreateStoreRequest()\n        {\n            Name = "FGA Demo Store"\n        });\n    }\n}\n'))),(0,o.kt)(s.Z,{value:r.eU.CURL,label:r.UB.get(r.eU.CURL),mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'curl -X POST $FGA_API_HOST/stores \\\n  -H "content-type: application/json" \\\n  -d \'{"name": "FGA Demo Store"}\'\n')))))}m.isMDXComponent=!0}}]);