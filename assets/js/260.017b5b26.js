(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{615:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/containers/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure for Containers"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"use-net-core-webapi-and-docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-net-core-webapi-and-docker-compose"}},[e._v("#")]),e._v(" Use .NET Core WebAPI and Docker Compose")]),e._v(" "),a("p",[e._v("How hard do you think it is to:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/blog/tip54.html"}},[e._v("Create and Publish a .NET Core WebAPI project")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/blog/tip55.html"}},[e._v("Add it to a Docker Container using Docker Compose and push it to a Docker Hub")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/blog/tip56.html"}},[e._v("Use it in Azure with Web App for Containers")])],1)]),e._v(" "),a("p",[e._v("In this mini-series, we'll build on each part starting with creating and publishing a .NET Core WebAPI project. Today, we'll use Docker Compose to create an image and push it to Docker Cloud and we'll wrap up by deploying it to Azure using "),a("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/containers?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web App for Containers"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"use-net-core-webapi-and-docker-compose-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-net-core-webapi-and-docker-compose-2"}},[e._v("#")]),e._v(" Use .NET Core WebAPI and Docker Compose")]),e._v(" "),a("p",[e._v("Now that we have "),a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip54.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("created and published a .NET Core WebAPI project"),a("OutboundLink")],1),e._v(", we'll resume by using Docker Compose to create an image.")]),e._v(" "),a("p",[e._v("Think of this as three steps:")]),e._v(" "),a("p",[e._v("1.) We need a Dockerfile for the entire to understand the image we are creating.\n2.) We need a docker-compose.yml file to pass to the Docker Compose Command\n3.) We need to run the Docker Compose command.")]),e._v(" "),a("h4",{attrs:{id:"step-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1"}},[e._v("#")]),e._v(" Step 1")]),e._v(" "),a("p",[e._v("Let's begin by creating a Dockerfile.")]),e._v(" "),a("p",[a("strong",[e._v("What is a DockerFile?")]),e._v("  It is simply a text file containing the instructions needed to create a new container image. These instructions include identification of an existing image to be used as a base, commands to be run during the image creation process, and a command that will run when new instances of the container image are deployed. In other words, this file defines your app’s environment so it can be reproduced anywhere.")]),e._v(" "),a("p",[e._v("Copy and paste the following and name it "),a("code",[e._v("Dockerfile")]),e._v(" without an extension and place it in the same folder as your source code.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('FROM microsoft/aspnetcore:2.0\nARG source\nWORKDIR /app\nEXPOSE 80\nCOPY ${source:-obj/Docker/publish} .\nENTRYPOINT ["dotnet", "mbcwebapi.dll"]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("Let's go over the main instructions:")]),e._v(" "),a("ul",[a("li",[e._v("The FROM instruction sets the container image that will be used during the new image creation process. In this case, we're using the base aspnetcore image from Microsoft.")]),e._v(" "),a("li",[e._v("The EXPOSE instruction sets the port number.")]),e._v(" "),a("li",[e._v("The COPY instruction provides where it is going to pull the final release from")]),e._v(" "),a("li",[e._v("The ENTRYPOINT instruction provides the entry point into the application and in our case, we specify the release .dll.")])]),e._v(" "),a("h4",{attrs:{id:"step-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2"}},[e._v("#")]),e._v(" Step 2")]),e._v(" "),a("p",[e._v("We need a docker-compose.yml file to pass to the Docker Compose Command")]),e._v(" "),a("p",[a("strong",[e._v("What is docker-compose.yml?")]),e._v("  This file defines the services that make up your app so they can be run together in an isolated environment.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("version: '3'\n\nservices:\n  mbcwebapi:\n    image: mbcrump/mbcwebapi\n    build:\n      context: ./mbcwebapi\n      dockerfile: Dockerfile\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("Let's go over the main instructions:")]),e._v(" "),a("p",[e._v("When composing this Docker image, we will use the "),a("code",[e._v("mbcwebapi")]),e._v(" project and build an image called "),a("code",[e._v("mbcrump/mbcwebapi")]),e._v(". We'll set the context to look in the "),a("code",[e._v("./mbcwebapi")]),e._v(" folder and there it will find the "),a("code",[e._v("Dockerfile")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v("  Please note that the image name "),a("code",[e._v("mbcrump/mbcwebapi")]),e._v(" was based my Docker username and then the app name. If you don't have a Docker account, then you probably want to create one now.")]),e._v(" "),a("h4",{attrs:{id:"step-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3"}},[e._v("#")]),e._v(" Step 3")]),e._v(" "),a("p",[e._v("We need to simply run "),a("code",[e._v("docker-compose up")]),e._v(" and Docker Compose will start and run your entire app.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Michaels-MacBook-Pro:mbcwebapi mbcrump$ docker-compose up\nCreating network \"mbcwebapi_default\" with the default driver\nBuilding mbcwebapi\nStep 1/6 : FROM microsoft/aspnetcore:2.0\n ---\x3e 757f574feed9\nStep 2/6 : ARG source\n ---\x3e Using cache\n ---\x3e 96deb3aec068\nStep 3/6 : WORKDIR /app\n ---\x3e Using cache\n ---\x3e c0fecb757aa4\nStep 4/6 : EXPOSE 80\n ---\x3e Using cache\n ---\x3e e4f034c54397\nStep 5/6 : COPY ${source:-obj/Docker/publish} .\n ---\x3e 6bd68f6553c4\nStep 6/6 : ENTRYPOINT dotnet mbcwebapi.dll\n ---\x3e Running in 7036d9913baa\n ---\x3e 90384b8ed543\nRemoving intermediate container 7036d9913baa\nSuccessfully built 90384b8ed543\nSuccessfully tagged mbcrump/mbcwebapi:latest\nWARNING: Image for service mbcwebapi was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.\nCreating mbcwebapi_mbcwebapi_1 ...\nCreating mbcwebapi_mbcwebapi_1 ... done\nAttaching to mbcwebapi_mbcwebapi_1\nmbcwebapi_1  | warn: Microsoft.AspNetCore.DataProtection.Repositories.FileSystemXmlRepository[60]\nmbcwebapi_1  |       Storing keys in a directory '/root/.aspnet/DataProtection-Keys' that may not be persisted outside of the container. Protected data will be unavailable when container is destroyed.\nmbcwebapi_1  | warn: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager[35]\nmbcwebapi_1  |       No XML encryptor configured. Key {70d9c953-b38f-4e26-92d2-6a07557aaefc} may be persisted to storage in unencrypted form.\nmbcwebapi_1  | Hosting environment: Production\nmbcwebapi_1  | Content root path: /app\nmbcwebapi_1  | Now listening on: http://[::]:80\nmbcwebapi_1  | Application started. Press Ctrl+C to shut down.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br")])]),a("p",[e._v("Excellent! We now have a ASP.NET WebAPI project living inside a Docker Container that we can push to Docker Hub.")]),e._v(" "),a("h4",{attrs:{id:"push-to-docker-cloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push-to-docker-cloud"}},[e._v("#")]),e._v(" Push to Docker Cloud")]),e._v(" "),a("p",[e._v("Login to "),a("a",{attrs:{href:"https://cloud.docker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Cloud"),a("OutboundLink")],1),e._v(" and create a repository. In my case, I used "),a("code",[e._v("mbcrump/mbcwebapi")]),e._v(" just like in the docker-compose.yml example earlier.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/dockerblog1.png")}}),e._v(" "),a("p",[e._v("Head back to the terminal or command prompt and enter:")]),e._v(" "),a("p",[a("code",[e._v("docker login")]),e._v(" to authenticate your account.")]),e._v(" "),a("p",[a("code",[e._v("docker push mbcrump/mbcwebapi:latest")]),e._v(" to push your image to Docker Cloud.")]),e._v(" "),a("p",[e._v("You can go back to Docker Cloud to verify it pushed successfully.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/dockerblog2.png")}})])}),[],!1,null,null,null);t.default=n.exports}}]);