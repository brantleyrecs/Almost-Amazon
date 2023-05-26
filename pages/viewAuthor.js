import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();

  let domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="card" style="width: 18rem;">
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
  </div>`;
  obj.bookObject.forEach((book) => {
    domString += `
    <div class="mt-5 d-flex flex-wrap">
      <div class="d-flex flex-column">
        <img src=${book.image} alt=${book.title} style="width: 300px;">
        <div class="mt-5">
          <i id="edit-book-btn--${book.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-book--${book.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>
        <div class="text-white ms-5 details">
        <h5>${book.title} by ${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
        Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
        <p>${book.description || ''}</p>
        <hr>
        <p>${book.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span>
          $${book.price}` : `$${book.price}`}</p>
      </div>
    </div>`;

    renderToDOM('#view', domString);
  });
};

export default viewAuthor;
