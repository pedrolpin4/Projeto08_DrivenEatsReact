import desserts from "../../menu data/Desserts";
import drinks from "../../menu data/Drinks";
import meals from "../../menu data/Meals";
import "./PageContent.css"
import Option from "./Option";

const Menu = ({category, slogan, type}) => {
    if(category === "foods"){
        category = meals;
    } else if (category === "drinks") {
        category = drinks
    } else category = desserts

    const verifySelection = () =>{
        category.order = [];
        category.data.forEach(element => {
            if(element.isSelected){
                category.order.push({name: element.name, quantity: element.qty})
            }
        });
        if(category.order.length === 0){
            category.isSelected = false
        } else category.isSelected = true
    }

    return(
    <>
        <p className="containers-message">{slogan}</p>
        <div className = "options-container">
            {category.data.map((element, index) =>(
                  <Option 
                    element = {element} 
                    type = {type} 
                    index = {index} 
                    category = {category}
                    verifySelection = {verifySelection}
                  />
                ))
            }
        </div>
    </>
    )
}

export default Menu