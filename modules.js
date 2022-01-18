let ui = {};
ui.navigation = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">BadBank</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#createAccount" onclick="loadCreateAccount()" id="createAccount">Create Account</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadLogin()" id="login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadDeposit()">Deposit</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadWithdraw()">Withdraw</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadBalance()">Balance</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadAllData()">AllData</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        User
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;

let navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;

ui.createAccount = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Create Account</div>
    <div class="card-body">
        Name <br>
        <input type="input" class="form-control" id="name" placeholder="Enter name"/><br/>
        Email Address<br>
        <input type="input" class="form-control" id="email" placeholder="Enter email"/><br/>
        Password<br>
        <input type="password" class="form-control" id="password" placeholder="Enter password"/><br/>
        <button type="submit" id="submit" class="btn" onclick="create()">Create Account</button>
        <div id="createStatus"></div>
    </div>
</div>
`;

ui.login = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Login</div>
    <div class="card-body">
        Email<br>
        <input type="input" class="form-control" id="loginEmail" placeholder="Enter email"/><br/>
        Password<br>
        <input type="password" class="form-control" id="loginPassword" placeholder="Enter your password"/><br/>
        <button type="submit" id="submit" class="btn" onclick="login()">Login</button>
        <div id="loginStatus"></div>
    </div>
</div>
`;

ui.deposit = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Deposit</div>
    <div class="card-body">
        Email<br>
        <input type="input" class="form-control" id="depositEmail" placeholder="Enter email"/><br/>
        Amount<br>
        <input type="number" class="form-control" id="depositAmount" placeholder="Enter amount"/><br/>
        <button type="submit" id="submit" class="btn" onclick="deposit()">Deposit</button>
        <div id="depositStatus"></div>
    </div>
</div>
`;

ui.withdraw = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Withdraw</div>
    <div class="card-body">
        Email<br>
        <input type="input" class="form-control" id="withdrawEmail" placeholder="Enter email"/><br/>
        Amount<br>
        <input type="number" class="form-control" id="withdrawAmount" placeholder="Enter amount"/><br/>
        <button type="submit" id="submit" class="btn" onclick="withdraw()">Submit</button>
        <div id="withdrawStatus"></div>
    </div>
</div>
`;

ui.balance = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Balance</div>
    <div class="card-body">
        Email<br>
        <input type="input" class="form-control" id="depositEmail" placeholder="Enter email"/><br/>
        Amount<br>
        <button type="submit" id="submit" class="btn" onclick="balance()">Show Balance</button>
        <div id="balanceStatus"></div>
    </div>
</div>
`;

ui.default = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">BadBank Landing Module</div>
    <div class="card-body">
        <h5 class="card-title">Welcome to the Bank</h5>
        <p class="card-text">Yo can move around using the navigation bar.</p>
        <img src="bank.png" class="img-fluid" alt="Responsive image" />
    </div>
</div>
`;

ui.allData = `
<h5>All data in Store</h5>
<button type="button" class="btn btn-secondary" onclick="allData()">Show All Data</button>
<br />
<code id="allDataStatus" style="display: block; margin-top: 1em;"></code>
`;


const loadCreateAccount = () => target.innerHTML = ui.createAccount;
const loadLogin = () => target.innerHTML = ui.login;
const loadDeposit = () => target.innerHTML = ui.deposit;
const loadWithdraw = () => target.innerHTML = ui.withdraw;
const loadBalance = () => target.innerHTML = ui.balance;
const defaultModule = () => target.innerHTML = ui.default;
const loadAllData = () => target.innerHTML = ui.allData;

loadCreateAccount();




