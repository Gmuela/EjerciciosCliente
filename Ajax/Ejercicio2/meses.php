<?php
header('Content-Type: text/html; charset=utf-8');
// se podría hacer utilizado ($_REQUEST['num']==1)
if ($_REQUEST['num']==1)
  echo "<strong>Enero </strong>se deriva de <strong>Ianuarius</strong>, es decir, mes dedicado al viejo dios <em>Jano </em>(posiblemente de origen etrusco), simbolo del Sol y de la Luna y que tenía dos caras.";
if ($_REQUEST['num']==2)
  echo "<strong>Febrero </strong>era el mes de la purificación, <em>Februus</em>, de <em>Februarius. </em>En su segunda quincena se celebraban las fiestas Lupercales, con solemnes purificaciones de los vivos y conmemoraciones de los difuntos.";
if ($_REQUEST['num']==3)
  echo "<strong>Marzo </strong>estaba dedicado a <em>Marte</em>, el dios de la guerra (el antiguo Ares de los griegos), y en la primitiva Roma el año comenzaba precisamente este mes. No debe olvidarse que, según la tradición, Marte era el padre de Rómulo, fundador de la ciudad.";
if ($_REQUEST['num']==4)
  echo "<strong>Abril </strong>es el mes en que se abre <em>Aprillis</em>, las fuerzas de la naturaleza para la evolución de los vegetales. Es el mes de la primavera, en la que la potencia genérica se abre con mayor intensidad en los hombres y mujeres.";
if ($_REQUEST['num']==5)
  echo "<strong>Mayo </strong>conmemora a <em>Maia</em>, hija de Allante, madre de Mercurio y símbolo de la festividad de los cereales.";
if ($_REQUEST['num']==6)
  echo "<strong>Junio</strong> es el mes al que se le atribuyen dos orígenes distintos, según unos descendía de <em>Juno</em>, la reina del Olimpo, espsa de Júpiter (de rotundas formas inmortalizadas por Rubens). Pero según otros el nombre procede de <em>Lucius Iunius Brutus</em>, quien capitaneó la revolución que destronó al último rey de Roma e instauró la República.";
if ($_REQUEST['num']==7)
  echo "<strong>Julio</strong> está dedicado a <em>Iulius Caesar</em>, nacido de un parto difícil provocado por una operación, que aún se practica y por eso lleva su nombre (aunque debo advertir que esto es falso, pues la palabra cesárea viene del verbo <em>caedare</em>, cortar, y se ignora cómo nació Julio Cesar).";
if ($_REQUEST['num']==8)
  echo "<strong>Agosto </strong>estaba dedicado a Cesar Octavio <em>Augusto</em>, primer emperador de Roma.";
if ($_REQUEST['num']==9)
  echo "<strong>Septiembre </strong>procede de <em>septem</em>, es decir, siete porque era el séptimo mes cuando, como he comentado, el año empezaba en marzo.";
if ($_REQUEST['num']==10)
  echo "<strong>Octubre, </strong>de <em>octo</em>, ocho.";
if ($_REQUEST['num']==11)
  echo "<strong>Noviembre</strong>, de <em>novem</em>, o sea nueve.";
if ($_REQUEST['num']==12)
  echo "<strong>Diciembre</strong>, de <em>decem</em>, diez, por las mismas razones apuntadas.";
?>
