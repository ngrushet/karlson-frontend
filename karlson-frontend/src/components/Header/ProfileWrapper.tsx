'use client'
import { useState } from 'react'
import Image from 'next/image';

import noAvatar from '/public/noavatar_copy.png';
import arrowDown from '/public/arrow-down.svg'

import styles from './ProfileWrapper.module.css';
import UserDropdown from './UserDropdown';

export default function ProfileWrapper() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className={styles['profile-wrap']}>
            <div className={styles.avatar} onClick={toggleDropdown}>
                <Image src={noAvatar} alt="avatar" className={styles['avatar-image']} />
                <Image src={arrowDown} alt="arrow-down" />
            </div>
            <UserDropdown isDropdownOpen={isDropdownOpen} />
        </div >
    );
}