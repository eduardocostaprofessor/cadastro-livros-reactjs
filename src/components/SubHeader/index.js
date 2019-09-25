import React from 'react';
import './style.css'
import { MdAssignment } from 'react-icons/md';

export default () => (
    <section className="subheader">
        <MdAssignment className="subheader__book" />
        <h1 className="subheader__title">Livros</h1>
    </section>
)