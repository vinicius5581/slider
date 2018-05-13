function Slider(el, data) {
  this.el = document.getElementById(el) || document.getElementsByTagName("BODY")[0];
  this.data = data;
  this.render();
}

Slider.prototype.render = function() {
  let wrapper = document.createElement('div');
  let slides = '';
  this.data.forEach(data => console.log(encodeURI(data.bg)));
  this.data.forEach(data => console.log(decodeURI(data.bg)));
  console.log(encodeURI('http://www.google.com/23'));
  this.data.forEach(data => slides += `
    <div class='slide' style='background: url('${encodeURI(data.bg)}');'>
      <p>${data.label}</p>
    </div>
  `);
  wrapper.innerHTML = slides;
  this.el.appendChild(wrapper);
}
