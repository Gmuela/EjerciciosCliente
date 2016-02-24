<?php
$telefono = $_REQUEST['phone'];
switch ($telefono){
		case "963258741":
			echo ("Pizza Tropical|Rua Fray Rosendo Salvado Nº 25, 3º C\n15705 Santiago de Compostela\nA Coruña");
			break;
		case "698745213":
			echo ("Pizza Margarita|Calle Payaso Fofó Nº 5, 4º a\n28031 Vallecas\nMadrid");
			break;

		case "874563214":
			echo ("Pizza Funghi|Calle Fernando Fernán Gomez Nº 12\n28560 Rivas\nMadrid");
			break;
		default:
		    echo ("No esta en la base de datos.|No existe.");
			break;
	}
?>

