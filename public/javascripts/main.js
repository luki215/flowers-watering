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

var confirm_forms = document.querySelectorAll('form.update-pump');
confirm_forms.forEach(f => {
    f.addEventListener("submit", (e) => {
        params = {}
        params.on = e.target.elements[0].checked;
        params.frequency = e.target.elements[1].value;
        [params.hours, params.minutes, ...res] = e.target.elements[2].value.split(":").map(e => parseInt(e));
        params.duration = parseInt(e.target.elements[3].value);
        axios.patch(e.target.action, params)
        .then(function (response) {
            document.querySelector('.alert.alert-success').classList.remove('hide');
            setTimeout(() => {
            document.querySelector('.alert.alert-success').classList.add('hide');}, 3000);

        })
        .catch(function (error) {
            console.log(error);
        });

        e.preventDefault();
    }, false);
})

