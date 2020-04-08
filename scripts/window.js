'use strict';

document.querySelector('#btnOk').addEventListener('click', async ev => {
  const btnOk = ev.target;
  btnOk.setAttribute('disabled', 'true');

  const message = document.querySelector('#message');
  message.innerText = 'Mounting...';

  const name = document.querySelector('#name').value;
  const url = document.querySelector("#url").value;
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  // if (url.substring(url.length - 1) === "/") {
  //     url = url.substring(0, url.length - 1);
  // }

  const request = {
    type: 'mount',
    authType: 'basic',
    name, url, username, password,
  };

  await browser.runtime.sendMessage(request)
    .then(window.close)
    .catch(error => {
      message.innerText = error.message;
      btnOk.removeAttribute("disabled");
    });
});