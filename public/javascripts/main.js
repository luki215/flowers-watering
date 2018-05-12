var water_btns = document.querySelectorAll("button.waterr");

water_btns.forEach(btn => {
    let b = btn;
    btn.addEventListener('mousedown', (e) => {
        let pump_id = parseInt( b.getAttribute("pump-id") );
        axios.patch(`/waterr/${pump_id}/on`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    });

    btn.addEventListener('mouseup', (e) => {
         let pump_id = parseInt( b.getAttribute("pump-id") );
        axios.patch(`/waterr/${pump_id}/off`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    });
}); 


let btn_headings = document.querySelectorAll(".waterr .pump-name");

btn_headings.forEach(heading => {
    // Instantiate `CircleType` with an HTML element.
    const circleType = new CircleType(heading);   

    // Set the text radius and direction. Note: setter methods are chainable.
    circleType.radius(140).dir(-1);
});


