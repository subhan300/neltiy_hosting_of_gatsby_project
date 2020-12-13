
// exports.createPages = async function ({ actions}) {

const { Component } = require("react");

//     actions.createPage({
//         path:"Dynamic",
//         component: require.resolve("/home/muhammadsubhan/Desktop/react course from piaic bootcamp/classes/hello-world/src/components/templates/Dynamic.js"),
//         context: { 
//             // Data passed to context is available
//             // in pageContext props of the template component
//             name: "Zia",
//             roll:20,
//             class:"bscs"
//          },
//     });
//     console.log("End of Gatsby Node File");
// }


// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
// exports.onCreatePage = async ({ page, actions }) => {
//     const { createPage } = actions
  
//     // Only update the `/app` page.
//     if (page.path.match(/^\/app/)) {
//       // page.matchPath is a special key that's used for matching pages
//       // with corresponding routes only on the client.
//       page.matchPath = "/app/*"
  
//       // Update the page.
//       createPage(page)
//     }
//   }
var path=require("path");
  exports.createPages=async ({actions,graphql})=>{
   
    const {createPage} = actions;
    
  
    const result=await graphql(`{
      allContentfulElectronics {
        nodes {
          slug
          title
         
        }
      }
    } `)
    console.log("resultsjsj",JSON.stringify(result))
    result.data.allContentfulElectronics.nodes.forEach(
      (obj)=>{
console.log(obj)
      createPage({
        path:`/Product/${obj.slug}`,
        component:path.resolve("./src/components/templates/Product.js"),

        context:{
            Item_Details:obj
        }
      })





    })

  }
