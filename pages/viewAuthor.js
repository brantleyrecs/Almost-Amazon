import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  const domString1 = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="card author-info-book" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${obj.first_name} ${obj.last_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${obj.email}</h6>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-author-btn--${obj.firebaseKey}"> View</i>
        <i class="fas fa-edit btn btn-info" id="edit-author-btn--${obj.firebaseKey}"> Update</i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${obj.firebaseKey}"> Delete</i>
        </div>
      </div> 
    </div>
  </div>
  `;
  renderToDOM('#view-author', domString1);

  let domString2 = '';
  obj.bookArray.forEach((item) => {
    domString2 += `
    <div class="card author-info-book">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
            <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}">Details</i>
            <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info">Edit</i>
            <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"> Delete</i>
        </div>
      </div>`;

    renderToDOM('#view-author-books', domString2);
  });
};

export default viewAuthor;
