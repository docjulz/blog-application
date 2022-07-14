const fs = require('fs');

/*****************
 * READING FILES *
 * ***************/
    /*  It will ask for path then fire function with parameters(err and data) 
        check if there was an error
        check for data
        THis is also "Aysnchronous"
    */

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log("THere was an error", err);
//     }
//     console.log(data.toString());
//     console.log(data);  //This is just the buffer
// })

// console.log("The last line");


/*****************
 * Writing FILES *
 * ***************/

    /* 
    First argument is file, second is text to write, 3rd is asyn function
    very simple overall
    */

// fs.writeFile('./docs/blog5.txt', "Heres a whole bunch of new text to be added", ()=> {
//     console.log("Testing out blog file 5");
// })
// fs.writeFile('./docs/blog2.txt', "BLOG 2: Heres a whole bunch of new text to be added", ()=> {
//     console.log("Hello again");
// })

/***************
 * directories *
 * *************/

    /* 
    Directories
    */


// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err)=> {
//         if (err) {
//             console.log("ERROR " + err);
//         }
//         console.log("This was dir was created");
//     });
// } else {   
//     fs.rmdir('./assets', (err)=> {
//         if(err){ 
//             console.log("Error was thrown");
//         }
//         console.log("Folder was deleted");
//     })
// }


/******************
 * Deleting FILES *
 * ****************/

    /*
     Delete files. unlink
    */

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err)=> {
        if(err) {
            console.log("Actually nothing here",err);
        }
        console.log("File deleted");
    })
}