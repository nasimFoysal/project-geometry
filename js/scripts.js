
// link to blog
document.getElementById("btn-blog").addEventListener('click', function(){
  window.location = "./blog.html";
})


// triangle area 
document.getElementById('btn-calculate-triangle').addEventListener('click', function () {

  let triangleBase = getInputValueString('triangle-input-b');
  let triangleHeight = getInputValueString('triangle-input-h');

  if(validate('triangle-input-b')===false ||validate('triangle-input-h')===false){
    document.getElementById('triangle-input-b').value = "";
    document.getElementById('triangle-input-h').value = "";
    return;
  } 

    const triangleArea = (.5 * parseFloat(triangleBase) * parseFloat(triangleHeight)).toFixed(2);

    let triangleObj = {
      'area' : triangleArea,
      'name' : "Triangle"
    }

    arryOfAreas.push(triangleObj);

    document.getElementById('triangle-formula-b').innerText = triangleBase;
    document.getElementById('triangle-formula-h').innerText = triangleHeight;

    document.getElementById('triangle-input-b').value = "";
    document.getElementById('triangle-input-h').value = "";


  // add to calculations area table
  createTable();
  
    
})




// rectangle area
document.getElementById('btn-calculate-rectangle').addEventListener('click', function () {
  const rectangleWidth = getInputValueString('rectangle-input-w');
  const rectangleLength = getInputValueString('rectangle-input-l');

  if(validate('rectangle-input-w')===false || validate('rectangle-input-l')===false){
    document.getElementById('rectangle-input-w').value = "";
    document.getElementById('rectangle-input-l').value = "";
    return;
  }

  const rectangleArea = (parseFloat(rectangleWidth) * parseFloat(rectangleLength).toFixed(2));

  let rectangleObj = {
    'area': rectangleArea,
    'name': "Rectangle"
  }

  arryOfAreas.push(rectangleObj);

  document.getElementById('rectangle-formula-w').innerText = rectangleWidth;
  document.getElementById('rectangle-formula-l').innerText = rectangleLength;

  document.getElementById('rectangle-input-w').value = "";
    document.getElementById('rectangle-input-l').value = "";



  createTable();
})




// parallelogram area
document.getElementById('btn-calculate-para').addEventListener('click', function () {

  const paraBase = getInputValueString("para-input-b");
  const paraHeight = getInputValueString("para-input-h");

  if(validate('para-input-b')===false || validate('para-input-h')===false){
    document.getElementById('para-input-b').value = "";
    document.getElementById('para-input-h').value = "";
    return;
  }

  const paraArea = (parseFloat(paraBase) * parseFloat(paraHeight)).toFixed(2);

    
  let paraObj = {
    'area' : paraArea,
    'name' : "Parallelogram"
  }


  arryOfAreas.push(paraObj);


  document.getElementById('para-formula-b').innerText = paraBase;
  document.getElementById('para-formula-h').innerText = paraHeight;

  document.getElementById('para-input-b').value = "";
    document.getElementById('para-input-h').value = "";

  createTable();

})




// rhombus area
document.getElementById('btn-calculate-rhobmus').addEventListener('click', function () {
  const d1 = getInputValueString('rhombus-input-d1');
  const d2 = getInputValueString('rhombus-input-d2');

  if(validate('rhombus-input-d1')===false || validate('rhombus-input-d2')===false){
    document.getElementById('rhombus-input-d1').value = "";
    document.getElementById('rhombus-input-d2').value = "";
    return;
  }
  

  const rhombusArea = (0.5 * parseFloat(d1) * parseFloat(d2).toFixed(2));
    
  let rhombusObj = {
    'area' : rhombusArea,
    'name' : "Rhombus"
  }


  arryOfAreas.push(rhombusObj);


  document.getElementById('rhombus-formula-d1').innerText = d1;
  document.getElementById('rhombus-formula-d2').innerText = d2;

  document.getElementById('rhombus-input-d1').value = "";
  document.getElementById('rhombus-input-d2').value = "";




  createTable();

})


// pentagon area
document.getElementById('btn-calculate-pentagon').addEventListener('click', function () {
  const pentagonP = getInputValueString('pentagon-input-p');
  const pentagonB = getInputValueString('pentagon-input-b');

  if(validate('pentagon-input-p')===false || validate('pentagon-input-b')===false){
    document.getElementById('pentagon-input-p').value = "";
    document.getElementById('pentagon-input-b').value = "";
    return;
  }
  

  const pentagonArea = (.5 * parseFloat(pentagonP) * parseFloat(pentagonB).toFixed(2));
    
  let pentagonObj = {
    'area' : pentagonArea,
    'name' : "Pentagon"
  }


  arryOfAreas.push(pentagonObj);

  document.getElementById("pentagon-formula-p").innerText = pentagonP;
  document.getElementById("pentagon-formula-b").innerText = pentagonB;

  document.getElementById('pentagon-input-p').value = "";
  document.getElementById('pentagon-input-b').value = "";


  createTable();


})





// ellipse area
document.getElementById("btn-calculate-ellipse").addEventListener('click', function () {
  const ellipseA = getInputValueString("ellipse-input-a");
  const ellipseB = getInputValueString("ellipse-input-b");

  if(validate("ellipse-input-a")===false || validate("ellipse-input-b")===false){
    document.getElementById("ellipse-input-a").value = "";
    document.getElementById("ellipse-input-b").value = "";
    return;
  }

  const ellipseArea = (3.14 * parseFloat(ellipseA) * parseFloat(ellipseB)).toFixed(2);
    
  let ellipseObj = {
    'area' : ellipseArea,
    'name' : "Ellipse"
  }


  arryOfAreas.push(ellipseObj);

  document.getElementById("ellipse-formula-a").innerText = ellipseA;
  document.getElementById("ellipse-formula-b").innerText = ellipseB;

  document.getElementById("ellipse-input-a").value = "";
  document.getElementById("ellipse-input-b").value = "";



  createTable();
})





// random bg color
document.getElementById("triangle-card").addEventListener('mouseenter', function (){
  randomBackground("triangle-card")
})

document.getElementById("rectangle-card").addEventListener('mouseenter', function (){
  randomBackground("rectangle-card")
})
document.getElementById("para-card").addEventListener('mouseenter', function (){
  randomBackground("para-card")
})
document.getElementById("rhombus-card").addEventListener('mouseenter', function (){
  randomBackground("rhombus-card")
})
document.getElementById("pentagon-card").addEventListener('mouseenter', function (){
  randomBackground("pentagon-card")
})
document.getElementById("ellipse-card").addEventListener('mouseenter', function (){
  randomBackground("ellipse-card")
})

