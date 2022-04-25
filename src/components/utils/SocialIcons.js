import React from 'react'
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'
import useData from '../../hooks/useData'
export const SocialIcon = ({ size, colored }) => {
  const { company } = useData()
  return (
    <div className="social is-flex">
      {company.facebook && (
        <a
          href={company.facebook}
          className={`social__icons is-flex is-justify-content-center is-align-items-center`}
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF
            size={size}
            className={`social__icon ${colored ? `${colored}` : ''}`}
          />
        </a>
      )}
      {company.instagram && (
        <a
          href={company.instagram}
          className={`social__icons is-flex is-justify-content-center is-align-items-center`}
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram
            size={size}
            className={`social__icon ${colored ? `${colored}` : ''}`}
          />
        </a>
      )}
      {company.linkedin && (
        <a
          href={company.linkedin}
          className={`social__icons is-flex is-justify-content-center is-align-items-center`}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn
            size={size}
            className={`social__icon ${colored ? `${colored}` : ''}`}
          />
        </a>
      )}
      {company.twitter && (
        <a
          href={company.twitter}
          className={`social__icons is-flex is-justify-content-center is-align-items-center `}
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter
            size={size}
            className={`social__icon ${colored ? `${colored}` : ''}`}
          />
        </a>
      )}
      {company.youtube && (
        <a
          href={company.youtube}
          className={`social__icons is-flex is-justify-content-center is-align-items-center`}
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube
            size={size}
            className={`social__icon ${colored ? `${colored}` : ''}`}
          />
        </a>
      )}
      {company.google && (
        <a
          href={company.google}
          className={`social__icons is-flex is-justify-content-center is-align-items-center`}
          target="_blank"
          rel="noreferrer"
        >
          <FaGooglePlusG
            size={size}
            className={`social__icon ${colored ? `${colored}` : ''}`}
          />
        </a>
      )}
      {company.telegram && (
        <a
          href={company.google}
          className={`social__icons is-flex is-justify-content-center is-align-items-center`}
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegram
            size={size}
            className={`social__icon ${colored ? `${colored}` : ''}`}
          />
        </a>
      )}
    </div>
  )
}
