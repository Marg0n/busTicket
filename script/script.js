
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
        // const p1 = setSelectedSeat(seatName);

        // const div = document.createElement('div');
        // const div1 = div.classList.add("flex flex-col");
        // console.log(div);
        // console.log(div1);
        // div.appendChild(p1);
        // div.appendChild(p2);
        // div.appendChild(p3);

        // selectedSeatContainer.appendChild(div);
        // selectedSeatContainer.appendChild(p1);
        // selectedSeatContainer.appendChild(p2);
        // selectedSeatContainer.appendChild(p3);

        // const counter = document.getElementById('bookingCounter').innerText;
        // const counter = document.getElementById('bookingCounter').innerText;
        // const parseCounter = parseInt(counter);
        // const counting = parseCounter + 1;
        // counter.innerText = counting;

        // count = counting;
        // console.log('counting',counting);
        count++; // increment sear selection
        console.log('count',count);
        let counter = document.getElementById('bookingCounter').innerText;
        counter = count;
        // counting++;
        console.log('count',count);
        // console.log(typeof(counter));
        // console.log(counting);
    });

    // function setSelectedSeat(e){
    //     const p = document.createElement('p');
    //     p.innerText = e;

    //     return p.innerText;
    // }

}