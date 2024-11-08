import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import styles from './Reviews.module.css'; // Asegúrate de tener estilos apropiados

const Review = ({ reviews, onSubmit }) => {
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(0);

    const handleSubmit = () => {
        if (reviewText.trim() && rating) {
            if (typeof onSubmit === 'function') {
                onSubmit({ text: reviewText, rating });
                setReviewText('');
                setRating(0);
            } else {
                console.error("onSubmit prop is not a function");
            }
        }
    };

    return (
        <div className={styles.reviewContainer}>
            <h2>Reseñas</h2>
            <div className={styles.reviewForm}>
                <Rating
                    value={rating}
                    onChange={(e) => setRating(e.value)}
                    stars={5}
                    cancel={false}
                />
                <InputTextarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    rows={5}
                    placeholder="Escribe tu reseña aquí..."
                />
                <Button label="Enviar Reseña" onClick={handleSubmit} />
            </div>
            <div className={styles.reviewList}>
                {reviews.map((review, index) => (
                    <Card key={index} className={styles.reviewCard}>
                        <Rating value={review.rating} readOnly stars={5} cancel={false} />
                        <p>{review.text}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Review;