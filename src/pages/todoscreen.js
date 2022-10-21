import { useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import "./todo.css"
import { Box } from '@mui/system';
function Todoscreen() {
    const [text, settext] = useState("");
    const [list, setlist] = useState([]);

    function add() {
        // alert("Enter")
        setlist([...list, text])
        settext("")

    }

    function Edit(i) {
        let EditItem = prompt("Enter Your value", list[i])
        list[i] = EditItem
        setlist([...list])


    }
    function Delete(index) {
        list.splice(index, 1)
        setlist([...list])
        console.log(index)
    }
    function DeleteAll() {
        setlist([]);
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1>To-do-App</h1>
                <div>
                    {/* <TextField value={text} label="Enter The Value"  OnChange={(e) => settext(e.target.value)}/> */}
                    <TextField fullWidth size='medium' id="standard-basic" label="Enter Item" variant="outlined" onChange={(e) => settext(e.target.value)} />
                    {/* <Input value={text} label="Enter The Value" OnChange={(e) => { settext(e.target.value) }} /> */}
                    <Button  size='large' className="buttonitems" variant="contained" color="success" onClick={() => add()}>Add item</Button>
                    <Button  size='large' className="buttonitems" variant="contained" color='error' label="DeleteAll" onClick={() => DeleteAll()}>Delete All</Button>
                </div>
                <div>
                    <p></p>
                    <ul>
                        {list.map((e, i) => {
                            return <li className="listitems" key={i} >{e}
                            <Box>
                                <Button className="buttonitems" variant="contained" color='warning' label="Edit item" onClick={() => Edit(i)} > Edit </Button>
                                <Button className="buttonitems"  variant="contained" color='error' label="Delete item" onClick={() => Delete(i)} >Delete</Button>
                            </Box>
                            </li>
                        })}</ul>

                    {/* material ui design  */}


                </div>
            </header>
        </div>
    );
}

export default Todoscreen;
