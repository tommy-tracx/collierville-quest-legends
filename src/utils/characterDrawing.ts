export function drawXavier(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  scale = 1,
  animated = false,
  frameCount: number,
  xavierImage?: HTMLImageElement,
  xavierImageLoaded?: boolean
) {
  const bobOffset = animated ? Math.sin(frameCount * 0.1) * 3 : 0;
  const currentY = y + bobOffset;
  
  // Shadow
  ctx.save();
  ctx.globalAlpha = 0.3;
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.ellipse(x, y + 100 * scale, 30 * scale, 8 * scale, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  if (xavierImageLoaded && xavierImage) {
    // Draw Xavier's real photo as a circular avatar
    ctx.save();
    
    // Create circular clipping path
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 35 * scale, 0, Math.PI * 2);
    ctx.clip();
    
    // Draw the image scaled and centered
    const imgSize = 70 * scale;
    ctx.drawImage(xavierImage, x - imgSize/2, currentY - 45 * scale, imgSize, imgSize);
    
    ctx.restore();
    
    // Add a cool border around the photo
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 3 * scale;
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 35 * scale, 0, Math.PI * 2);
    ctx.stroke();
    
    // Add glow effect
    ctx.save();
    ctx.shadowColor = '#FFD700';
    ctx.shadowBlur = 10 * scale;
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2 * scale;
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 35 * scale, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  } else {
    // Fallback pixel art for Xavier
    // Head
    ctx.fillStyle = '#8B6F47';
    ctx.beginPath();
    ctx.arc(x, currentY, 20 * scale, 0, Math.PI * 2);
    ctx.fill();

    // Hair with gradient
    const hairGradient = ctx.createRadialGradient(x, currentY - 10 * scale, 0, x, currentY - 10 * scale, 20 * scale);
    hairGradient.addColorStop(0, '#2a2a2a');
    hairGradient.addColorStop(1, '#1a1a1a');
    ctx.fillStyle = hairGradient;
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 20 * scale, Math.PI, 0);
    ctx.fill();

    // Beard with gradient
    const beardGradient = ctx.createLinearGradient(x - 15 * scale, currentY + 5 * scale, x + 15 * scale, currentY + 20 * scale);
    beardGradient.addColorStop(0, '#2a2a2a');
    beardGradient.addColorStop(1, '#1a1a1a');
    ctx.fillStyle = beardGradient;
    ctx.fillRect(x - 15 * scale, currentY + 5 * scale, 30 * scale, 15 * scale);

    // Eyes with shine
    ctx.fillStyle = 'white';
    ctx.fillRect(x - 8 * scale, currentY - 5 * scale, 6 * scale, 6 * scale);
    ctx.fillRect(x + 2 * scale, currentY - 5 * scale, 6 * scale, 6 * scale);
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(x - 6 * scale, currentY - 3 * scale, 3 * scale, 3 * scale);
    ctx.fillRect(x + 3 * scale, currentY - 3 * scale, 3 * scale, 3 * scale);
    
    // Eye shine
    ctx.fillStyle = 'white';
    ctx.fillRect(x - 7 * scale, currentY - 4 * scale, 1 * scale, 1 * scale);
    ctx.fillRect(x + 2 * scale, currentY - 4 * scale, 1 * scale, 1 * scale);

    // Earring with glow
    ctx.save();
    ctx.shadowColor = '#FFD700';
    ctx.shadowBlur = 5;
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(x - 20 * scale, currentY, 2 * scale, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // Body with gradient (beige sweater) - always draw this
  const bodyGradient = ctx.createLinearGradient(x - 25 * scale, currentY + 20 * scale, x + 25 * scale, currentY + 80 * scale);
  bodyGradient.addColorStop(0, '#E4B584');
  bodyGradient.addColorStop(1, '#D4A574');
  ctx.fillStyle = bodyGradient;
  ctx.fillRect(x - 25 * scale, currentY + 20 * scale, 50 * scale, 60 * scale);

  // Arms
  ctx.fillRect(x - 35 * scale, currentY + 25 * scale, 10 * scale, 40 * scale);
  ctx.fillRect(x + 25 * scale, currentY + 25 * scale, 10 * scale, 40 * scale);
}

export function drawMorty(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  scale = 1,
  animated = false,
  frameCount: number,
  mortyImage?: HTMLImageElement,
  mortyImageLoaded?: boolean
) {
  const bobOffset = animated ? Math.sin(frameCount * 0.12) * 3 : 0;
  const currentY = y + bobOffset;
  
  // Shadow
  ctx.save();
  ctx.globalAlpha = 0.3;
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.ellipse(x, y + 100 * scale, 30 * scale, 8 * scale, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  if (mortyImageLoaded && mortyImage) {
    // Draw Morty's real photo as a circular avatar
    ctx.save();
    
    // Create circular clipping path
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 35 * scale, 0, Math.PI * 2);
    ctx.clip();
    
    // Draw the image scaled and centered
    const imgSize = 70 * scale;
    ctx.drawImage(mortyImage, x - imgSize/2, currentY - 45 * scale, imgSize, imgSize);
    
    ctx.restore();
    
    // Add a fun border around Morty's photo (bright blue like his shirt)
    ctx.strokeStyle = '#00BFFF';
    ctx.lineWidth = 3 * scale;
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 35 * scale, 0, Math.PI * 2);
    ctx.stroke();
    
    // Add glow effect
    ctx.save();
    ctx.shadowColor = '#00BFFF';
    ctx.shadowBlur = 10 * scale;
    ctx.strokeStyle = '#00BFFF';
    ctx.lineWidth = 2 * scale;
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 35 * scale, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  } else {
    // Fallback pixel art for Morty
    // Head
    ctx.fillStyle = '#FDBCB4';
    ctx.beginPath();
    ctx.arc(x, currentY, 20 * scale, 0, Math.PI * 2);
    ctx.fill();

    // Hair (brown)
    const hairGradient = ctx.createRadialGradient(x, currentY - 10 * scale, 0, x, currentY - 10 * scale, 20 * scale);
    hairGradient.addColorStop(0, '#8B4513');
    hairGradient.addColorStop(1, '#654321');
    ctx.fillStyle = hairGradient;
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 20 * scale, Math.PI, 0);
    ctx.fill();

    // Eyes with shine
    ctx.fillStyle = 'white';
    ctx.fillRect(x - 8 * scale, currentY - 5 * scale, 6 * scale, 6 * scale);
    ctx.fillRect(x + 2 * scale, currentY - 5 * scale, 6 * scale, 6 * scale);
    ctx.fillStyle = '#654321';
    ctx.fillRect(x - 6 * scale, currentY - 3 * scale, 3 * scale, 3 * scale);
    ctx.fillRect(x + 3 * scale, currentY - 3 * scale, 3 * scale, 3 * scale);
    
    // Eye shine
    ctx.fillStyle = 'white';
    ctx.fillRect(x - 7 * scale, currentY - 4 * scale, 1 * scale, 1 * scale);
    ctx.fillRect(x + 2 * scale, currentY - 4 * scale, 1 * scale, 1 * scale);

    // Big smile
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 2 * scale;
    ctx.beginPath();
    ctx.arc(x, currentY + 5 * scale, 8 * scale, 0, Math.PI);
    ctx.stroke();
  }

  // Body with gradient (bright blue shirt like in photo)
  const bodyGradient = ctx.createLinearGradient(x - 25 * scale, currentY + 20 * scale, x + 25 * scale, currentY + 80 * scale);
  bodyGradient.addColorStop(0, '#00BFFF');
  bodyGradient.addColorStop(1, '#0099CC');
  ctx.fillStyle = bodyGradient;
  ctx.fillRect(x - 25 * scale, currentY + 20 * scale, 50 * scale, 60 * scale);

  // Arms
  ctx.fillRect(x - 35 * scale, currentY + 25 * scale, 10 * scale, 40 * scale);
  ctx.fillRect(x + 25 * scale, currentY + 25 * scale, 10 * scale, 40 * scale);

  // Add backpack straps (like in the photo)
  ctx.fillStyle = '#333';
  ctx.fillRect(x - 15 * scale, currentY + 30 * scale, 5 * scale, 30 * scale);
  ctx.fillRect(x + 10 * scale, currentY + 30 * scale, 5 * scale, 30 * scale);
}

export function drawMike(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  scale = 1,
  animated = false,
  frameCount: number,
  mikeImage?: HTMLImageElement,
  mikeImageLoaded?: boolean
) {
  const bobOffset = animated ? Math.sin(frameCount * 0.11) * 3 : 0;
  const currentY = y + bobOffset;
  
  // Shadow
  ctx.save();
  ctx.globalAlpha = 0.3;
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.ellipse(x, y + 100 * scale, 30 * scale, 8 * scale, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  if (mikeImageLoaded && mikeImage) {
    // Draw Mike's real photo as a circular avatar
    ctx.save();
    
    // Create circular clipping path
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 35 * scale, 0, Math.PI * 2);
    ctx.clip();
    
    // Draw the image scaled and centered
    const imgSize = 70 * scale;
    ctx.drawImage(mikeImage, x - imgSize/2, currentY - 45 * scale, imgSize, imgSize);
    
    ctx.restore();
    
    // Add a cafe-themed border around Mike's photo (coffee brown)
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 3 * scale;
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 35 * scale, 0, Math.PI * 2);
    ctx.stroke();
    
    // Add glow effect
    ctx.save();
    ctx.shadowColor = '#8B4513';
    ctx.shadowBlur = 10 * scale;
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2 * scale;
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 35 * scale, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  } else {
    // Fallback pixel art for Mike
    // Head
    ctx.fillStyle = '#FDBCB4';
    ctx.beginPath();
    ctx.arc(x, currentY, 20 * scale, 0, Math.PI * 2);
    ctx.fill();

    // Hair (dark brown)
    const hairGradient = ctx.createRadialGradient(x, currentY - 10 * scale, 0, x, currentY - 10 * scale, 20 * scale);
    hairGradient.addColorStop(0, '#4A4A4A');
    hairGradient.addColorStop(1, '#2A2A2A');
    ctx.fillStyle = hairGradient;
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 20 * scale, Math.PI, 0);
    ctx.fill();

    // Eyes with shine
    ctx.fillStyle = 'white';
    ctx.fillRect(x - 8 * scale, currentY - 5 * scale, 6 * scale, 6 * scale);
    ctx.fillRect(x + 2 * scale, currentY - 5 * scale, 6 * scale, 6 * scale);
    ctx.fillStyle = '#2A2A2A';
    ctx.fillRect(x - 6 * scale, currentY - 3 * scale, 3 * scale, 3 * scale);
    ctx.fillRect(x + 3 * scale, currentY - 3 * scale, 3 * scale, 3 * scale);
    
    // Eye shine
    ctx.fillStyle = 'white';
    ctx.fillRect(x - 7 * scale, currentY - 4 * scale, 1 * scale, 1 * scale);
    ctx.fillRect(x + 2 * scale, currentY - 4 * scale, 1 * scale, 1 * scale);

    // Friendly smile
    ctx.strokeStyle = '#2A2A2A';
    ctx.lineWidth = 2 * scale;
    ctx.beginPath();
    ctx.arc(x, currentY + 5 * scale, 8 * scale, 0, Math.PI);
    ctx.stroke();
  }

  // Body with gradient (cafe manager apron style - brown)
  const bodyGradient = ctx.createLinearGradient(x - 25 * scale, currentY + 20 * scale, x + 25 * scale, currentY + 80 * scale);
  bodyGradient.addColorStop(0, '#8B4513');
  bodyGradient.addColorStop(1, '#654321');
  ctx.fillStyle = bodyGradient;
  ctx.fillRect(x - 25 * scale, currentY + 20 * scale, 50 * scale, 60 * scale);

  // Arms
  ctx.fillRect(x - 35 * scale, currentY + 25 * scale, 10 * scale, 40 * scale);
  ctx.fillRect(x + 25 * scale, currentY + 25 * scale, 10 * scale, 40 * scale);

  // Add apron strings (cafe manager detail)
  ctx.fillStyle = '#333';
  ctx.fillRect(x - 5 * scale, currentY + 30 * scale, 3 * scale, 25 * scale);
  ctx.fillRect(x + 2 * scale, currentY + 30 * scale, 3 * scale, 25 * scale);
}

export function drawCarson(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  scale = 1,
  animated = false,
  frameCount: number,
  carsonImage?: HTMLImageElement,
  carsonImageLoaded?: boolean
) {
  const bobOffset = animated ? Math.sin(frameCount * 0.13) * 3 : 0;
  const currentY = y + bobOffset;
  
  // Shadow
  ctx.save();
  ctx.globalAlpha = 0.3;
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.ellipse(x, y + 100 * scale, 30 * scale, 8 * scale, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  if (carsonImageLoaded && carsonImage) {
    // Draw Carson's real photo as a circular avatar
    ctx.save();
    
    // Create circular clipping path
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 35 * scale, 0, Math.PI * 2);
    ctx.clip();
    
    // Draw the image scaled and centered
    const imgSize = 70 * scale;
    ctx.drawImage(carsonImage, x - imgSize/2, currentY - 45 * scale, imgSize, imgSize);
    
    ctx.restore();
    
    // Add a night-themed border around Carson's photo (royal blue)
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 3 * scale;
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 35 * scale, 0, Math.PI * 2);
    ctx.stroke();
    
    // Add glow effect
    ctx.save();
    ctx.shadowColor = '#4169E1';
    ctx.shadowBlur = 10 * scale;
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 2 * scale;
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 35 * scale, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  } else {
    // Fallback pixel art for Carson
    // Head
    ctx.fillStyle = '#FDBCB4';
    ctx.beginPath();
    ctx.arc(x, currentY, 20 * scale, 0, Math.PI * 2);
    ctx.fill();

    // Hair (dark hair for night shift worker)
    const hairGradient = ctx.createRadialGradient(x, currentY - 10 * scale, 0, x, currentY - 10 * scale, 20 * scale);
    hairGradient.addColorStop(0, '#1a1a1a');
    hairGradient.addColorStop(1, '#0a0a0a');
    ctx.fillStyle = hairGradient;
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 20 * scale, Math.PI, 0);
    ctx.fill();

    // Eyes with shine (slightly tired look for night shift)
    ctx.fillStyle = 'white';
    ctx.fillRect(x - 8 * scale, currentY - 5 * scale, 6 * scale, 6 * scale);
    ctx.fillRect(x + 2 * scale, currentY - 5 * scale, 6 * scale, 6 * scale);
    ctx.fillStyle = '#2a2a2a';
    ctx.fillRect(x - 6 * scale, currentY - 3 * scale, 3 * scale, 3 * scale);
    ctx.fillRect(x + 3 * scale, currentY - 3 * scale, 3 * scale, 3 * scale);
    
    // Eye shine
    ctx.fillStyle = 'white';
    ctx.fillRect(x - 7 * scale, currentY - 4 * scale, 1 * scale, 1 * scale);
    ctx.fillRect(x + 2 * scale, currentY - 4 * scale, 1 * scale, 1 * scale);

    // Slight stubble/tired expression
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1.5 * scale;
    ctx.beginPath();
    ctx.arc(x, currentY + 5 * scale, 6 * scale, 0, Math.PI);
    ctx.stroke();

    // Add glasses for night work
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2 * scale;
    ctx.beginPath();
    ctx.arc(x - 8 * scale, currentY - 2 * scale, 8 * scale, 0, Math.PI * 2);
    ctx.arc(x + 8 * scale, currentY - 2 * scale, 8 * scale, 0, Math.PI * 2);
    ctx.stroke();
    
    // Glasses bridge
    ctx.beginPath();
    ctx.moveTo(x - 1 * scale, currentY - 2 * scale);
    ctx.lineTo(x + 1 * scale, currentY - 2 * scale);
    ctx.stroke();
  }

  // Body with gradient (night shift uniform - dark blue)
  const bodyGradient = ctx.createLinearGradient(x - 25 * scale, currentY + 20 * scale, x + 25 * scale, currentY + 80 * scale);
  bodyGradient.addColorStop(0, '#4169E1');
  bodyGradient.addColorStop(1, '#2E4BC7');
  ctx.fillStyle = bodyGradient;
  ctx.fillRect(x - 25 * scale, currentY + 20 * scale, 50 * scale, 60 * scale);

  // Arms
  ctx.fillRect(x - 35 * scale, currentY + 25 * scale, 10 * scale, 40 * scale);
  ctx.fillRect(x + 25 * scale, currentY + 25 * scale, 10 * scale, 40 * scale);

  // Add name tag (night desk staff detail)
  ctx.fillStyle = '#FFD700';
  ctx.fillRect(x + 5 * scale, currentY + 35 * scale, 15 * scale, 8 * scale);
  ctx.fillStyle = '#333';
  ctx.font = `${4 * scale}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('CARSON', x + 12.5 * scale, currentY + 40 * scale);

  // Add coffee cup (night shift essential)
  ctx.fillStyle = '#8B4513';
  ctx.fillRect(x - 20 * scale, currentY + 50 * scale, 6 * scale, 8 * scale);
  ctx.fillStyle = '#654321';
  ctx.fillRect(x - 19 * scale, currentY + 52 * scale, 4 * scale, 4 * scale);
  // Steam from coffee
  ctx.strokeStyle = '#ccc';
  ctx.lineWidth = 1 * scale;
  ctx.beginPath();
  ctx.moveTo(x - 17 * scale, currentY + 48 * scale);
  ctx.quadraticCurveTo(x - 15 * scale, currentY + 44 * scale, x - 17 * scale, currentY + 40 * scale);
  ctx.stroke();
}

export function drawAva(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  scale = 1,
  animated = false,
  frameCount: number,
  avaImage?: HTMLImageElement,
  avaImageLoaded?: boolean
) {
  const bobOffset = animated ? Math.sin(frameCount * 0.12) * 3 : 0;
  const currentY = y + bobOffset;

  // Shadow
  ctx.save();
  ctx.globalAlpha = 0.3;
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.ellipse(x, y + 100 * scale, 30 * scale, 8 * scale, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  if (avaImageLoaded && avaImage) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 35 * scale, 0, Math.PI * 2);
    ctx.clip();
    const imgSize = 70 * scale;
    ctx.drawImage(avaImage, x - imgSize / 2, currentY - 45 * scale, imgSize, imgSize);
    ctx.restore();

    ctx.strokeStyle = '#D2691E';
    ctx.lineWidth = 3 * scale;
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 35 * scale, 0, Math.PI * 2);
    ctx.stroke();

    ctx.save();
    ctx.shadowColor = '#D2691E';
    ctx.shadowBlur = 10 * scale;
    ctx.strokeStyle = '#D2691E';
    ctx.lineWidth = 2 * scale;
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 35 * scale, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  } else {
    ctx.fillStyle = '#F1C27D';
    ctx.beginPath();
    ctx.arc(x, currentY, 20 * scale, 0, Math.PI * 2);
    ctx.fill();

    const hairGradient = ctx.createRadialGradient(x, currentY - 10 * scale, 0, x, currentY - 10 * scale, 20 * scale);
    hairGradient.addColorStop(0, '#8B4513');
    hairGradient.addColorStop(1, '#5D3311');
    ctx.fillStyle = hairGradient;
    ctx.beginPath();
    ctx.arc(x, currentY - 10 * scale, 20 * scale, Math.PI, 0);
    ctx.fill();

    ctx.fillStyle = 'white';
    ctx.fillRect(x - 8 * scale, currentY - 5 * scale, 6 * scale, 6 * scale);
    ctx.fillRect(x + 2 * scale, currentY - 5 * scale, 6 * scale, 6 * scale);
    ctx.fillStyle = '#5D3311';
    ctx.fillRect(x - 6 * scale, currentY - 3 * scale, 3 * scale, 3 * scale);
    ctx.fillRect(x + 3 * scale, currentY - 3 * scale, 3 * scale, 3 * scale);
    ctx.fillStyle = 'white';
    ctx.fillRect(x - 7 * scale, currentY - 4 * scale, 1 * scale, 1 * scale);
    ctx.fillRect(x + 2 * scale, currentY - 4 * scale, 1 * scale, 1 * scale);

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2 * scale;
    ctx.beginPath();
    ctx.arc(x - 8 * scale, currentY - 2 * scale, 9 * scale, 0, Math.PI * 2);
    ctx.arc(x + 8 * scale, currentY - 2 * scale, 9 * scale, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x - 8 * scale + 9 * scale, currentY - 2 * scale);
    ctx.lineTo(x + 8 * scale - 9 * scale, currentY - 2 * scale);
    ctx.stroke();

    ctx.save();
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = '#ccccff';
    ctx.beginPath();
    ctx.arc(x - 8 * scale, currentY - 2 * scale, 9 * scale, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + 8 * scale, currentY - 2 * scale, 9 * scale, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.strokeStyle = '#5D3311';
    ctx.lineWidth = 2 * scale;
    ctx.beginPath();
    ctx.arc(x, currentY + 6 * scale, 8 * scale, 0, Math.PI);
    ctx.stroke();
  }

  const bodyGradient = ctx.createLinearGradient(x - 25 * scale, currentY + 20 * scale, x + 25 * scale, currentY + 80 * scale);
  bodyGradient.addColorStop(0, '#D2691E');
  bodyGradient.addColorStop(1, '#A0522D');
  ctx.fillStyle = bodyGradient;
  ctx.fillRect(x - 25 * scale, currentY + 20 * scale, 50 * scale, 60 * scale);

  ctx.fillRect(x - 35 * scale, currentY + 25 * scale, 10 * scale, 40 * scale);
  ctx.fillRect(x + 25 * scale, currentY + 25 * scale, 10 * scale, 40 * scale);

  ctx.fillStyle = '#333';
  ctx.fillRect(x - 5 * scale, currentY + 30 * scale, 3 * scale, 25 * scale);
  ctx.fillRect(x + 2 * scale, currentY + 30 * scale, 3 * scale, 25 * scale);
}
export function drawMemberAvatar(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  animated = false,
  frameCount: number
) {
  const bobOffset = animated ? Math.sin(frameCount * 0.15) * 2 : 0;
  const currentY = y + bobOffset;
  
  // Shadow
  ctx.save();
  ctx.globalAlpha = 0.3;
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.ellipse(x, y + 50, 20, 5, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Head
  ctx.fillStyle = '#8B6F47';
  ctx.beginPath();
  ctx.arc(x, currentY, 15, 0, Math.PI * 2);
  ctx.fill();

  // Hair
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, currentY - 8, 15, Math.PI, 0);
  ctx.fill();

  // Body
  ctx.fillStyle = color;
  ctx.fillRect(x - 20, currentY + 15, 40, 40);
}
