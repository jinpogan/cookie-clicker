async function a(){
  postMessage(true)
  await new Promise(r => setTimeout(r, 5000));
  postMessage(false)
}
a()
