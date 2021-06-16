/*
Test 4.a:
  Write a custom function that accepts a selector string and returns an array of DOM elements 
    just like existing query selector functions without using any existing selector functions.
  For selector parsing, only worry about tag names, class names, IDs, 
    and space separators for tokenization.
*/

// function getChildNode(lookup, node) {
//   if (typeof node !== "object") {
//     return node;
//   }

//   const nodes = Object.entries(node);

//   for (let i = 0; i < nodes.length; i++) {
//     const [key, childNode] = nodes[i];

//     console.log(key);

//     console.log(childNode);

//     if (key.toUpperCase() === lookup) {
//       getChildNode(lookup, childNode);
//     }
//   }
// }

// function getChildNode(lookup, node) {
//   if (typeof node !== "object") {
//     return node;
//   }

//   const nodes = Object.entries(node);

//   for (let i = 0; i < nodes.length; i++) {
//     const [key, childNode] = nodes[i];

//     console.log(key);

//     console.log(childNode);

//     if (key.toUpperCase() === lookup) {
//       getChildNode(lookup, childNode);
//     }
//   }
// }

function getChildNode(lookup, node) {
  if (typeof node !== "object" || !node.childNodes || !node.childNodes.length) {
    return node;
  }

  for (let i = 0; i < node.childNodes.length; i++) {
    const child = node.childNodes[i];

    console.log(child);

    getChildNode(lookup, child);
  }
}

function myQuerySelectorAll(path) {
  const queries = path.split(" ");

  const query = queries[0];

  let elm = document.body;

  getChildNode(query, elm);

  // console.log(JSON.stringify(elm));

  // queries.forEach((query) => {
  //   getChildNode(query, elm);
  // });

   || !node.childNodes || !node.childNodes.length

  for (let i = 0; i < node.childNodes.length; i++) {
    const child = node.childNodes[i];

    console.log(child);

    getChildNode(lookup, child);
  }

  const query = queries[0];

  getChildNode(query, elm);// )// // // 
  // queries.forEach((query) => {
  //   elm = elm.getElementById(query)
  // })

  // return elm
}

const arr = myQuerySelectorAll("cell");

console.log(arr);

/*
Test 4.b:
  Use the custom query selector function to duplicate the solution for Test 1.
    Commment out your code for Test 1 if necessary to prevent conflicts.
*/

/*
Test 4.c:
  Use the custom query selector function to duplicate the solution for Test 2.
    Commment out your code for Test 2 if necessary to prevent conflicts.
*/
