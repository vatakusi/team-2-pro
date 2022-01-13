(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileLink0 = document.querySelector('[data-menu-link0]');
  const mobileLink1 = document.querySelector('[data-menu-link1]');
  const mobileLink2 = document.querySelector('[data-menu-link2]');
  const mobileLink3 = document.querySelector('[data-menu-link3]');
  const wrapper = document.querySelector('[data-wrapper]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('active');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    document.body.classList.toggle('modal-open');
    mobileMenuRef.classList.toggle('active');
    wrapper.classList.toggle('wrapper');
  });

  mobileLink0.addEventListener('click', removeMenu);
  mobileLink1.addEventListener('click', removeMenu);
  mobileLink2.addEventListener('click', removeMenu);
  mobileLink3.addEventListener('click', removeMenu);

  const refs = {
    openBuyBtn: document.querySelector('[data-buy-btn="btn"]'),
    openBuyBtnMenu: document.querySelector('[data-buy-btn="btn-menu"]'),
    closeBuyBtn: document.querySelector('[data-buy-close]'),
    modalBuy: document.querySelector('[data-modal-buy]'),
  };

  refs.openBuyBtn.addEventListener('click', toggleModal);
  refs.openBuyBtnMenu.addEventListener('click', () => {
    refs.modalBuy.classList.toggle('is-hidden');
    mobileMenuRef.classList.remove('active');
    menuBtnRef.classList.remove('active');
  });
  refs.closeBuyBtn.addEventListener('click', toggleModal);
  refs.closeBuyBtn.addEventListener('click', removeMenu);

  function removeMenu() {
    mobileMenuRef.classList.remove('active');
    document.body.classList.remove('modal-open');
    menuBtnRef.classList.remove('active');
    wrapper.classList.remove('wrapper');
  }

  function toggleModal() {
    refs.modalBuy.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
    wrapper.classList.toggle('wrapper');
  }
})();
