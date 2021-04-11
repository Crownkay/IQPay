// MAIN JAVASCRIPT

// sidebar toggle

var sbToggleBtn = $('#sidebarToggler')

sbToggleBtn.on('click', () => {
  document.getElementById('sidebarToggler').classList.toggle('active')
  document.getElementById('sidebar').classList.toggle('sidebar-open')
})

