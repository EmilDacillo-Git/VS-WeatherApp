const errorPage = document.getElementById('error-modal');
const containerPanel = document.getElementById('contaner-panel');
export default function showErrorPage(){
    errorPage.style.display = 'flex';
    containerPanel.style.display = 'none';
}