

function calculateBMR(){
    const weight=document.querySelector("#weight").value
    const height=document.querySelector("#height").value
    const age=document.querySelector("#age").value
    const gender = document.querySelector('input[name="gender"]:checked')?.value; 
    console.log("Weight:", weight, "Height:", height, "Age:", age, "Gender:", gender); 
    let bmr;
    if(isNaN(weight) || isNaN(height) || isNaN(age) ||!gender){
     //alert("Please enter valid values for weight, height and age");
     document.getElementById("result").innerText="Fill all the fields";
    }else{
     if (gender === "male") {
      bmr=((10*weight) +(6.25*height)-(5*age)+5);
     // document.getElementById("result").innerText=bmr;
    }
    else if (gender === "female") {
        bmr=((10*weight) +(6.25*height)-(5*age)-161);
       // document.getElementById("result").innerText=bmr;
    }
    
    document.getElementById("result").innerText = bmr.toFixed(2) + " kcal/day is your BMR.";

}
}

function clearform(){
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("age").value = "";
    document.getElementById("result").innerText = "";
    
}