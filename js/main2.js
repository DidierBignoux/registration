async function TwilioNameLookup() {
  event.preventDefault();
  const form = event.target;
  const to = form.querySelector("[name=to]").value;
  const result = await fetch("https://twilio-lookup.p.rapidapi.com/PhoneNumbers/caller-name?phoneNumber=59473504&countryCode=230" + to, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "twilio-lookup.p.rapidapi.com",
      "x-rapidapi-key": "ec7c8e836emsh7fab1f5fcbcf066p117e76jsnddb4d706a567",
    },
  });
  const body = await result.json();
  console.log(body);
  if (body.callerName) {
    const name = body.callerName.caller_name;
    const kind = body.callerName.caller_type;
    alert(`Name: ${name}n` + `Kind: ${kind}`);
  } else {
    alert("Something went wrong!nn" + body.message);
  }
}
