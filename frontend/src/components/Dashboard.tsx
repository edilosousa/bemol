import React, { useState } from 'react';

const channels = [
  { channel: 'WhatsApp', message: 'Olá, como posso ajudar você hoje?' },
  { channel: 'E-mail', message: 'Seu pedido foi processado com sucesso!' },
  { channel: 'Chat', message: 'Temos uma oferta especial para você!' },
];

const Dashboard: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState('');

  const handleShowModal = (message: string) => {
    setSelectedMessage(message);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2>Dashboard de Interações</h2>
      </div>

      <div className="row mb-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header bg-info text-white">Canais de Interação</div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Canal</th>
                    <th>Mensagem</th>
                  </tr>
                </thead>
                <tbody>
                  {channels.map((channel, index) => (
                    <tr key={index} onClick={() => handleShowModal(channel.message)} style={{ cursor: 'pointer' }}>
                      <td>{channel.channel}</td>
                      <td>{channel.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal show" style={{ display: 'block' }} tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Chat de Interação</h5>
              </div>
              <div className="modal-body">
                <p>{selectedMessage}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Fechar</button>
                <button type="button" className="btn btn-primary">Responder</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
