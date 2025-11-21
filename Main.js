// touchControls.js
document.addEventListener("DOMContentLoaded", () => {
    const runButton = document.createElement("div");
    runButton.id = "runButton";
    runButton.style = `
        position: fixed;
        bottom: 100px;
        right: 50px;
        width: 60px;
        height: 60px;
        background: rgba(0, 128, 255, 0.7);
        border: 2px solid #0055aa;
        border-radius: 8px;
        z-index: 10000;
    `;
    document.body.appendChild(runButton);

    runButton.addEventListener("touchstart", () => {
        for(let i = 0; i < 5; i++){
            setTimeout(() => {
                mc.inputState['sprint'] = true;
                setTimeout(() => { mc.inputState['sprint'] = false; }, 50);
            }, i * 100);
        }
    });
});