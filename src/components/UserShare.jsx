import React from 'react'
import {EmailShareButton, TwitterShareButton, WhatsappShareButton, FacebookShareButton} from "react-share"
import {EmailIcon, TwitterIcon, WhatsappIcon, FacebookIcon} from "react-share"

const UserShare = ({title}) => {
  return (
    <div className='UserShare bg-success d-flex gap-2 p-3 position-absolute rounded-4'>
        <EmailShareButton className='d-flex flex-column rounded-circle' title= {`${title} from Beta Home Services `} seperator="--" url={window.location.href}> <EmailIcon className='rounded-circle' /></EmailShareButton>
        <TwitterShareButton className='d-flex flex-column' title= {`${title} from Beta Home Services `} seperator="--" url={window.location.href}><TwitterIcon className='rounded-circle'/></TwitterShareButton>
        <WhatsappShareButton className='d-flex flex-column' title= {`${title} from Beta Home Services `} seperator="--" url={window.location.href}> <WhatsappIcon className='rounded-circle'/></WhatsappShareButton>
        <FacebookShareButton className='d-flex flex-column' title= {`${title} from Beta Home Services `} seperator="--" url={window.location.href}> <FacebookIcon className='rounded-circle'/></FacebookShareButton>
    </div>
  )
}

export default UserShare