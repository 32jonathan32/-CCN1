
        document.write("<h2> Ola Mundo! Esse e meu primeiro programa de JavaScrpt</h2> <br>");

        document.write("<p>Melhor aula do periodo.</p>");

        /*window.alert( "Cuidado")*/

        document.getElementById('subtitulo').innerHTML='OLA MUNDO';

        /*document.getElementById('resposta').innerHTML= window.confirm('voce gosta do curso?');*/

        document.getElementById('resposta').innerHTML= 'o nome e '+ window.prompt('qual seu nome?');

        function abrirPagiana()
        {
            window.open('index2.html','_blank')
        
        }