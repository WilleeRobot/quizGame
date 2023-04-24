const parseHTML = (htmlData) => {
  let element = document.createElement("p");
  element.innerHTML = htmlData;
  return element.innerText;
};

export default parseHTML;
