import React from 'react';
import './IntroBookCard.css';
import CustomButton from '../../buttons/CustomButton';
import arrow from "../../../assets/arrow.svg";

const IntroBookCard = ({ moveCards }) => {
    return (
        <div className="intro-book-card">
            <div className="intro-book-card-overlay"></div>
            <div className="intro-book-card-content">
                <h2 className="intro-book-card-title">Explore the Lab</h2>
                <div className="intro-book-card-paragraph">
                    <p className="intro-book-card-paragraph-one">OUR SYSTEM BLENDS PSYCHOLOGY, MEDITATIVE PRACTICES, AND THE ART OF PERFORMANCE INTO A SINGLE TRANSFORMATIVE EXPERIENCE.</p>
                    <p className="intro-book-card-paragraph-two">WE DIVE DEEP, HELPING YOU EXPLORE HIDDEN PARTS OF YOURSELF, BUILD SELF-CONFIDENCE, AND UNCOVER YOUR POTENTIAL THROUGH FOUR STAGES IN A CYCLE OF CONTINUOUS GROWTH.</p>
                </div>
                <div className="intro-book-card-paragraph-desktop-container">
                    <p className="intro-book-card-paragraph-desktop">OUR SYSTEM BLENDS PSYCHOLOGY, MEDITATIVE PRACTICES,<br />AND THE ART OF PERFORMANCE INTO A SINGLE<br />TRANSFORMATIVE EXPERIENCE.WE DIVE DEEP, HELPING<br />YOU EXPLORE HIDDEN PARTS OF YOURSELF, BUILD SELF-<br />CONFIDENCE, AND UNCOVER YOUR POTENTIAL THROUGH<br />FOUR STAGES IN A CYCLE OF CONTINUOUS GROWTH.</p>
                </div>
            </div>
        </div>
    );
};

export default IntroBookCard;
