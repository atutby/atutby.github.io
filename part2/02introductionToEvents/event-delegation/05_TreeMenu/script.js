    // поместить все текстовые узлы в элемент <span>
    // он занимает только то место, которое необходимо для текста
    for (let li of tree.querySelectorAll('li')) {
        let span = document.createElement('span');
        li.prepend(span);
        span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
      }
  
      //  ловим клики на всём дереве
      tree.onclick = function(event) {
  
        if (event.target.tagName != 'SPAN') {
          return;
        }
  
        let childrenContainer = event.target.parentNode.querySelector('ul');
        if (!childrenContainer) return; // нет детей
  
        childrenContainer.hidden = !childrenContainer.hidden;
      }