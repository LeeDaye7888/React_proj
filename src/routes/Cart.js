import * as React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Button } from "react-bootstrap"
import { addCount, minusCount, deleteCount } from "./../store.js"
import { Container, Paper, Table, TableRow, TableHead, TableContainer, TableCell, TableBody} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

function ccyFormat(num) {
  return `${num.toLocaleString()}￦`;
}

function priceRow(qty, unit) {
    return qty * unit;
}

function subtotal(items) {
  const temp = items.map((i, k) => i.price * i.count);
  if(temp.length == 0 ) return 0;
  return items.map((i, k) => i.price * i.count).reduce((sum, curValue) => sum + curValue);
}

export default function SpanningTable() {

  let state = useSelector((state) => state);
  let dispatch = useDispatch() //store.js로 요청을 보내주는 함수
  const [num, setNum] = React.useState(state.cart.count);
  const invoiceSubtotal = subtotal(state.cart);
  const invoiceTaxes = state.cart.length ? 3000 : 0;
  const invoiceTotal = Number(invoiceTaxes + invoiceSubtotal);

  return (
    <Container style={{marginTop : "60px"}}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align="center">Qty.</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.cart.length ? state.cart.map((row, i) => (
            <TableRow key={row.id}>
              <TableCell>
                <img src={row.src} alt="150 * 150 size image" height="180px" width="150px"
                style={{display : "inline-block", margin : "20px"}}/>
                <span style={{fontSize : "18px"}}> {row.title}</span>
                <div style = {{display : "inline-block"}}>
                  <Button style = {{color : "red", backgroundColor : "white", border : "none", fontSize : "15px", width : "10px"}}
                  onClick={(e)=>{dispatch(deleteCount((row.id)))}}>X</Button>
                </div>
              </TableCell>
              <TableCell  align="right">
                <div style={{whiteSpace: "nowrap"}}>
                  <Button size="md" style={{backgroundColor : "lightgray", color : "white", Width : "40px", border : "none"}}
                  onClick={()=>{dispatch(minusCount(row.id))}}>‒</Button>
                  <input type="text" name="amount" value={row.count} style={{border : "none", width : "60px"}}/>
                  <Button size="md" style={{backgroundColor : "lightgray", color : "white", Width : "40x", border : "none"}}
                    onClick={()=>{dispatch(addCount(row.id))}}>+</Button>
                </div>
              </TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
              <TableCell align="right">{ccyFormat(priceRow(row.price, row.count))}</TableCell>
            </TableRow>
          )) : 
          <TableRow>
          <TableCell colSpan={4} align="center" style={{fontSize : "20px", fontWeight : "550"}}>
           No items added to cart yet
          </TableCell>
        </TableRow>
          }
          <TableRow>
          <TableCell rowSpan={3}></TableCell>
          <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Shipping fee</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    {state.cart.length ?
    <Grid container spacing={2}>
        <Grid xs={8}></Grid>
        <Grid xs={4} display="flex" justifyContent="flex-end" alignItems="center">
        <Button variant="contained" onClick={() => alert('상품이 품절되었습니다.')}
              style={{backgroundColor : "black", color : "white", fontSize : "20px"}}>CHECK OUT</Button>
        </Grid>
      </Grid>
      : ''}
    </Container>
  );
}