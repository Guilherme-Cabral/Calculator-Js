class calculator {
    constructor() {
        this.display = document.querySelector('.result-container');
    }

    start() {
        this.capturaClick();
        this.tecla();
    }

    tecla() {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode !== 13) return;
            this.exec();
        });
    }
    exec() {
        try {

            const conta = eval(this.display.value);
            if (Number.isNaN(conta) || typeof conta !== 'number') {
                alert('Conta inválida');
                return;
            }
            this.display.value = conta
        } catch (e) {
            alert('conta Invalida');
        }
    }

    capturaClick() {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.displaySet(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.exec();
            if (el.classList.contains('btn-porcentagem')) this.percentage();
            if (el.classList.contains('backspace')) this.del();

        });
    }

    percentage() {
        const num = this.display.value;
        this.display.value = num/100;
    }

    clear() {
        this.display.value = '';
    }

    del() {
        this.display.value = this.display.value.slice(0, -1);
    }

    displaySet(el) {
        this.display.value += el.innerText;
        this.display.focus();
    }
}


const calc = new calculator();
calc.start();