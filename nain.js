function soohelXobgta() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const natiijo = true;
      if (natiijo) {
        resolve({
          id: 30,
          name: "Xongor",
        });
      } else {
        reject(" Cilad ayaa jirta");
      }
    }, 3000);
  });
}
async function soobandhigXogta() {
  try {
    const user = await soohelXobgta();
    console.log(user);
  } catch (Cilad) {
    console.log(Cilad);
  }
}
soobandhigXogta();
