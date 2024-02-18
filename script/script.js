
let count =0;
const price = 550;
const busClass = "Economoy";

const seats = document.querySelectorAll('.bookSeat');

for (var i = 0; i < seats.length; i++) {
    const seat = seats[i];

    seat.addEventListener('click', () =>{
        // get seat number
        const seatName = seat.innerText;
        const selectedSeatContainer = document.getElementById('fare');

        const p1 = document.createElement('p');
        p1.innerText = seatName;
        const p2 = document.createElement('p');
        p2.innerText = busClass;
        const p3 = document.createElement('p');
        p3.innerText = price;

        const div = document.createElement('div');
        
        // console.log(div);
        addFlexStyle(div);
        flexStyleGrow(p1);
        flexStyleGrow(p2);
        flexStyleGrow(p3);

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        
        
        count++; // increment sear selection
        console.log('count',count);

        //can only take 4 tickets 
        if(count <= 4){
            document.getElementById("bookingCounter").innerText = count;
            let theSeatCounter = parseInt(document.getElementById("seatCount").innerText);
            document.getElementById("seatCount").innerText = theSeatCounter - 1;
            addGreenStyle(seat);
            // console.log(seat.innerText);
            selectedSeatContainer.appendChild(div);
            
            totalCount(total);

        }else{
            alert('You can not select more!');
        }
        
    });

    function addGreenStyle(e){
        e.style.backgroundColor = 'green';
    }

    function addFlexStyle(e){
        e.style.display = 'flex';
        e.style.flexDirection = 'row';        
    }

    function flexStyleGrow(e){        
        e.style.flexGrow = 1;
    }

    function totalCount(e){
        let totalCount = parseInt(document.getElementById("total").innerText);
        console.log(parseInt(document.getElementById("total").innerText));
        document.getElementById("total").innerText = totalCount + price;
    }

}