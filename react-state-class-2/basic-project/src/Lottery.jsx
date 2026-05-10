import { useState } from "react";
import { getTicket, sum } from "./Helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(getTicket(n));
  let isWinning = winCondition(ticket);
  
  let buyTicket = () => {
    setTicket(getTicket(n));
  };
  
  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <Button action={buyTicket}/>
      {/* <button onClick={buyTicket}>Buy New Ticket</button> */}
      {isWinning && <h3>Congratulations You won!</h3>}
    </div>
  );
}