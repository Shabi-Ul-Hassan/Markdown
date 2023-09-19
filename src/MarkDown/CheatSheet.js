import React from "react";
import './style.css'

const CheatSheet = () => {
  return (
    <>
        <h1 className="cheatsheet-heading">Cheat-Sheet</h1>
      <table className="table">
      
              <thead>
                <tr className="text-white bg-dark">
                  <th scope="col">Element</th>
                  <th scope="col">Syntax</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Heading</th>
                  <td># H1 <br/>
                    ## H2<br/>
                    ### H3
                    </td> 
                </tr>
                <tr>
                  <th scope="row">Bold</th>
                  <td>**bold text**</td>
                </tr>
                
                <tr>
                  <th scope="row">Italic</th>
                  <td >*italicized text*</td>
                </tr>

                <tr>
                  <th scope="row">Blockquote</th>
                  <td >> blockquote</td>
                </tr>
                <tr>
                  <th scope="row">Ordered List</th>
                  <td >1. First item <br/>
2. Second item<br/>
3. Third item</td>
                </tr>

                <tr>
                  <th scope="row">Unordered List</th>
                  <td >- First item <br/>
- Second item <br/>
- Third item</td>
                </tr>

                <tr>
                  <th scope="row">Code</th>
                  <td >`code`</td>
                </tr>

                <tr>
                  <th scope="row">Horizontal Rule</th>
                  <td > --- </td>
                </tr>

                <tr>
                  <th scope="row">Link</th>
                  <td >[title](https://www.example.com)</td>
                </tr>

                <tr>
                  <th scope="row">Image</th>
                  <td >![alt text](image.jpg)</td>
                </tr>
              </tbody>
            </table>
    </>
  );
};

export default CheatSheet;
