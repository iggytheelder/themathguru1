import styles from './StyleImage.module.css'
import Image from 'next/image'

export default function Cover({ src, width, height, alt, boxShadowColor }) {
  return (
    <div className = {styles.coverDiv} style = {{boxShadow: "5px 5px 0px 5px " + boxShadowColor, background: boxShadowColor }}>
      <Image
        className = {styles.coverImage}
        src = {src}
        width={width}
        height={height}
        alt={alt}
      />
    </div>
 );
}
