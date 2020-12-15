
function doGet()
{
  return HtmlService
      .createTemplateFromFile('index')
      .evaluate();
}

function getRequestApp()
{
	return new AppLib.RequestsApp('https://docs.google.com/spreadsheets/d/1YC5IHdq6C0OawmMzDy8ezXxAkybtcTMSsq9SMCHxCDI/edit');
}

function getChallenge()
{
	let db = new AppLib.DataBase('https://docs.google.com/spreadsheets/d/1YC5IHdq6C0OawmMzDy8ezXxAkybtcTMSsq9SMCHxCDI/edit')
	return db.getChallenge();
}

function loadRequests()
{
	return getRequestApp().getNewRequests();
}

function requestDetails(id)
{
	return getRequestApp().requestDetails(id);
}

function approveRequest(id)
{
	return getRequestApp().approveRequest(id);
}

function rejectRequest(id)
{
	return getRequestApp().rejectRequest(id);
}

function newRequest(req)
{
	return getRequestApp().newRequest(req);
}

function approvedRequests()
{
	return getRequestApp().approvedRequests();
}