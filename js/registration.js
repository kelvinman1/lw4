function validEmail(email){
  var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
  return pattern.test(email);
}

class RegistrationForm {
  constructor(formElement) {
    this.form = formElement;
    this.formEmail = $(formElement).find('.form_email').val();
    this.formPassword = $(formElement).find('.form_password').val();
    this.formPasswordRepeat = $(formElement).find('.form_password_repeat').val();
    this.formCheckbox = $(formElement).find('.form_checkbox').prop('checked');
  }
  validate() {
    if (!validEmail(this.formEmail)){
      this.errorMsg = 'Не корректный email!';
      return false;
    }
    
    if (this.formPassword.length < 6){
      this.errorMsg = 'Пароль должен быть длиннее 6 символов!';
      return false;
    }
    
    if (this.formPassword !== this.formPasswordRepeat){
      this.errorMsg = 'Пароль не совпадает!';
      return false;
    }
    
    if (!this.formCheckbox){
      this.errorMsg = 'Вы не согласны с правилами сайта!';
      return false;
    }
    
    return true;
  }
  success() {
    alert('Вы зарегистрированы.');
  }
  error() {
    alert(this.errorMsg);
  }
}

$('.registration_form').on('submit', function () {
  var form = new RegistrationForm(document.getElementsByClassName('registration_form')[0]);
  if (form.validate()) {
    form.success();
  }
  else {
    form.error();
  }
  return false;
});








