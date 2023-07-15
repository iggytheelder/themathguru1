import styles from './StyleImage.module.css'
import Image from 'next/image'

export default function Cover({ src, width, height, alt, boxShadow, color, borderRadius, border }) {
  return (
    <div className = {styles.imageDiv} style = {{
      boxShadow: boxShadow + color,
      background: color,
      borderRadius: borderRadius,
      border: border
    }}>
      <Image
        className = {styles.image}
        src = {src}
        width={width}
        height={height}
        alt={alt}
        style = {{borderRadius: borderRadius}}
      />
    </div>
 );
}
