export function showModal(languageId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  modalBody.textContent = `More info about ${languageId}`;
  modal.style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('modal-close');
  if (closeBtn) {
    closeBtn.onclick = () => { modal.style.display = 'none'; };
  }
  window.onclick = (event) => {
    if (event.target === modal) modal.style.display = 'none';
  };
});