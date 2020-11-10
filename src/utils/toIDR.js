export default function toIDR(idr, withIDR = true) {
  const parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `${withIDR ? 'Rp. ' : ''}${parsed}`;
}
