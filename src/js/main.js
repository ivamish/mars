import IMask from 'imask';

document.addEventListener("DOMContentLoaded", () => {

    const element = document.querySelectorAll('[data-date]');
    const maskOptions = {
    mask: Date,
    
    };

    element.forEach(input => {
        IMask(input, maskOptions);
    });

    document.querySelectorAll('[data-modal]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('modal').classList.add('showModal');
            document.getElementById('modal').classList.remove('closeModal');
        });
    });

    let oldVal = '';
    document.getElementById('inputPeople').addEventListener('input', function() {
        
        if(Number.isInteger(+this.value)) {
            console.log(1);
            oldVal = this.value;
        } else {
            console.log(2);
            this.value = oldVal;
        }
    });

    document.getElementById('inputPeople').addEventListener('change', function() {
        let count = this.value,
        lbl;
        if(count > 9 && count < 22) {
            lbl = 'человек';
        }else if((count > 1 && count < 5) || (count % 10 > 1 && count % 10 < 5)) {
            lbl = 'человека';
        } else {
            lbl = 'человек';
        }
        this.value = `${count} ${lbl}`;
    });

    document.getElementById('inputPeople').addEventListener('focus', function() {
        if (this.value !== "") this.value = parseInt(this.value.match(/\d+/));
    });

    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('modal').classList.add('closeModal');
        document.getElementById('modal').classList.remove('showModal');
    });


    function parallax(e) {
        elem.classList.add('home--after-load');
        let _w = window.innerWidth/2;
        let _mouseX = e.clientX;
        let _depth = `${70 - (_mouseX - _w) * 0.02}% 100%`;
        let _depth2 = `${70 - (_mouseX - _w) * 0.03}% 100%`;
        let x = `${_depth}, ${_depth2}`;
        elem.style.backgroundPosition = x;
    }
    

    const elem = document.querySelector("#home");
    setTimeout(() => {
        document.addEventListener("mousemove", parallax);
    }, 2000);
    
    document.getElementById('burger').addEventListener('click', function() {
        this.classList.toggle('burger--active');
        document.getElementById('burgerNav').classList.toggle('burger__nav--active');
    });
});