---
layout: page
title: "Contact2"
description: "Have questions? I have answers (maybe)."
header-img: "img/contact-bg.jpg"
---


<form action="https://getsimpleform.com/messages?form_api_token=b77e92d46b08b1b80ff66b32b1b1deac" method="post">
  <!-- the redirect_to is optional, the form will redirect to the referrer on submission -->
  <input type='hidden' name='redirect_to' value='http://127.0.0.1:4000/thanks.html' />
  <!-- all your input fields here.... -->
  <input type='text' name='test' />
  <textarea name="message"></textarea>
  <input type='submit' value='Test form' />
</form>

<form action="https://getsimpleform.com/messages?form_api_token=b77e92d46b08b1b80ff66b32b1b1deac" method="post" class="form-inline">
      <input type="text" name="name" placeholder="Enter your name" class="form-control">
      <button type="submit" class="btn btn-primary">Submit test message</button>
</form>
