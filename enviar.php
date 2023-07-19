<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Carregar o autoloader do Composer
require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';



if (isset($_POST['pedir'])) {
    $nome = htmlentities($_POST['nome']);
    $mesa = htmlentities($_POST['mesa']);
    $whatsapp = htmlentities($_POST['whatsapp']);
    $categoria = htmlentities($_POST['categoria']);
    $produto = htmlentities($_POST['produto']);
    $quantidade = htmlentities($_POST['quantidade']);
    $pagamento = htmlentities($_POST['pagamento']);
    $bacon = htmlentities($_POST['+bacon']);
    $queijo = htmlentities($_POST['+queijo']);
    $carne = htmlentities($_POST['+carne']);
    $abacaxi = htmlentities($_POST['+abacaxi']);

    // Criar uma instância do PHPMailer; passando `true` habilita exceções
    $mail = new PHPMailer(true);

    try {
        // Configurações do servidor
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER; // Ativar saída detalhada de debug
        $mail->isSMTP(); // Enviar usando SMTP
        $mail->Host       = 'smtp.hostinger.com'; // Definir o servidor SMTP para enviar através dele
        $mail->SMTPAuth   = true; // Habilitar autenticação SMTP
        $mail->Username   = 'contato@encontreii.shop'; // Nome de usuário SMTP
        $mail->Password   = 'Clinos1@'; // Senha SMTP
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Habilitar criptografia implícita TLS
        $mail->Port       = 465; // Porta TCP para conectar; use 587 se você configurou `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        // Destinatários
        $mail->setFrom('contato@encontreii.shop', 'MenudApp'); // Remetente
        $mail->addAddress('contato@encontreii.shop', 'Servidor'); // Destinatário
        // Você pode adicionar mais destinatários, se necessário, com addAddress('email', 'nome');

        // Conteúdo
        $mail->CharSet = 'UTF-8';
        $mail->isHTML(true); // Definir o formato do e-mail como HTML
        $mail->Subject = "Novo Pedido na mesa: {$mesa}";
        // Montar o corpo do e-mail em HTML
        $mail->Body = "
        <html>
        <head>
            <meta charset='UTF-8'>
            <title>E-mail em HTML</title>
        </head>
        <body>
            <h1>Novo Pedido</h1><br>
            <h4>-----------------Cliente-----------------</h4>
            <br>
            <br>            
            <h2>Cliente: {$nome}<br>Mesa:{$mesa}</h2><br>
            <h4>Whatsapp: {$whatsapp}</h4>
            <br>
            <br>
            <h4>-----------------Pedido-----------------</h4>
    
            <ul>
                <h4>Categoria: {$categoria}</h4>                
                <li><h4>Produto: {$produto}</h4></li>
                <li><h4>Quantidade: {$quantidade}</h4></li>
                <li><h4>Forma de Pagamento: {$pagamento}</h4></li>
            </ul>
            <h4>-----------------Adicionais-----------------</h4><br>
            <br>
            <ul>
                <li><h4>Bacon: {$bacon}</h4></li>
                <li><h4>Queijo: {$queijo}</h4></li>
                <li><h4>Carne: {$carne}</h4></li>
                <li><h4>Forma de Pagamento: {$pagamento}</h4></li>
                <li><h4>Abacaxi: {$abacaxi}</h4></li>               
            </ul>
            <p>Desenvolvido por João Pedro</p>
        </body>
        </html>
        ";

        $mail->AltBody = 'Este é o corpo em texto plano para clientes de e-mail que não suportam HTML';

        $mail->send();
        echo 'Pedido Realizado com sucesso aguarde!';
        header('location: index.html');
    } catch (Exception $e) {
        echo "Error: {$mail->ErrorInfo}";
    }
    
}
?>
