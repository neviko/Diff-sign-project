/* Email du destinataire (mettez ici votre email) */
$destinataire = "elieraphm@gmail.com";

/* Récupération */
$email = $_POST['email'];
$objet = $_POST['objet'];
$message = $_POST['message'];
$header = "From: " . $_POST['email'];

/* Vérification */
if ( $objet == "" ) {
  echo "Veuillez indiquer un objet.";
  $erreur = true;
}
if ( $message == "" ) {
  echo "Veuillez indiquer un message.";
  $erreur = true;
}

/* Vérification du mail */
$email_regex = "^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+.[a-z0-9-]";
if ( $email == "" OR !eregi( $email_regex , $email ) ) {
  echo "Veuillez indiquer un email valide.";
  $erreur = true;
}

/* Envoi du mail */
if ( !$erreur ) {
  mail( $destinataire , $objet , $message , $header );
  echo "Le message a été envoyé.";
}