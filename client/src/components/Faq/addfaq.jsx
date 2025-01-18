import React, { useState } from 'react';

const AddFAQ = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/faqs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question, answer }),
            });
            if (response.ok) {
                alert('FAQ ajoutée avec succès !');
                setQuestion('');
                setAnswer('');
            }
        } catch (error) {
            console.error(error);
            alert('Erreur lors de l\'ajout de la FAQ.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Question :
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                />
            </label>
            <label>
                Réponse :
                <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default AddFAQ;
