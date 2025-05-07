document.getElementById("buscar").addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }
        return response.json();
      })
      .then(produtos => {
        const tabela = document.getElementById("tabela-produtos").querySelector("tbody");
        tabela.innerHTML = ""; // Limpa os dados anteriores
        
        for (var i = 0; i < 10; i++) {
          const p = produtos[i];
          const row = `
            <tr>
              <td>${p.id}</td>
              <td>${p.title}</td>
              <td>R$ ${p.price.toFixed(2)}</td>
              <td>${p.category}</td>
              <td>${p.description.substring(0, 100)}...</td>
              <td><img src="${p.image}" alt="${p.title}" style="width: 50px;"></td>
            </tr>
          `;
          tabela.innerHTML += row;
        }
      })
      .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao consultar os produtos.");
      });
  });