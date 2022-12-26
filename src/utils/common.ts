/**
 * 랜덤 수 생성 함수
 *
 * @param {number} max 최대 몇 까지
 * @returns {number} 1부터 최대 수 까지의 랜덤 수
 */
export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
