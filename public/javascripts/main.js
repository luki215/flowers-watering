var water_btn = document.getElementById("waterr");

water_btn.addEventListener('mousedown', (e) => {
    axios.patch('/waterr/0/on')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
});

water_btn.addEventListener('mouseup', (e) => {
    axios.patch('/waterr/0/off')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
});
