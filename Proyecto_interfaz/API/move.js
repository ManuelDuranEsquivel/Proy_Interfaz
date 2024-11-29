// /api/move.js
module.exports = (req, res) => {
    const { action } = req.query;

    if (action === 'forward') {
        res.status(200).json({ message: 'El robot se mueve hacia adelante' });
    } else if (action === 'backward') {
        res.status(200).json({ message: 'El robot se mueve hacia atrás' });
    } else if (action === 'left') {
        res.status(200).json({ message: 'El robot gira a la izquierda' });
    } else if (action === 'right') {
        res.status(200).json({ message: 'El robot gira a la derecha' });
    } else if (action === 'stop') {
        res.status(200).json({ message: 'El robot se detiene' });
    } else {
        res.status(400).json({ error: 'Acción inválida' });
    }
};
