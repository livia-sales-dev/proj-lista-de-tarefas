let contador = 0
let input = document.getElementById('inputtarefa');
let btnadd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa(){
    let valorinput = input.value;
    if((valorinput !== "") && (valorinput !== null) && (valorinput !== undefined)) {

            ++contador;

            let novoitem = `<div id="${contador}" class="item">
        <div onclick="marcartarefa(${contador})" class="itemIcone">
            <i id="icone_${contador}" class="mdi mdi-checkbox-multiple-blank-circle-outline"></i>
        </div>
        <div onclick="marcartarefa(${contador})" class="itemNome">
            ${valorinput}
        </div>
        <div class="itemBotao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
        </div>
    </div>`;
    main.innerHTML += novoitem;

    input.value="";
    input.focus();

    }
 
    }

    function deletar(id) {
        var tarefa = document.getElementById(id);
        tarefa.remove();
    }

    function marcartarefa(id){
        var item = document.getElementById(id);
        var classe = item.getAttribute("class");

        if(classe == "item"){
            item.classList.add("clicado");
            var icone = document.getElementById('icone_' + id);
            icone.classList.remove('mdi-checkbox-multiple-blank-circle-outline');
            icone.classList.add('mdi-checkbox-multiple-marked-circle');
            item.parentNode.appendChild(item);
        } else {
            item.classList.remove('clicado');
            var icone = document.getElementById('icone_' + id);
            icone.classList.remove('mdi-checkbox-multiple-marked-circle');
            icone.classList.add('mdi-checkbox-multiple-blank-circle-outline');

        }
        
    }

    input.addEventListener("keyup", function(event){
        if(event.keyCode === 13) {
            event.preventDefault();
            btnadd.click();

        }
    })
