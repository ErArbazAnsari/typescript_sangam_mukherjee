type distance = { x: number; y: number };

function findDistance(d: distance): number {
    return Math.hypot(d.x, d.y);
}

findDistance({ x: 3, y: 5 });
