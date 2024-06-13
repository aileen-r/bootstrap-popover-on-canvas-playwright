const WEEK_WIDTH = 150;

function drawHeatmapCanvas() {
    const canvasWidth = document.getElementById("wrapper")?.clientWidth;
    const heatmapCanvas = document.getElementById("heatmap-canvas");
    const ctx = heatmapCanvas?.getContext("2d");
    if (!ctx) {
        return;
    }
    heatmapCanvas.width = canvasWidth
    heatmapCanvas.height = 5;
    const blockCount = Math.ceil(canvasWidth / 150);
    for (let i = 0; i <= blockCount; i++) {
        const blockStart = i * WEEK_WIDTH;

        ctx.beginPath();
        debugger;
        const color = i % 2 === 0 ? "burlywood" : "peru"
        ctx.fillStyle = color;
        ctx.rect(blockStart, 0, WEEK_WIDTH, 5);
        ctx.fill();
    }
}

function showHeatmapTooltip() {
    const tooltip = document.getElementById("heatmap-shadow");
    const tooltipContent = document.getElementById("heatmap-tooltip-content");
    const tooltipArrow = document.getElementById("heatmap-tooltip-arrow");
    const heatmapShadow = document.getElementById("heatmap-shadow");

    tooltipContent.innerHTML = "Tooltip content";
    tooltip.style.opacity = "1";
}

drawHeatmapCanvas();
