// Normal synchronous function
function syncProcess() {
  console.log("🧱 [SYNC] Step 1: Start data processing");

  let sum = 0;
  for (let i = 0; i < 30; i++) {
    console.log(`🧱 [SYNC] Step 2.${i + 1}: Calculating...`);
    sum += i;
  }

  console.log("🧱 [SYNC] Step 3: Final result ready");
  return sum;
}

// Asynchronous function (notice async keyword)
async function asyncProcess() {
  console.log("⚙️ [ASYNC] Step 1: Start async data processing");

  let sum = 0;
  for (let i = 0; i < 30; i++) {
    console.log(`⚙️ [ASYNC] Step 2.${i + 1}: Calculating...`);
    sum += i;
  }

  console.log("⚙️ [ASYNC] Step 3: Final result ready");
  return sum;
}

// Main program
console.log("🚀 Program started");

const X = syncProcess();
console.log("🧾 syncProcess() returned:", X);

const Y = asyncProcess();
console.log("🧾 asyncProcess() returned:", Y);

console.log("🚀 Program ended");
