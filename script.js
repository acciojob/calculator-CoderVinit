//your code here
let inputField = document.getElementById("input");
let expression = "";

document.querySelectorAll("button").forEach(button=>{
	button.addEventListener("click",()=>{
		let id = button.id;
		// console.log(id)
		if(id.startsWith("block")){
			expression += button.textContent;
			console.log(expression)
		}
		else if(id === "plus"){
			expression += "+"
		}
		else if(id === "minus"){
			expression+= "-"
		}
		else if(id === "multiply"){
			expression += "*"
		}
		else if(id === "divide"){
			expression += "/"
		}
		else if(id === "dot"){
			expression += "."
		}
		else if(id === "open") {
            expression += "(";
        } 
		else if (id === "close") {
            expression += ")";
        }
		else if(id === "ans"){
			try {
				console.log(expression)
				expression = eval(expression);
				if(expression === Infinity) expression = "Infinity";
				if(isNaN(expression)) expression = "NaN"
			} catch (error) {
				expression = "Error"
			}
		}
		else if (id === "clr") {
            expression = "";
        } else if (id === "backspace") {
            expression = expression.slice(0, -1);
        }
        inputField.value = expression;
	})
})

