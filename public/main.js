function copyTextToClipboard(event) {
    var textToCopy = window.location.href + event.target.parentNode.id;

    if (!textToCopy) {
      console.error("Input field not found");
      return;
    }

    var tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");

    document.body.removeChild(tempInput);
  }

  var copyButtons = document.getElementsByClassName("copy-button");
  for (var i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", copyTextToClipboard);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var table = document.getElementById('urlTable');
    var rows = table.getElementsByTagName('tr');
    if (rows.length > 0) {
      var firstRow = rows[0];
      firstRow.classList.add('table-info');

      setTimeout(function () {
        firstRow.classList.remove('table-info');
      }, 3000);
    }
  });