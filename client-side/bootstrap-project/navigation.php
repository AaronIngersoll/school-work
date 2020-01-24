<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
<!-- Brand/logo -->
<a class="navbar-brand" href="index.php">Aaron's Computer History Museum</a>
<!-- Links -->
<ul class="navbar-nav">
<li class="nav-item">
<a class="nav-link" href="museum.php">Museum Photos</a>
</li>
<li class="nav-item">
<a class="nav-link" href="order.php">Order Photos</a>
</li>
</ul>
<ul class="navbar-nav ml-auto">
<li class="nav-item dropdown">
<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
<span class="fa fa-user"></span> Sign In
</a>
<div class="dropdown-menu dropdown-menu-right form-login stop-propagation" role="menu">
<div id="login-error">Incorrect username or password!</div>
<div class="form-group">
<label for="username"> <span class="fa fa-user"></span> Username</label>
<input type="text" class="form-control" id="username" name="username" placeholder="Enter username" />
</div>
<div class="form-group">
<label for="password"><span class="fa fa-lock"></span> Password</label>
<input type="password" class="form-control" id="thepassword" name="thepassword" placeholder="Password" />
<input type="checkbox" /> Stay logged in?
</div>
<button id="submitbutton" name="submitbutton" type="button" class="btn btn-success btn-block">
<span class="fa fa-ok"></span>Submit</button>
</div>
</li>
<li class="nav-item">
<a href="#" class="nav-link">
<span class="fa fa-plus-sign"></span> Register
</a>
</li>
</ul>
</nav>
