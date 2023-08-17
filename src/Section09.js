import React from 'react'

function Section09() {
//<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4395.975724259186!2d121.29461386837104!3d25.031665338137554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAxJzUxLjIiTiAxMjHCsDE3JzQyLjYiRQ!5e0!3m2!1szh-TW!2stw!4v1692290063340!5m2!1szh-TW!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  return (
    <div className='w-full h-[50vh] md:h-[65vh]'>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4395.975724259186!2d121.29461386837104!3d25.031665338137554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAxJzUxLjIiTiAxMjHCsDE3JzQyLjYiRQ!5e0!3m2!1szh-TW!2stw!4v1692290063340!5m2!1szh-TW!2stw" 
        style={{ border: '0', width: '100%', height: '100%' }}
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Section09