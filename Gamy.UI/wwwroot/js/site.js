const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search input[type=text]');

searchForm.addEventListener('submit', (event) => {
	event.preventDefault();
	alert(`You searched for "${searchInput.value}"`);
	searchInput.value = '';
});

<script>
  // Sepete ekle butonuna tıklandığında bir alert kutusu görüntüleyin
    var buttons = document.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            alert('Ürün sepetinize eklendi!');
        });
  }
</script>
