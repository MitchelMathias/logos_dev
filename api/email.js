const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    
    if (req.method === 'OPTIONS') return res.status(200).end();
    
    if (req.method === 'POST') {
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'mitchelmathias2904@gmail.com',
                    pass: 'xpfjrspogjajryci'
                }
            });

            await transporter.sendMail({
                from: '"Site Logos" <mitchelmathias2904@gmail.com>',
                to: 'mitchel.mathias.dev@gmail.com',
                subject: 'Contratando serviço de criação de sites',
                text: `Nome: ${req.body.nome}\nEmail: ${req.body.email}\nEmpresa: ${req.body.suaEmpresa}\nMensagem: ${req.body.mensagem}`
            });

            res.status(200).json({ message: 'E-mail enviado!' });
            
        } catch (err) {
            console.error('Erro detalhado:', err);
            res.status(500).json({ message: 'Erro: ' + err.message });
        }
    }
}